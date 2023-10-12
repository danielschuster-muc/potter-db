import { notFound } from "next/navigation";

import CharacterDetailsHeader from "@/components/characters/CharacterDetailsHeader";
import CharacterDetailsBody from "@/components/characters/CharacterDetailsBody";
import CharacterAccordionList from "@/components/characters/CharacterAccordionList";
import { simpleFetch } from "@/lib/utils";
import Character from "@/types/Character";

export default async function CharacterShow({ params }: { params: { slug: string } }) {
  const rawCharacter = await simpleFetch(`https://api.potterdb.com/v1/characters/${params.slug}`);

  if (!rawCharacter || !rawCharacter?.data) {
    return notFound();
  }

  const result = rawCharacter?.data as Character;

  return (
    <>
      <CharacterDetailsHeader character={result} />
      <CharacterDetailsBody character={result} />
      <CharacterAccordionList character={result} />
    </>
  );
}
