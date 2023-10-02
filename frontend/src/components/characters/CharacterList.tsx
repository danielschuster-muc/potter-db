/* eslint-disable @next/next/no-img-element */
import Character from "@/types/Character";
import { Skeleton } from "../ui/Skeleton";
import Link from "next/link";

import { FaCross, FaPaw, FaStar, FaVenusMars } from "react-icons/fa";

export default function CharacterList({
  data,
  error,
  isLoading,
}: {
  data: any;
  error: any;
  isLoading: boolean;
}) {
  if (isLoading)
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.of(1, 2, 3).map((_, i) => {
          return (
            <div key={i} className="rounded border-2 border-gray-200 p-4 flex flex-col">
              <div className="flex items-center justify-center mb-2">
                <Skeleton className="rounded-lg h-72 w-72" />
              </div>
              <div className="my-4">
                <Skeleton className="h-8 w-full" />
                <div className="space-y-2 mt-3">
                  <Skeleton className="h-4 w-[70%]" />
                  <Skeleton className="h-4 w-[70%]" />
                  <Skeleton className="h-4 w-[70%]" />
                </div>
              </div>
              <Skeleton className="mt-auto h-10 rounded-lg py-1" />
            </div>
          );
        })}
      </div>
    );
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.data?.map((character: Character) => {
        const { name, image, species, gender, born, died, slug } = character.attributes;
        return (
          <div key={character.id} className="rounded border-2 border-gray-200 p-4 flex flex-col">
            <div className="flex items-center justify-center">
              <img
                src={image ? image : "/images/missing_character.svg"}
                alt={name}
                className="rounded-lg h-72 w-72"
              />
            </div>
            <div className="my-4">
              <h2 className="text-xl font-bold">{name}</h2>
              <div className="space-y-1 mt-3">
                {species && (
                  <div className="flex items-center space-x-1">
                    <FaPaw />
                    <p>{species}</p>
                  </div>
                )}
                {gender && (
                  <div className="flex items-center space-x-1">
                    <FaVenusMars />
                    <p>{gender}</p>
                  </div>
                )}
                {born && (
                  <div className="flex items-center space-x-1">
                    <FaStar />
                    <p>{born}</p>
                  </div>
                )}
                {died && (
                  <div className="flex items-center space-x-1">
                    <FaCross />
                    <p>{died}</p>
                  </div>
                )}
              </div>
            </div>
            <Link
              href={`/characters/${slug}`}
              className="block mt-auto text-center text-white bg-secondary rounded-lg py-2 hover:opacity-90">
              View Character
            </Link>
          </div>
        );
      })}
    </div>
  );
}
