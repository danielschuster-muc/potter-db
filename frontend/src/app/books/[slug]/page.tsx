import BookAccordionList from "@/components/books/BookAccordionList";
import BookDetailsBody from "@/components/books/BookDetailsBody";
import { simpleFetch } from "@/lib/utils";
import Book from "@/types/Book";
import { notFound } from "next/navigation";
import React from "react";

export default async function BookShow({ params }: { params: { slug: string } }) {
  const rawBook = await simpleFetch(`https://api.potterdb.com/v1/books/${params.slug}`);

  if (!rawBook || !rawBook?.data) {
    return notFound();
  }

  const result = rawBook?.data as Book;

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{result.attributes.title}</h1>
      <BookDetailsBody book={result} />
      <BookAccordionList slug={params.slug} />
    </>
  );
}
