import Image from "next/image";
import React from "react";

import Potion from "@/types/Potion";
import Links from "../ui/Links";

export default function PotionDetailsBodyLeft({ potion }: { potion: Potion }) {
  const { name, image, wiki, slug } = potion.attributes;
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <Image
        src={image || "/images/missing_potion.svg"}
        alt={name}
        className="rounded-lg object-contain"
        width="400"
        height="400"
        priority
      />
      <Links wiki={wiki} slug={slug} resource="potions" />
    </div>
  );
}
