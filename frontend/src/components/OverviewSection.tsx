import React from "react";

import SimpleLink from "./ui/SimpleLink";

export default function OverviewSection() {
  return (
    <div className="mt-10 p-5 border-2 border-gray-200 rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-5">Search our Database</h3>
      <div className="flex flex-row justify-center gap-4">
        <SimpleLink title="Books" href="/books" />
        <SimpleLink title="Characters" href="/characters" />
        <SimpleLink title="Movies" href="/movies" />
        <SimpleLink title="Potions" href="/potions" />
        <SimpleLink title="Spells" href="/spells" />
      </div>
    </div>
  );
}
