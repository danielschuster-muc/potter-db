import React from "react";

import Spell from "@/types/Spell";
import TableRow from "../ui/TableRow";

export default function SpellDetailsBodyRight({ spell }: { spell: Spell }) {
  const { category, creator, effect, hand, light, name } = spell.attributes;

  return (
    <div className="p-3">
      <table className="table-auto">
        <tbody className="text-white text-left">
          {name && <TableRow label="Name" value={name} />}
          {effect && <TableRow label="Effect" value={effect} />}
          {category && <TableRow label="Category" value={category} />}
          {light && <TableRow label="Light" value={light} />}
          {hand && <TableRow label="Hand" value={hand} />}
          {creator && <TableRow label="Creator" value={creator} />}
        </tbody>
      </table>
    </div>
  );
}
