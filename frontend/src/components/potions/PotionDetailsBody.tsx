import React from "react";

import Potion from "@/types/Potion";
import PotionDetailsBodyLeft from "./PotionDetailsBodyLeft";
import PotionDetailsBodyRight from "./PotionDetailsBodyRight";

export default function PotionDetailsBody({ potion }: { potion: Potion }) {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <PotionDetailsBodyLeft potion={potion} />
        <PotionDetailsBodyRight potion={potion} />
      </div>
    </div>
  );
}
