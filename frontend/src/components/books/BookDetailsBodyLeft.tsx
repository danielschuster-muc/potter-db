import Book from "@/types/Book";
import Image from "next/image";
import React from "react";
import Links from "../ui/Links";

export default function BookDetailsBodyLeft({ book }: { book: Book }) {
  const { title, cover, wiki, slug } = book.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Image
        src={cover || "/images/missing_book.svg"}
        alt={title}
        className="rounded-lg object-contain"
        width="400"
        height="400"
        priority
      />
      <Links wiki={wiki} slug={slug} resource="books" />
    </div>
  );
}
