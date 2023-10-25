import Spell from "@/types/Spell";

import SpellListSkeleton from "./SpellListSkeleton";
import SpellListItem from "./SpellListItem";

export default function PotionList({
  results,
  error,
  isLoading,
}: {
  results: Spell[];
  error: any;
  isLoading: boolean;
}) {
  if (isLoading) return <SpellListSkeleton />;
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((spell) => {
        return <SpellListItem key={spell.id} spell={spell} />;
      })}
    </div>
  );
}
