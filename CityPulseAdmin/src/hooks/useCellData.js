import { useEffect, useState } from "react";
import { fetchCellData } from "../services/cellDataService";

export const useCellData = () => {
  const [cellData, setCellData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCellData();
        setCellData(data);
      } catch (err) {
        setError(err.message || "Failed to load cell data");
        console.error("Error loading cell data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const refreshData = async () => {
    await loadData();
  };

  return {
    cellData,
    loading,
    error,
    refreshData,
  };
};
