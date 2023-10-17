import Spell from "@/types/Spell";

import ListSkeleton from "../ui/ListSkeleton";
import SpellListItem from "./SpellListItem";

export default function SpellList({
  results,
  error,
  isLoading,
}: {
  results: Spell[];
  error: any;
  isLoading: boolean;
}) {
  if (isLoading) return <ListSkeleton />;
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((spell) => {
        return <SpellListItem key={spell.id} spell={spell} />;
      })}
    </div>
  );
}
