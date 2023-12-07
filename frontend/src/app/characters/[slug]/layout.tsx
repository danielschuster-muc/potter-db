import React from "react";

import { simpleFetch } from "@/lib/utils";
import Character from "@/types/Character";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const rawCharacter = await simpleFetch(`https://api.potterdb.com/v1/characters/${params.slug}`);

  if (!rawCharacter || !rawCharacter.data) {
    return {
      title: "Not Found | Potter DB",
      description: "Character not found.",
    };
  }

  const character = rawCharacter?.data as Character;
  const { name, born, died, gender, species } = character.attributes;

  return {
    title: `${name} | Potter DB`,
    description: `${born ? "Born: " + born + " | " : ""}${died ? "Died: " + died + " | " : ""}${
      gender ? "Gender: " + gender + " | " : ""
    }${species ? "Species: " + species : ""}`,
  };
}

export async function generateStaticParams() {
  const fetchedCharacters = await simpleFetch(
    "https://api.potterdb.com/v1/characters?filter[house_not_null]=true",
  );

  const characterSlugs = await fetchedCharacters?.data?.map(
    (character: Character) => character.attributes.slug,
  );

  const additionalSlugs = [
    "harry-potter",
    "ronald-weasley",
    "hermione-granger",
    "ginevra-weasley",
    "severus-snape",
    "albus-dumbledore",
    "tom-riddle",
    "draco-malfoy",
    "james-potter-i",
    "lily-j-potter",
    "albus-potter",
    "dobby",
    "sirius-black",
    "luna-lovegood",
    "rubeus-hagrid",
    "dudley-dursley",
    "vernon-dursley",
    "petunia-dursley",
    "arthur-weasley",
    "molly-weasley",
  ];

  const slugs = [...characterSlugs, ...additionalSlugs].sort();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
