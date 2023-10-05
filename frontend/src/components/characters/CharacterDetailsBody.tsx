import React from "react";

import Character from "@/types/Character";
import CharacterDetailsBodyLeft from "./CharacterDetailsBodyLeft";
import CharacterDetailsBodyRight from "./CharacterDetailsBodyRight";

export default function CharacterDetailsBody({ character }: { character: Character }) {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <CharacterDetailsBodyLeft character={character} />
        <CharacterDetailsBodyRight character={character} />
      </div>
    </div>
  );
}
