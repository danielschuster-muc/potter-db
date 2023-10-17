import Character from "@/types/Character";

import ListSkeleton from "../ui/ListSkeleton";
import CharacterListItem from "./CharacterListItem";

export default function CharacterList({
  results,
  error,
  isLoading,
}: {
  results: Character[];
  error: any;
  isLoading: boolean;
}) {
  if (isLoading) return <ListSkeleton />;
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((character) => {
        return <CharacterListItem key={character.id} character={character} />;
      })}
    </div>
  );
}
