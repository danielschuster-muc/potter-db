import React from "react";

import { simpleFetch } from "@/lib/utils";
import Movie from "@/types/Movie";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const rawMovie = await simpleFetch(`https://api.potterdb.com/v1/movies/${params.slug}`);

  if (!rawMovie || !rawMovie.data) {
    return {
      title: "Not Found | Potter DB",
      description: "Movie not found.",
    };
  }

  const movie = rawMovie?.data as Movie;
  const { title, summary } = movie.attributes;

  return {
    title: `${title} | Potter DB`,
    description: summary,
  };
}

export async function generateStaticParams() {
  const fetchedMovies = await simpleFetch("https://api.potterdb.com/v1/movies");

  const slugs = await fetchedMovies?.data?.map((movie: Movie) => movie.attributes.slug);

  return slugs.map((slug: string) => ({ slug: slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
