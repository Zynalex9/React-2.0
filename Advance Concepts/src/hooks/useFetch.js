import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const result = await res.json();
        setLoading(false);
        setData(result);
        setError(false)
      } catch (error) {
        setLoading(false);
        setError("Failed to Fetch Data, Server is down")
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error};
};
