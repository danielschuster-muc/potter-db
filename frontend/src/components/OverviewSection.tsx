import React from "react";
import LinkButton from "./ui/LinkButton";

export default function OverviewSection() {
  return (
    <div className="mt-10 p-5 border-2 border-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-5">Search our Database</h3>
      <div className="flex flex-row justify-center gap-4">
        <LinkButton title="Books" href="/books" />
        <LinkButton title="Characters" href="/characters" />
        <LinkButton title="Movies" href="/movies" />
        <LinkButton title="Potions" href="/potions" />
        <LinkButton title="Spells" href="/spells" />
      </div>
    </div>
  );
}
