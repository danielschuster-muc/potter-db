"use client";

import React, { useEffect, useState } from "react";

import Character from "@/types/Character";

export default function CharacterDetailsHeader({ character }: { character: Character }) {
  const { name, alias_names } = character.attributes;
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    if (alias_names?.length > 0) {
      setSubtitle(alias_names[Math.floor(Math.random() * alias_names.length)]);
    }
  }, [alias_names]);

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{name}</h1>
      <h2 className="text-lg text-gray-300 text-center mb-3">{subtitle}</h2>
    </>
  );
}
