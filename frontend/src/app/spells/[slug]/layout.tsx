import React from "react";

import { simpleFetch } from "@/lib/utils";
import Spell from "@/types/Spell";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const rawSpell = await simpleFetch(`https://api.potterdb.com/v1/spells/${params.slug}`);

  if (!rawSpell || !rawSpell.data) {
    return {
      title: "Not Found | Potter DB",
      description: "Spell not found.",
    };
  }

  const spell = rawSpell?.data as Spell;
  const { name, category, effect } = spell.attributes;

  return {
    title: `${name} | Potter DB`,
    description: `${effect ? "Effect: " + effect + " | " : ""}${
      category ? "Category: " + category + " | " : ""
    }`,
  };
}

export async function generateStaticParams() {
  const fetchedSpells = await simpleFetch("https://api.potterdb.com/v1/spells");

  const spellSlugs = await fetchedSpells?.data?.map((spell: Spell) => spell.attributes.slug);

  const additionalSlugs = [
    "disarming-charm",
    "imperius-curse",
    "killing-curse",
    "levitation-charm",
    "memory-charm",
    "patronus-charm",
    "stunning-spell",
    "summoning-charm",
    "unlocking-charm",
    "wand-lighting-charm",
  ];

  const slugs = [...spellSlugs, ...additionalSlugs].sort();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
