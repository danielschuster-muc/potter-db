import React from "react";
import Movie from "@/types/Movie";

import { simpleFetch } from "@/lib/utils";
import { notFound } from "next/navigation";
import MovieAccordionList from "@/components/movies/MovieAccordionList";
import MovieDetailsBody from "@/components/movies/MovieDetailsBody";

export default async function MovieShow({ params }: { params: { slug: string } }) {
  const rawMovie = await simpleFetch(`https://api.potterdb.com/v1/movies/${params.slug}`);

  if (!rawMovie || !rawMovie?.data) {
    return notFound();
  }

  const result = rawMovie?.data as Movie;

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{result.attributes.title}</h1>
      <MovieDetailsBody movie={result} />
      <MovieAccordionList movie={result} />
    </>
  );
}
