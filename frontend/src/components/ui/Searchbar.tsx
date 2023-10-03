import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SmallSpinner from "./SmallSpinner";

export default function Searchbar({
  setQuery,
  setSize,
  totalResults,
  isLoading,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  totalResults: number;
  isLoading: boolean;
}) {
  const [queryCopy, setQueryCopy] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const handleSearchChange = (newQuery: string) => {
    setQueryCopy(newQuery);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setSize(1);
      router.push(`${pathname}?${createQueryString("q", queryCopy)}`);
      setQuery(queryCopy);
    }, 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryCopy]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q")?.toString() || "";
    setQuery(q);
    setQueryCopy(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-4">
      <input
        className="border-2 border-gray-200 p-2 rounded-lg mb-1 w-full text-primary"
        type="text"
        value={queryCopy}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Harry"
        name="search"
      />
      <div className="inline-flex">
        <p className="text-gray-500 text-sm">{totalResults} results</p>
        {isLoading && <SmallSpinner />}
      </div>
    </div>
  );
}
