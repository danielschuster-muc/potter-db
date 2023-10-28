import { notFound } from "next/navigation";

import SpellDetailsHeader from "@/components/spells/SpellDetailsHeader";
import SpellDetailsBody from "@/components/spells/SpellDetailsBody";
import { simpleFetch } from "@/lib/utils";
import Spell from "@/types/Spell";

export default async function SpellShow({ params }: { params: { slug: string } }) {
  const rawSpell = await simpleFetch(`https://api.potterdb.com/v1/spells/${params.slug}`);

  if (!rawSpell || !rawSpell?.data) {
    return notFound();
  }

  const result = rawSpell?.data as Spell;

  return (
    <>
      <SpellDetailsHeader spell={result} />
      <SpellDetailsBody spell={result} />
    </>
  );
}
