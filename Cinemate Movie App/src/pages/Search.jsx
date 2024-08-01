import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Card } from "../components";
import { useSearchParams } from "react-router-dom";

function MovieList({apiPath}) {
  console.log(apiPath)
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
 const {data:movies} = useFetch(apiPath,queryTerm)

  return (
    <>
    <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
    <div className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {movies.map((movie) => (
          <Card key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
        </>
  );
}

export default MovieList;