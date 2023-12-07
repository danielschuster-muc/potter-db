import React from "react";

import BookList from "@/components/books/BookList";
import { simpleFetch } from "@/lib/utils";
import Book from "@/types/Book";

export default async function BookIndex() {
  const rawBooks = await simpleFetch(`https://api.potterdb.com/v1/books`);
  const results = rawBooks?.data as Book[];

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Books</h1>
      <BookList results={results} />
    </>
  );
}
