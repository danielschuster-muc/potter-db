import React from "react";

import Potion from "@/types/Potion";
import Accordion from "../ui/Accordion";

export default function PotionDetailsAccordion({ potion }: { potion: Potion }) {
  const { ingredients, inventors, manufacturers, characteristics, side_effects, time } =
    potion.attributes;

  if (!ingredients && !inventors && !manufacturers && !characteristics && !side_effects && !time) {
    return null;
  }

  return (
    <div className="justify-center flex mt-5">
      <div className="w-full md:w-2/3">
        {ingredients && ingredients.length > 0 && (
          <Accordion
            title="Ingredients"
            content={
              <ul className="list-disc pl-5">
                {ingredients.split(",").map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            }
          />
        )}
        {inventors && inventors.length > 0 && (
          <Accordion
            title="Inventors"
            content={
              <ul className="list-disc pl-5">
                {inventors.split(",").map((inventor) => (
                  <li key={inventor}>{inventor}</li>
                ))}
              </ul>
            }
          />
        )}
        {manufacturers && manufacturers.length > 0 && (
          <Accordion
            title="Manufacturers"
            content={
              <ul className="list-disc pl-5">
                {manufacturers.split(",").map((manufacturer) => (
                  <li key={manufacturer}>{manufacturer}</li>
                ))}
              </ul>
            }
          />
        )}
        {characteristics && characteristics.length > 0 && (
          <Accordion
            title="Characteristics"
            content={
              <ul className="list-disc pl-5">
                {characteristics.split(",").map((characteristic) => (
                  <li key={characteristic}>{characteristic}</li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </div>
  );
}
