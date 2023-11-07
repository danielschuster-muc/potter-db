import React from "react";

import Skeleton from "../ui/Skeleton";
import LinksSkeleton from "../ui/LinksSkeleton";

export default function CharacterDetailsSkeleton() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-2">
        <Skeleton className="text-center md:h-12 md:w-2/5 w-full h-24" />
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 md:w-2/3 mt-5 p-5 border-2 border-gray-200 rounded-lg">
          <div className="p-3 flex flex-col items-center justify-center">
            <Skeleton className="rounded-lg h-[250px] w-[250px] md:h-[400px] md:w-[400px]" />
            <LinksSkeleton />
          </div>
          <div className="p-3 flex flex-col gap-6">
            <div className="flex gap-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-6 w-2/3" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-6 w-3/4" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-6 w-3/5" />
            </div>
            <div className="flex gap-1">
              <Skeleton className="h-6 w-1/12" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
