import React from "react";

import Spell from "@/types/Spell";
import SpellDetailsBodyLeft from "./SpellDetailsBodyLeft";
import SpellDetailsBodyRight from "./SpellDetailsBodyRight";

export default function SpellDetailsBody({ spell }: { spell: Spell }) {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <SpellDetailsBodyLeft spell={spell} />
        <SpellDetailsBodyRight spell={spell} />
      </div>
    </div>
  );
}
