import usePaginatedRequest from "@/hooks/useRequest";
import React from "react";

export default function SpellIndex() {
  const { result, error, isLoadingMore, size, setSize, isReachingEnd } =
    usePaginatedRequest("/spells");

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading...</h1>;

  console.log(result);

  return (
    <div className="container">
      <h1>My Posts with useSWRInfinite</h1>
      {result.data?.map((spell) => <div key={spell.id}>{spell.attributes.name}</div>)}
      <button disabled={isLoadingMore || isReachingEnd} onClick={() => setSize(size + 1)}>
        {isLoadingMore ? "Loading..." : isReachingEnd ? "No more posts" : "Load more"}
      </button>
    </div>
  );
}
