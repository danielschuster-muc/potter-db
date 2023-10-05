import React from "react";
import Skeleton from "./Skeleton";

export default function LinksSkeleton() {
  return (
    <div className="flex justify-center mt-2 space-x-8">
      <Skeleton className="my-2 h-6 w-12" />
      <Skeleton className="my-2 h-6 w-12" />
    </div>
  );
}
