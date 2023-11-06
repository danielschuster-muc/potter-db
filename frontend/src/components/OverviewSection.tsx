import React from "react";
import LinkButton from "./ui/LinkButton";

async function getData() {
  const query = `
    {
      books {
        totalCount
      }
      characters {
        totalCount
      }
      spells {
        totalCount
      }
      potions {
        totalCount
      }
      movies {
        totalCount
      }
    }
  `;

  const result = await fetch("https://api.potterdb.com/graphql", {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 * 60 * 24 * 7 },
  }).then((res) => res.json());

  if (result?.data) {
    return result.data;
  }

  return {};
}

export default async function OverviewSection() {
  const data = await getData();
  const { books, characters, spells, potions, movies } = data;

  return (
    <div className="mt-10 p-5 border-2 border-gray-200 rounded-lg w-full md:w-5/6">
      <h3 className="text-2xl font-bold text-center mb-5">Search our Database</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <LinkButton title={`${books.totalCount} Books`} href="/books" />
        <LinkButton title={`${characters.totalCount} Characters`} href="/characters" />
        <LinkButton title={`${movies.totalCount} Movies`} href="/movies" />
        <LinkButton title={`${potions.totalCount} Potions`} href="/potions" />
        <LinkButton title={`${spells.totalCount} Spells`} href="/spells" />
      </div>
    </div>
  );
}
