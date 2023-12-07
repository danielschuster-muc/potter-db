"use client";

import { useState } from "react";
import useSWRInfinite from "swr/infinite";

import PotionList from "@/components/potions/PotionList";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import Searchbar from "@/components/ui/Searchbar";
import Potion from "@/types/Potion";
import ApiResponse from "@/types/ApiResponse";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex: number, previousPageData: ApiResponse, query: string) => {
  if (previousPageData && !previousPageData.data.length) return null;
  return `https://api.potterdb.com/v1/potions?page[number]=${pageIndex + 1}&page[size]=24${
    query.trim.length <= 0 ? `&filter[name_cont_any]=${query}` : ""
  }`;
};

export default function PotionIndex() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, setSize, size } = useSWRInfinite(
    (pageIndex, previousPageData) => getKey(pageIndex, previousPageData, query),
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  const totalResults = data ? data[0].meta.pagination.records : 0;
  const results = (data ? data.map((page) => page.data).flat() : []) as Potion[];

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Potion Search</h1>
      <Searchbar
        setQuery={setQuery}
        setSize={setSize}
        totalResults={totalResults}
        isLoading={isLoading}
      />
      <PotionList results={results} error={error} isLoading={isLoading} />
      <LoadMoreButton
        results={results}
        totalResults={totalResults}
        isLoading={isLoading}
        setSize={setSize}
        size={size}
        type="potions"
      />
    </>
  );
}
