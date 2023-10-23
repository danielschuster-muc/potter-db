import React from "react";

import Skeleton from "../ui/Skeleton";

export default function PotionListSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.of(1, 2, 3, 4).map((_, i) => {
        return (
          <div key={i} className="rounded border-2 border-gray-200 p-4 flex flex-col">
            <div className="flex items-center justify-center mb-2">
              <div className="w-72 h-72 flex justify-center">
                <Skeleton className="rounded-lg h-auto w-auto object-contain object-center" />
              </div>
            </div>
            <div className="my-4">
              <Skeleton className="h-8 w-full" />
              <div className="space-y-2 mt-3">
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
