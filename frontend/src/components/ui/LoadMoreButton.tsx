import React from "react";

export default function LoadMoreButton({
  results,
  totalResults,
  isLoading,
  setSize,
  size,
  type,
}: {
  results: any[];
  totalResults: number;
  isLoading: boolean;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  type: string;
}) {
  return (
    <button
      className="bg-secondary text-white opacity-90 hover:opacity-100 rounded-lg py-2 px-6 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={() => setSize(size + 1)}
      disabled={isLoading || results.length >= totalResults}>
      {results.length >= totalResults ? `No more ${type}` : "Load more"}
    </button>
  );
}
