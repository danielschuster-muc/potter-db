import React from "react";
import Image from "next/image";

import Book from "@/types/Book";
import Links from "../ui/Links";

export default function BookDetailsBodyLeft({ book }: { book: Book }) {
  const { title, cover, wiki, slug } = book.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src={cover || "/images/missing_book.svg"}
          alt={title}
          className="rounded-lg object-contain"
          fill
          priority
        />
      </div>
      <Links wiki={wiki} slug={slug} resource="books" />
    </div>
  );
}
