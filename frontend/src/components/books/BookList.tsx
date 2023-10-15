import React from "react";

import Book from "@/types/Book";
import BookListItem from "./BookListItem";

export default function BookList({ results }: { results: Book[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((book) => {
        return <BookListItem key={book.id} book={book} />;
      })}
    </div>
  );
}
