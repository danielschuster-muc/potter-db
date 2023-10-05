"use client";

import useSWR from "swr";

import Character from "@/types/Character";
import CharacterDetailsHeader from "@/components/characters/CharacterDetailsHeader";
import CharacterDetailsBody from "@/components/characters/CharacterDetailsBody";
import CharacterDetailsSkeleton from "@/components/characters/CharacterDetailsSkeleton";
import CharacterAccordionList from "@/components/characters/CharacterAccordionList";
import { notFound } from "next/navigation";

export default function CharacterShow({ params }: { params: { slug: string } }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.potterdb.com/v1/characters/${params.slug}`,
    fetcher,
  );

  if (isLoading) return <CharacterDetailsSkeleton />;
  if (error || !data?.data) return notFound();

  const result = data?.data as Character;

  return (
    <>
      <CharacterDetailsHeader character={result} />
      <CharacterDetailsBody character={result} />
      <CharacterAccordionList character={result} />
    </>
  );
}
