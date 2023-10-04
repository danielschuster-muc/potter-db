"use client";

import useSWR from "swr";

import Character from "@/types/Character";
import CharacterDetailsHeader from "@/components/characters/CharacterDetailsHeader";
import CharacterDetailsBody from "@/components/characters/CharacterDetailsBody";
import CharacterDetailsSkeleton from "@/components/characters/CharacterDetailsSkeleton";

export default function CharacterShow({ params }: { params: { slug: string } }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.potterdb.com/v1/characters/${params.slug}`,
    fetcher,
  );

  if (isLoading) return <CharacterDetailsSkeleton />;
  if (error) return <h2>Failed to load data.</h2>;

  const result = data?.data as Character;

  return (
    <>
      <CharacterDetailsHeader character={result} />
      <CharacterDetailsBody character={result} />
    </>
  );
}
