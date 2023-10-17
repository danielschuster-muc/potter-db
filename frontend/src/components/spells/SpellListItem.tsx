import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaHatWizard } from "react-icons/fa";
import { FaBookSkull } from "react-icons/fa6";

import Spell from "@/types/Spell";
import TextIconBox from "../ui/TextIconBox";

export default function SpellListItem({ spell }: { spell: Spell }) {
  const { name, image, incantation, category, slug } = spell.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-center mb-2">
        <div className="w-72 h-72 flex justify-center">
          <Image
            src={image || "/images/missing_spell.svg"}
            alt={name}
            className="rounded-lg h-auto w-auto object-contain object-center"
            width={200}
            height={200}
            priority={!image}
          />
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="space-y-1 mt-3">
          {incantation && <TextIconBox icon={FaHatWizard} text={incantation} />}
          {category && <TextIconBox icon={FaBookSkull} text={category} />}
        </div>
      </div>
      <Link
        href={`/spells/${slug}`}
        className="mt-auto text-center bg-secondary rounded-lg py-2 text-white opacity-90 hover:opacity-100">
        View Spell
      </Link>
    </div>
  );
}
