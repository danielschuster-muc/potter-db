import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDay, FaBook, FaPen } from "react-icons/fa";

import Book from "@/types/Book";
import TextIconBox from "../ui/TextIconBox";

export default function BookListItem({ book }: { book: Book }) {
  const { title, cover, slug, release_date, pages, author } = book.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="relative w-full h-72 rounded-lg">
        <Image
          src={cover || "/images/missing_book.svg"}
          alt={title}
          className="rounded-lg object-contain object-center"
          fill
          quality={70}
          priority={!cover}
        />
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="space-y-1 mt-3">
          {release_date && (
            <TextIconBox icon={FaCalendarDay} text={new Date(release_date).toLocaleDateString()} />
          )}
          {pages && <TextIconBox icon={FaBook} text={pages.toString()} />}
          {author && <TextIconBox icon={FaPen} text={author.toString()} />}
        </div>
      </div>
      <Link
        href={`/books/${slug}`}
        className="mt-auto text-center bg-secondary rounded-lg py-2 text-white opacity-90 hover:opacity-100">
        View Book
      </Link>
    </div>
  );
}
