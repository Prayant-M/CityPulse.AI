import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

// Service to fetch cell data from Firestore
export const fetchCellData = async () => {
  try {
    const cellDataCollection = collection(db, 'CellData');
    const cellDataSnapshot = await getDocs(cellDataCollection);
    const cellDataList = cellDataSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log('Fetched cell data:', cellDataList);
    return cellDataList;
  } catch (error) {
    console.error('Error fetching cell data:', error);
    throw error;
  }
};

// Service to get location name using reverse geocoding
export const getLocationName = async (lat, lng) => {
  try {
    const geocoder = new window.google.maps.Geocoder();
    
    return new Promise((resolve, reject) => {
      geocoder.geocode(
        { location: { lat, lng } },
        (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              // Get the formatted address or area name
              const address = results[0].formatted_address;
              // Try to get a more specific area name
              const addressComponents = results[0].address_components;
              const locality = addressComponents.find(
                component => component.types.includes('locality') || 
                            component.types.includes('sublocality')
              );
              
              resolve(locality ? locality.long_name : address);
            } else {
              resolve('Unknown Location');
            }
          } else {
            console.error('Geocoder failed due to: ' + status);
            resolve('Unknown Location');
          }
        }
      );
    });
  } catch (error) {
    console.error('Error in reverse geocoding:', error);
    return 'Unknown Location';
  }
};

// Utility function to create rectangle bounds for grid cells
export const createCellBounds = (minLat, minLon, maxLat, maxLon) => {
  return new window.google.maps.LatLngBounds(
    new window.google.maps.LatLng(minLat, minLon),
    new window.google.maps.LatLng(maxLat, maxLon)
  );
};
