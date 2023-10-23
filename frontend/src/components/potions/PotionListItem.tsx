import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaStar, FaEdit, FaPlus } from "react-icons/fa";

import Potion from "@/types/Potion";
import TextIconBox from "../ui/TextIconBox";

export default function PotionListItem({ potion }: { potion: Potion }) {
  const { name, image, difficulty, characteristics, effect, slug } = potion.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-center mb-2">
        <div className="w-72 h-72 flex justify-center">
          <Image
            src={image || "/images/missing_potion.svg"}
            alt={name}
            className="rounded-lg h-auto w-auto object-contain object-center"
            width={200}
            height={200}
            priority={!image}
          />
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="space-y-1 mt-3">
          {difficulty && <TextIconBox icon={FaStar} text={difficulty} />}
          {effect && <TextIconBox icon={FaEdit} text={effect} />}
          {characteristics && <TextIconBox icon={FaPlus} text={characteristics} />}
        </div>
      </div>
      <Link
        href={`/potions/${slug}`}
        className="mt-auto text-center bg-secondary rounded-lg py-2 text-white opacity-90 hover:opacity-100">
        View Potion
      </Link>
    </div>
  );
}
