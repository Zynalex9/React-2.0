import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";

function MovieList({ apiPath,title }) {
  console.log(apiPath);
  const { data: movies } = useFetch(apiPath);
const pageTitle = useTitle(title)
  return (
    <div className="max-w-7xl mx-auto py-7 ">
      <div className="flex justify-start flex-wrap other:justify-evenly">
        {movies.map((movie) => (
          <Card key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
