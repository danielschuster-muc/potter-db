import React from "react";

import Potion from "@/types/Potion";
import TableRow from "../ui/TableRow";

export default function PotionDetailsBodyRight({ potion }: { potion: Potion }) {
  const { name, difficulty, effect } = potion.attributes;

  return (
    <div className="py-2">
      <table className="table-auto">
        <tbody className="text-white text-left">
          {name && <TableRow label="Name" value={name} />}
          {difficulty && <TableRow label="Difficulty" value={difficulty} />}
          {effect && <TableRow label="Effect" value={effect} />}
        </tbody>
      </table>
    </div>
  );
}
