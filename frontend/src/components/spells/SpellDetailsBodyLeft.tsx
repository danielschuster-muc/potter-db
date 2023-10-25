import Image from "next/image";
import React from "react";

import Spell from "@/types/Spell";
import Links from "../ui/Links";

export default function SpellDetailsBodyLeft({ spell }: { spell: Spell }) {
  const { name, image, wiki, slug } = spell.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Image
        src={image || "/images/missing_spell.svg"}
        alt={name}
        className="rounded-lg object-contain"
        width="400"
        height="400"
        priority
      />
      <Links wiki={wiki} slug={slug} resource="spells" />
    </div>
  );
}
