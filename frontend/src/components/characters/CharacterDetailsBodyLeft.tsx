import Image from "next/image";
import React from "react";
import Links from "../ui/Links";
import Character from "@/types/Character";

export default function CharacterDetailsBodyLeft({ character }: { character: Character }) {
  const { name, image, wiki, slug } = character.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Image
        src={image || "/images/missing_character.svg"}
        alt={name}
        className="rounded-lg"
        width="400"
        height="400"
        objectFit="contain"
      />
      <Links wiki={wiki} slug={slug} resource="characters" />
    </div>
  );
}
