"use client";

import CharacterList from "@/components/characters/CharacterList";
import useSWR from "swr";

export default function CharacterIndex() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("https://api.potterdb.com/v1/characters", fetcher);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-2">Character Search</h1>
      {/* <Searchbar/> */}
      <div className="container">
        <CharacterList data={data} error={error} isLoading={isLoading} />
      </div>
    </>
  );
}
