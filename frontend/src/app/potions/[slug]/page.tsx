import { notFound } from "next/navigation";

import PotionDetailsBody from "@/components/potions/PotionDetailsBody";
import PotionAccordionList from "@/components/potions/PotionAccordionList";
import { simpleFetch } from "@/lib/utils";
import Potion from "@/types/Potion";

export default async function PotionShow({ params }: { params: { slug: string } }) {
  const rawPotion = await simpleFetch(`https://api.potterdb.com/v1/potions/${params.slug}`);

  if (!rawPotion || !rawPotion?.data) {
    return notFound();
  }

  const result = rawPotion?.data as Potion;
  const name = result.attributes.name;

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">{name}</h1>
      <PotionDetailsBody potion={result} />
      <PotionAccordionList potion={result} />
    </>
  );
}
