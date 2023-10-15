import React from "react";

import Book from "@/types/Book";
import BookDetailsBodyLeft from "./BookDetailsBodyLeft";
import BookDetailsBodyRight from "./BookDetailsBodyRight";

export default function BookDetailsBody({ book }: { book: Book }) {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <BookDetailsBodyLeft book={book} />
        <BookDetailsBodyRight book={book} />
      </div>
    </div>
  );
}
