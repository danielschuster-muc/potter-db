import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SmallSpinner from "./SmallSpinner";
import { FaSearch, FaTimes } from "react-icons/fa";

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

  const handleSearchReset = () => {
    setQueryCopy("");
    router.push(pathname);
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
      setQuery(queryCopy);
      setSize(1);
      router.push(`${pathname}${queryCopy !== "" ? "?" + createQueryString("q", queryCopy) : ""}`);
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
      <div className="flex items-center">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ">
            <FaSearch className="text-primary" />
          </div>
          <input
            className="p-2 pl-10 rounded-lg w-full text-primary"
            type="text"
            value={queryCopy}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search..."
            name="search"
          />
          {queryCopy && (
            <button
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
              aria-label="Clear search"
              onClick={handleSearchReset}>
              <FaTimes className="text-primary opacity-90 hover:opacity-100" />
            </button>
          )}
        </div>
      </div>
      <div className="inline-flex">
        <p className="text-gray-300 text-sm">{totalResults} results</p>
        {isLoading && <SmallSpinner />}
      </div>
    </div>
  );
}
