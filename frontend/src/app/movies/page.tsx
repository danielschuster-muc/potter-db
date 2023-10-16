import React from "react";

import { simpleFetch } from "@/lib/utils";
import Movie from "@/types/Movie";
import MovieList from "@/components/movies/MovieList";

export default async function MovieIndex() {
  const rawMovies = await simpleFetch(`https://api.potterdb.com/v1/movies`);
  const results = rawMovies?.data as Movie[];

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Movies</h1>
      <MovieList results={results} />
    </>
  );
}
