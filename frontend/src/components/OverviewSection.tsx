import Link from "next/link";
import React from "react";

export default function OverviewSection() {
  // TODO:
  return (
    <div className="mt-10 p-5 border-2 border-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-5">Search DB</h3>
      <div className="flex flex-row justify-center gap-4">
        <Link
          href="/books"
          className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full">
          Books
        </Link>
        <Link
          href="/characters"
          className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full">
          Characters
        </Link>
        <Link
          href="/movies"
          className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full">
          Movies
        </Link>
        <Link
          href="/potions"
          className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full">
          Potions
        </Link>
        <Link
          href="/spells"
          className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full">
          Spells
        </Link>
      </div>
    </div>
  );
}
