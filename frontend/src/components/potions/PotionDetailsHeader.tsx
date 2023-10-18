"use client";

import Potion from "@/types/Potion";

export default function PotionDetailsHeader({ potion }: { potion: Potion }) {
  const { name } = potion.attributes;

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{name}</h1>
    </>
  );
}
