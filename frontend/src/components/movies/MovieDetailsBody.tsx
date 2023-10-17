import React from "react";

import Movie from "@/types/Movie";
import MovieDetailsBodyLeft from "./MovieDetailsBodyLeft";
import MovieDetailsBodyRight from "./MovieDetailsBodyRight";

export default function MovieDetailsBody({ movie }: { movie: Movie }) {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <MovieDetailsBodyLeft movie={movie} />
        <MovieDetailsBodyRight movie={movie} />
      </div>
    </div>
  );
}
