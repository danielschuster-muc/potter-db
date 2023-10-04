import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Links({
  wiki,
  slug,
  resource,
}: {
  wiki: string;
  slug: string;
  resource: "books" | "chapters" | "characters" | "movies" | "spells" | "potions";
}) {
  return (
    <div className="flex justify-center mt-2 space-x-8">
      <Link
        href={`https://api.potterdb.com/v1/${resource}/${slug}`}
        className="my-2 inline-flex items-center text-center text-gray-300 hover:text-white hover:underline">
        API
        <BsBoxArrowUpRight className="ml-1" />
      </Link>
      <Link
        href={wiki}
        className="my-2 inline-flex items-center text-center text-gray-300 hover:text-white hover:underline">
        Wiki
        <BsBoxArrowUpRight className="ml-1" />
      </Link>
    </div>
  );
}
