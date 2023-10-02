"use client";

import CharacterList from "@/components/characters/CharacterList";
import { CharactersResponse } from "@/types/Character";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex: number, previousPageData: CharactersResponse, query: string) => {
  if (previousPageData && !previousPageData.data.length) return null; // reached the end
  if (query == "")
    return `https://api.potterdb.com/v1/characters?page[number]=${pageIndex + 1}&page[size]=10`; // without query
  return `https://api.potterdb.com/v1/characters?page[number]=${
    pageIndex + 1
  }&page[size]=10&filter[name_cont_any]=${query}`; // with query
};

export default function CharacterIndex() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, setSize, size } = useSWRInfinite(
    (pageIndex, previousPageData) => getKey(pageIndex, previousPageData, query),
    fetcher,
  );

  const handleSearch = () => {
    setSize(1); // Reset the page size when the search query changes
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Character Search</h1>
      {/* <Searchbar/> */}

      <input
        className="border-2 border-gray-200 rounded-lg p-2 mb-4 w-full"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Harry"
      />
      <button onClick={handleSearch}>Search</button>
      <CharacterList data={data} error={error} isLoading={isLoading} />
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </>
  );
}
