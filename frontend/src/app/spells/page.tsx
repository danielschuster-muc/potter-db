"use client";

import { useState } from "react";
import useSWRInfinite from "swr/infinite";

import SpellList from "@/components/spells/SpellList";
import LoadMoreButton from "@/components/ui/LoadMoreButton";
import Searchbar from "@/components/ui/Searchbar";
import Spell, { SpellsResponse } from "@/types/Spell";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex: number, previousPageData: SpellsResponse, query: string) => {
  if (previousPageData && !previousPageData.data.length) return null;
  return `https://api.potterdb.com/v1/spells?page[number]=${pageIndex + 1}&page[size]=24${
    query.trim.length <= 0 ? `&filter[name_cont_any]=${query}` : ""
  }`;
};

export default function SpellIndex() {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, setSize, size } = useSWRInfinite(
    (pageIndex, previousPageData) => getKey(pageIndex, previousPageData, query),
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  const totalResults = data ? data[0].meta.pagination.records : 0;
  const results = (data ? data.map((page) => page.data).flat() : []) as Spell[];
  //   const testData = [{
  //     "id": "ef7c3503-8dea-41b2-8755-f9424ba7645e",
  //     "type": "spell",
  //     "attributes": {
  //       "slug": "age-line",
  //       "category": "Charm",
  //       "creator": null,
  //       "effect": "Prevents people above or below a certain age from access to a target",
  //       "hand": null,
  //       "image": "https://static.wikia.nocookie.net/harrypotter/images/e/e5/Age_Line_surrounding_the_Goblet_of_Fire_PM.jpg",
  //       "incantation": null,
  //       "light": "Blue",
  //       "name": "Age Line",
  //       "wiki": "https://harrypotter.fandom.com/wiki/Age_Line"
  //     },
  //     "links": {
  //       "self": "/v1/spells/ef7c3503-8dea-41b2-8755-f9424ba7645e"
  //     }
  //   },
  //   {
  //     "id": "5af173e5-480a-4f51-ab6c-a6521cfa551a",
  //     "type": "spell",
  //     "attributes": {
  //         "slug": "alarte-ascendare",
  //         "category": "Charm",
  //         "creator": null,
  //         "effect": "Rockets target upward",
  //         "hand": "Brandish wand",
  //         "image": "https://static.wikia.nocookie.net/harrypotter/images/c/c4/Alarte_Ascendare.gif",
  //         "incantation": "Alarte Ascendare(a-LAR-tay a-SEN-der-ay)",
  //         "light": "Red",
  //         "name": "Alarte Ascendare",
  //         "wiki": "https://harrypotter.fandom.com/wiki/Alarte_Ascendare"
  //     },
  //     "links": {
  //         "self": "/v1/spells/5af173e5-480a-4f51-ab6c-a6521cfa551a"
  //     }
  //     },
  //   {
  //     "id": "d09be8aa-fdba-46fb-aed4-bd207f749235",
  //     "type": "spell",
  //     "attributes": {
  //         "slug": "bat-bogey-hex",
  //         "category": "Hex",
  //         "creator": "Miranda Goshawk(mid-20th century)",
  //         "effect": "Transforms target's bogeys into bats that fly out of the victim's nose",
  //         "hand": null,
  //         "image": "https://static.wikia.nocookie.net/harrypotter/images/c/cd/Bat-Bogey_Hex_HM.png",
  //         "incantation": null,
  //         "light": null,
  //         "name": "Bat-Bogey Hex",
  //         "wiki": "https://harrypotter.fandom.com/wiki/Bat-Bogey_Hex"
  //     },
  //     "links": {
  //         "self": "/v1/spells/d09be8aa-fdba-46fb-aed4-bd207f749235"
  //     }
  // }];

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Spell Search</h1>
      <Searchbar
        setQuery={setQuery}
        setSize={setSize}
        totalResults={totalResults}
        isLoading={isLoading}
      />
      <SpellList results={results} error={error} isLoading={isLoading} />
      <LoadMoreButton
        results={results}
        totalResults={totalResults}
        isLoading={isLoading}
        setSize={setSize}
        size={size}
      />
    </>
  );
}
