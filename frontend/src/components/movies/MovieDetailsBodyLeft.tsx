import React from "react";
import Image from "next/image";

import Movie from "@/types/Movie";
import Links from "../ui/Links";

export default function MovieDetailsBodyLeft({ movie }: { movie: Movie }) {
  const { title, poster, wiki, slug } = movie.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Image
        src={poster || "/images/missing_movie.svg"}
        alt={title}
        className="rounded-lg object-contain"
        width="400"
        height="400"
        priority
      />
      <Links wiki={wiki} slug={slug} resource="movies" />
    </div>
  );
}
