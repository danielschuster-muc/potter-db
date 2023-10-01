/* eslint-disable @next/next/no-img-element */
import Character from "@/types/Character";
import { Skeleton } from "../ui/Skeleton";
import Link from "next/link";

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
            <div key={i} className="rounded border-2 border-gray-200 p-4">
              <div className="flex items-center justify-center mb-5">
                <Skeleton className="h-72 w-72" />
              </div>
              <Skeleton className="h-8 w-full mb-3" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[70%]" />
                <Skeleton className="h-4 w-[70%]" />
                <Skeleton className="h-4 w-[70%]" />
              </div>
            </div>
          );
        })}
      </div>
    );
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.data?.map((character: Character) => {
        return (
          <div key={character.id} className="rounded border-2 border-gray-200 p-4">
            <div className="flex items-center justify-center mb-5">
              <img
                src={
                  character.attributes.image
                    ? character.attributes.image
                    : "/images/missing_character.svg"
                }
                alt={character.attributes.name}
                className="rounded-lg h-72 w-72"
              />
            </div>
            <h2 className="text-xl font-bold mb-3">{character.attributes.name}</h2>
            <div className="space-y-2">
              <p>
                <span className="font-bold">House:</span> {character.attributes.species}
              </p>
              <p>
                <span className="font-bold">Species:</span> {character.attributes.gender}
              </p>
              <p>
                <span className="font-bold">Species:</span> {character.attributes.born}
              </p>
            </div>
            <Link
              href={`/characters/${character.attributes.slug}`}
              className="block mt-4 text-center text-white bg-secondary rounded-lg py-2 hover:opacity-90">
              View Character
            </Link>
          </div>
        );
      })}
    </div>
  );
}
