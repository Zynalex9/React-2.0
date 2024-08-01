import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";

function MovieList({ apiPath }) {
  console.log(apiPath);
  const { data: movies } = useFetch(apiPath);

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
