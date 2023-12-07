import React from "react";

import Movie from "@/types/Movie";
import MovieListItem from "./MovieListItem";

export default function MovieList({ results }: { results: Movie[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((movie) => {
        return <MovieListItem key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
