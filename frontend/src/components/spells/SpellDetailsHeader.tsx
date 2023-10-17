"use client";

import React from "react";

import Spell from "@/types/Spell";

export default function SpellDetailsHeader({ spell }: { spell: Spell }) {
  const { name, incantation } = spell.attributes;
  const subtitle = incantation ? incantation : "";

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{name}</h1>
      <h2 className="text-lg text-gray-300 text-center mb-3">{subtitle}</h2>
    </>
  );
}
