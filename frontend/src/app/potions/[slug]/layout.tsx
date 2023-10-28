import React from "react";

import { simpleFetch } from "@/lib/utils";
import Potion from "@/types/Potion";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const rawPotion = await simpleFetch(`https://api.potterdb.com/v1/potions/${params.slug}`);

  if (!rawPotion || !rawPotion.data) {
    return {
      title: "Not Found | Potter DB",
      description: "Potion not found.",
    };
  }

  const potion = rawPotion?.data as Potion;
  const { name, difficulty, effect, inventors, side_effects } = potion.attributes;

  return {
    title: `${name} | Potter DB`,
    description: `${difficulty ? "Difficulty: " + difficulty + " | " : ""}${
      effect ? "Effect: " + effect + " | " : ""
    }${inventors ? "Inventors: " + inventors + " | " : ""}
    ${side_effects ? "Side Effects: " + side_effects + " | " : ""}
    `,
  };
}

export async function generateStaticParams() {
  const fetchedPotions = await simpleFetch("https://api.potterdb.com/v1/potions");

  const potionSlugs = await fetchedPotions?.data?.map((potion: Potion) => potion.attributes.slug);

  const additionalSlugs = [
    "draught-of-peace",
    "amortentia",
    "beautification-potion",
    "wolfsbane-potion",
    "skele-gro",
    "invisibility-potion",
    "veritaserum",
    "polyjuice-potion",
    "felix-felicis",
    "elixir-of-life",
  ];

  const slugs = [...potionSlugs, ...additionalSlugs].sort();

  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
