import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCross, FaPaw, FaStar, FaVenusMars } from "react-icons/fa";

import Character from "@/types/Character";
import TextIconBox from "../ui/TextIconBox";

export default function CharacterListItem({ character }: { character: Character }) {
  const { name, image, species, gender, born, died, slug } = character.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-center">
        <div className="w-72 h-72 relative">
          <Image
            src={image || "/images/missing_character.svg"}
            alt={name}
            className="rounded-lg"
            fill
            objectFit="contain"
          />
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="space-y-1 mt-3">
          {species && <TextIconBox icon={FaPaw} text={species} />}
          {gender && <TextIconBox icon={FaVenusMars} text={gender} />}
          {born && <TextIconBox icon={FaStar} text={born} />}
          {died && <TextIconBox icon={FaCross} text={died} />}
        </div>
      </div>
      <Link
        href={`/characters/${slug}`}
        className="block mt-auto text-center bg-secondary rounded-lg py-2 text-white opacity-90 hover:opacity-100">
        View Character
      </Link>
    </div>
  );
}
