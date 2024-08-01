import React, { useEffect, useState } from "react";

function useFetch(apiPath) {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=09e9c58d268e354b1e572da3114678bf`
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies()
  }, [url]);
  return {data}
}

export default useFetch;
