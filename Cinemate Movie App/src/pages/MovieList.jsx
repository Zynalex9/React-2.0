import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";

function MovieList({apiPath}) {
  console.log(apiPath)
 const {data:movies} = useFetch(apiPath)
  // useEffect(() => {
  //   async function FetchAPI() {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=09e9c58d268e354b1e572da3114678bf"
  //     );
  //     const data = await response.json();
  //     setMovies(data.results);
  //   }
  //   FetchAPI();
  // }, []);
  return (
    <div className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
