import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef, useState } from "react";
import { fetchCellData, getLocationName } from "../services/cellDataService";
import "./MapComponent.css";

// Get API key from environment variables or use default
const GOOGLE_MAPS_API_KEY = "AIzaSyCW8Rou5OD4f9imd9KRI0x_Y3xrZ0S98qk";

const MapComponent = ({ center, zoom, style }) => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);
  const [rectangles, setRectangles] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);
  const [cellData, setCellData] = useState([]);
  const [homeMarker, setHomeMarker] = useState(null);
  const [gridStats, setGridStats] = useState({ total: 0, withIncidents: 0, withPredictions: 0 });

  // Fetch cell data from Firestore
  useEffect(() => {
    const loadCellData = async () => {
      try {
        const data = await fetchCellData();
        console.log("Loaded cell data:", data);
        console.log("Total cells loaded:", data?.length || 0);

        // Debug: Check the structure of the first few cells
        if (data && data.length > 0) {
          console.log("Sample cell data structures:");
          data.slice(0, 3).forEach((cell, index) => {
            console.log(`Cell ${index + 1}:`, {
              id: cell.id,
              coordinates: {
                min_lat: cell.min_lat,
                max_lat: cell.max_lat,
                min_lon: cell.min_lon,
                max_lon: cell.max_lon,
                min_lng: cell.min_lng,
                max_lng: cell.max_lng,
              },
              incidents: cell.incidents,
              predicted: cell.predicted,
              hasValidCoords: !!(
                cell.min_lat &&
                cell.max_lat &&
                (cell.min_lon || cell.min_lng) &&
                (cell.max_lon || cell.max_lng)
              ),
            });
          });

          setCellData(data);

          // Update grid statistics
          const totalCells = data.length;
          const cellsWithIncidents = data.filter(
            (cell) => Array.isArray(cell.incidents) && cell.incidents.length > 0
          ).length;
          const cellsWithPredictions = data.filter(
            (cell) => Array.isArray(cell.predicted) && cell.predicted.length > 0
          ).length;

          console.log(
            `Grid Statistics: ${totalCells} total cells, ${cellsWithIncidents} with incidents, ${cellsWithPredictions} with predictions`
          );
          setGridStats({
            total: totalCells,
            withIncidents: cellsWithIncidents,
            withPredictions: cellsWithPredictions,
          });
        } else {
          console.log("No cell data found in Firestore, creating test grid");
          createTestGrid();
        }
      } catch (error) {
        console.error("Failed to load cell data:", error);
        console.log("Creating test grid due to error");
        createTestGrid();
      }
    };

    if (map) {
      loadCellData();
    }
  }, [map]);

  // Create test grid if no Firestore data
  const createTestGrid = () => {
    const testCells = [];

    // Get current map bounds to cover entire visible area
    const bounds = map ? map.getBounds() : null;

    let minLat, maxLat, minLng, maxLng;

    if (bounds) {
      // Use actual map bounds
      minLat = bounds.getSouthWest().lat();
      maxLat = bounds.getNorthEast().lat();
      minLng = bounds.getSouthWest().lng();
      maxLng = bounds.getNorthEast().lng();
    } else {
      // Fallback to a large area around Bangalore
      minLat = 12.8;
      maxLat = 13.1;
      minLng = 77.4;
      maxLng = 77.8;
    }

    // Calculate grid size based on visible area
    const latRange = maxLat - minLat;
    const lngRange = maxLng - minLng;
    const gridCount = 20; // 20x20 grid for better coverage
    const latStep = latRange / gridCount;
    const lngStep = lngRange / gridCount;

    console.log(
      `Creating grid covering area: ${minLat.toFixed(4)}, ${minLng.toFixed(
        4
      )} to ${maxLat.toFixed(4)}, ${maxLng.toFixed(4)}`
    );

    for (let i = 0; i < gridCount; i++) {
      for (let j = 0; j < gridCount; j++) {
        const cellMinLat = minLat + i * latStep;
        const cellMaxLat = cellMinLat + latStep;
        const cellMinLng = minLng + j * lngStep;
        const cellMaxLng = cellMinLng + lngStep;

        testCells.push({
          id: `grid_cell_${i}_${j}`,
          min_lat: cellMinLat,
          max_lat: cellMaxLat,
          min_lon: cellMinLng,
          max_lon: cellMaxLng,
          incidents:
            Math.random() > 0.8
              ? [`Incident ${Math.floor(Math.random() * 3) + 1}`]
              : [],
          timestamp: new Date(),
        });
      }
    }

    console.log("Created full map grid with", testCells.length, "cells");
    setCellData(testCells);
    setGridStats({
      total: testCells.length,
      withIncidents: testCells.filter((c) => c.incidents.length > 0).length,
      withPredictions: 0, // Test grid doesn't have predictions
    });
  };

  // Initialize map
  useEffect(() => {
    if (ref.current && !map) {
      const mapInstance = new window.google.maps.Map(ref.current, {
        center: center || { lat: 12.95, lng: 77.635 },
        zoom: zoom || 12, // Lower zoom to see more area
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        mapTypeId: "roadmap",
      });
      setMap(mapInstance);

      // Initialize InfoWindow
      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);

      // Add home marker at center
      const marker = new window.google.maps.Marker({
        position: center || { lat: 12.95, lng: 77.635 },
        map: mapInstance,
        title: "Home/Center Point",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          scaledSize: new window.google.maps.Size(40, 40),
        },
      });
      setHomeMarker(marker);
    }
  }, [ref, map, center, zoom]);

  const createGridRectangles = React.useCallback(async () => {
    if (!map || cellData.length === 0) return;

    // Clear existing rectangles - use a ref to avoid dependency issues
    setRectangles((prevRectangles) => {
      prevRectangles.forEach((rectangle) => rectangle.setMap(null));
      return [];
    });

    const newRectangles = [];
    console.log(`Creating rectangles for ${cellData.length} cells`);

    // Filter cells with valid coordinates first
    const validCells = cellData.filter((cell) => {
      const hasValidLat =
        typeof cell.min_lat === "number" &&
        typeof cell.max_lat === "number" &&
        !isNaN(cell.min_lat) &&
        !isNaN(cell.max_lat);
      const hasValidLng =
        (typeof cell.min_lon === "number" &&
          typeof cell.max_lon === "number" &&
          !isNaN(cell.min_lon) &&
          !isNaN(cell.max_lon)) ||
        (typeof cell.min_lng === "number" &&
          typeof cell.max_lng === "number" &&
          !isNaN(cell.min_lng) &&
          !isNaN(cell.max_lng));
      return hasValidLat && hasValidLng;
    });

    console.log(
      `Found ${validCells.length} cells with valid coordinates out of ${cellData.length} total`
    );

    if (validCells.length === 0) {
      console.warn("No cells with valid coordinates found");
      return;
    }

    // Calculate bounds of valid cell data only
    let minLat = Infinity,
      maxLat = -Infinity;
    let minLng = Infinity,
      maxLng = -Infinity;

    validCells.forEach((cell) => {
      if (typeof cell.min_lat === "number" && !isNaN(cell.min_lat)) {
        minLat = Math.min(minLat, cell.min_lat);
      }
      if (typeof cell.max_lat === "number" && !isNaN(cell.max_lat)) {
        maxLat = Math.max(maxLat, cell.max_lat);
      }
      const cellMinLng = cell.min_lon || cell.min_lng;
      const cellMaxLng = cell.max_lon || cell.max_lng;
      if (typeof cellMinLng === "number" && !isNaN(cellMinLng)) {
        minLng = Math.min(minLng, cellMinLng);
      }
      if (typeof cellMaxLng === "number" && !isNaN(cellMaxLng)) {
        maxLng = Math.max(maxLng, cellMaxLng);
      }
    });

    // Calculate center of the grid
    const gridCenterLat = (minLat + maxLat) / 2;
    const gridCenterLng = (minLng + maxLng) / 2;

    console.log(
      `Grid Center: ${gridCenterLat.toFixed(6)}, ${gridCenterLng.toFixed(6)}`
    );
    console.log(
      `Grid Bounds: ${minLat.toFixed(6)}, ${minLng.toFixed(
        6
      )} to ${maxLat.toFixed(6)}, ${maxLng.toFixed(6)}`
    );
    console.log(`Processing ${validCells.length} valid cells`);

    for (const cell of validCells) {
      // Handle both min_lon/max_lon and min_lng/max_lng formats
      const cellMinLng = cell.min_lon || cell.min_lng;
      const cellMaxLng = cell.max_lon || cell.max_lng;

      // Skip if coordinates are invalid (already filtered but double-check)
      if (!cell.min_lat || !cell.max_lat || !cellMinLng || !cellMaxLng) {
        console.warn(
          `Skipping cell ${cell.id} due to missing coordinates:`,
          cell
        );
        continue;
      }

      // Create rectangle bounds
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(cell.min_lat, cellMinLng),
        new window.google.maps.LatLng(cell.max_lat, cellMaxLng)
      );

      // Determine color based on incident count and predictions
      const incidentCount = Array.isArray(cell.incidents)
        ? cell.incidents.length
        : 0;
      const predictedCount = Array.isArray(cell.predicted)
        ? cell.predicted.length
        : 0;
      
      let fillColor = "#00FF00"; // Green for no incidents
      let strokeColor = "#00AA00";

      if (incidentCount > 0) {
        // Red for any incidents
        fillColor = "#FF0000";
        strokeColor = "#CC0000";
      } else if (predictedCount > 0) {
        // Yellow for no incidents but has predictions
        fillColor = "#FFFF00";
        strokeColor = "#CCCC00";
      }
      // Otherwise stays green (no incidents, no predictions)

      // Create rectangle
      const rectangle = new window.google.maps.Rectangle({
        bounds: bounds,
        fillColor: fillColor,
        fillOpacity: 0.3,
        strokeColor: strokeColor,
        strokeOpacity: 0.8,
        strokeWeight: 1,
        map: map,
      });

      // Calculate center for geocoding
      const centerLat = (cell.min_lat + cell.max_lat) / 2;
      const centerLng = (cellMinLng + cellMaxLng) / 2;

      // Add hover listeners with improved reliability
      let hoverTimeout = null;
      let isHovered = false;
      
      rectangle.addListener("mouseover", async (event) => {
        isHovered = true;
        
        // Clear any existing timeout
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }

        // Change rectangle appearance on hover immediately
        rectangle.setOptions({
          fillOpacity: 0.6,
          strokeWeight: 3,
        });

        // Show basic info window immediately
        const basicContent = `
          <div style="padding: 12px; min-width: 280px; font-family: Arial, sans-serif;">
            <h6 style="margin: 0 0 10px 0; color: #333; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 5px;">
              📍 ${cell.id || "Unknown Cell"}
            </h6>
            <div style="margin-bottom: 8px;">
              <strong>📍 Location:</strong> <span style="color: #999;">Loading...</span>
            </div>
            <div style="margin-bottom: 8px;">
              <strong>🌍 Coordinates:</strong><br>
              <small style="color: #666;">
                Center: ${centerLat.toFixed(6)}, ${centerLng.toFixed(6)}
              </small>
            </div>
          </div>
        `;

        // Show info window immediately
        if (infoWindow && isHovered) {
          infoWindow.setContent(basicContent);
          infoWindow.setPosition({ lat: centerLat, lng: centerLng });
          infoWindow.open(map);
        }

        // Get location name and update content
        try {
          const locationName = await getLocationName(centerLat, centerLng);
          
          // Only update if still hovering
          if (!isHovered) return;

          // Format timestamp
        let formattedTimestamp = "N/A";
        if (cell.timestamp) {
          try {
            const timestamp = cell.timestamp.toDate
              ? cell.timestamp.toDate()
              : new Date(cell.timestamp);
            formattedTimestamp = timestamp.toLocaleString();
          } catch (error) {
            console.warn("Error formatting timestamp for cell", cell.id, error);
          }
        }

        // Format incidents
        const incidentsText =
          Array.isArray(cell.incidents) && cell.incidents.length > 0
            ? cell.incidents.join(", ")
            : "No incidents reported";

        // Format predictions
        const predictedText =
          Array.isArray(cell.predicted) && cell.predicted.length > 0
            ? cell.predicted.join(", ")
            : "No predictions";

        // Get severity level
        const getSeverityLevel = (incidentCount, predictedCount) => {
          if (incidentCount > 0)
            return { text: "Active Incidents", color: "#dc3545", icon: "�" };
          if (predictedCount > 0)
            return { text: "Predicted Risk", color: "#ffc107", icon: "�" };
          return { text: "Safe", color: "#28a745", icon: "�" };
        };

        const severity = getSeverityLevel(incidentCount, Array.isArray(cell.predicted) ? cell.predicted.length : 0);

        // Create info window content
        const content = `
          <div style="padding: 12px; min-width: 280px; font-family: Arial, sans-serif;">
            <h6 style="margin: 0 0 10px 0; color: #333; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 5px;">
              📍 ${cell.id || "Unknown Cell"}
            </h6>
            <div style="margin-bottom: 8px;">
              <strong>📍 Location:</strong> ${locationName}
            </div>
            <div style="margin-bottom: 8px;">
              <strong>🌍 Coordinates:</strong><br>
              <small style="color: #666;">
                Center: ${centerLat.toFixed(6)}, ${centerLng.toFixed(6)}<br>
                Bounds: ${cell.min_lat.toFixed(4)}-${cell.max_lat.toFixed(
          4
        )}, ${cellMinLng.toFixed(4)}-${cellMaxLng.toFixed(4)}
              </small>
            </div>
            <div style="margin-bottom: 8px;">
              <strong>⚠️ Status:</strong>
              <span style="color: ${
                severity.color
              }; font-weight: bold; margin-left: 5px;">
                ${severity.icon} ${severity.text} (${incidentCount} incidents${Array.isArray(cell.predicted) && cell.predicted.length > 0 ? `, ${cell.predicted.length} predictions` : ''})
              </span>
            </div>
            <div style="margin-bottom: 8px;">
              <strong>📋 Current Incidents:</strong><br>
              <small style="color: #666; font-style: ${
                incidentCount === 0 ? "italic" : "normal"
              }; background-color: #f8f9fa; padding: 4px; border-radius: 4px; display: block;">
                ${incidentsText}
              </small>
            </div>
            <div style="margin-bottom: 8px;">
              <strong>🔮 Predicted Issues:</strong><br>
              <small style="color: #666; font-style: ${
                Array.isArray(cell.predicted) && cell.predicted.length > 0 ? "normal" : "italic"
              }; background-color: #fff3cd; padding: 4px; border-radius: 4px; display: block;">
                ${predictedText}
              </small>
            </div>
            <div style="margin-bottom: 8px;">
              <strong>🕒 Last Updated:</strong><br>
              <small style="color: #666;">${formattedTimestamp}</small>
            </div>
            <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #eee; text-align: center;">
              <small style="color: #999;">Hover to view • Click for details</small>
            </div>
          </div>
        `;

        // Show info window
        if (infoWindow) {
          infoWindow.setContent(content);
          infoWindow.setPosition({ lat: centerLat, lng: centerLng });
          infoWindow.open(map);
        }
        } catch (error) {
          console.error("Error getting location name:", error);
          // Continue with basic info window even if location name fails
        }
      });

      rectangle.addListener("mouseout", () => {
        isHovered = false;
        
        // Reset rectangle appearance
        rectangle.setOptions({
          fillOpacity: 0.3,
          strokeWeight: 1,
        });

        // Close info window after a short delay
        setTimeout(() => {
          if (infoWindow) {
            infoWindow.close();
          }
        }, 200);
      });

      // Add click listener for more detailed view
      rectangle.addListener("click", () => {
        map.fitBounds(bounds);
        map.setZoom(Math.min(map.getZoom() + 2, 18));
      });

      newRectangles.push(rectangle);
    }

    console.log(
      `Created ${newRectangles.length} rectangles out of ${validCells.length} valid cells`
    );
    setRectangles(newRectangles);

    // Center map on the grid data - only if we have valid bounds
    if (
      validCells.length > 0 &&
      !isNaN(minLat) &&
      !isNaN(maxLat) &&
      !isNaN(minLng) &&
      !isNaN(maxLng)
    ) {
      // Create bounds object with padding
      const mapBounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(minLat - 0.005, minLng - 0.005),
        new window.google.maps.LatLng(maxLat + 0.005, maxLng + 0.005)
      );

      // Fit map to show all grid cells
      map.fitBounds(mapBounds);

      // Update home marker position to grid center
      if (homeMarker && !isNaN(gridCenterLat) && !isNaN(gridCenterLng)) {
        homeMarker.setPosition({ lat: gridCenterLat, lng: gridCenterLng });
        homeMarker.setTitle(
          `Grid Center: ${gridCenterLat.toFixed(4)}, ${gridCenterLng.toFixed(
            4
          )} | ${validCells.length} cells`
        );
      }
    }
  }, [cellData, map, homeMarker, infoWindow]);

  // Create grid rectangles when map and cell data are ready
  useEffect(() => {
    if (map && cellData.length > 0 && window.google) {
      createGridRectangles();
    }
  }, [map, cellData, createGridRectangles]);

  return <div ref={ref} style={style} />;
};

const MapWrapper = ({ center, zoom, style }) => {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div
            className="d-flex justify-content-center align-items-center"
            style={style}
          >
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="alert alert-danger m-3" role="alert">
            <h4 className="alert-heading">Error Loading Map</h4>
            <p>
              Failed to load Google Maps. Please check your API key and internet
              connection.
            </p>
            <hr />
            <p className="mb-0">
              Make sure to replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual
              Google Maps API key in MapComponent.js
            </p>
          </div>
        );
      case Status.SUCCESS:
        return <MapComponent center={center} zoom={zoom} style={style} />;
      default:
        return null;
    }
  };

  return <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={render} />;
};

export default MapWrapper;
