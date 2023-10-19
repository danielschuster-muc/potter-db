import Potion from "@/types/Potion";

import PotionListSkeleton from "./PotionListSkeleton";
import PotionListItem from "./PotionListItem";

export default function CharacterList({
  results,
  error,
  isLoading,
}: {
  results: Potion[];
  error: any;
  isLoading: boolean;
}) {
  if (isLoading) return <PotionListSkeleton />;
  if (error) return <h2>Failed to load data.</h2>;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((potion) => {
        return <PotionListItem key={potion.id} potion={potion} />;
      })}
    </div>
  );
}