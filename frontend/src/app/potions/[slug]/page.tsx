import { notFound } from "next/navigation";

import PotionDetailsHeader from "@/components/potions/PotionDetailsHeader";
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

  return (
    <>
      <PotionDetailsHeader potion={result} />
      <PotionDetailsBody potion={result} />
      <PotionAccordionList potion={result} />
    </>
  );
}
