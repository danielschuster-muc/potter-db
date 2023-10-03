import React from "react";

import { Skeleton } from "../ui/Skeleton";

export default function CharacterListSkeleton() {
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
}
