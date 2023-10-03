import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCross, FaPaw, FaStar, FaVenusMars } from "react-icons/fa";

import Character from "@/types/Character";

export default function CharacterListItem({ character }: { character: Character }) {
  const { name, image, species, gender, born, died, slug } = character.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-center">
        <Image
          src={image ? image : "/images/missing_character.svg"}
          alt={name}
          className="rounded-lg w-72 h-72"
          width={72}
          height={72}
          objectFit="cover"
        />
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="space-y-1 mt-3">
          {species && (
            <div className="flex items-center space-x-1">
              <FaPaw />
              <p>{species}</p>
            </div>
          )}
          {gender && (
            <div className="flex items-center space-x-1">
              <FaVenusMars />
              <p>{gender}</p>
            </div>
          )}
          {born && (
            <div className="flex items-center space-x-1">
              <FaStar />
              <p>{born}</p>
            </div>
          )}
          {died && (
            <div className="flex items-center space-x-1">
              <FaCross />
              <p>{died}</p>
            </div>
          )}
        </div>
      </div>
      <Link
        href={`/characters/${slug}`}
        className="block mt-auto text-center text-white bg-secondary rounded-lg py-2 hover:opacity-90">
        View Character
      </Link>
    </div>
  );
}
