import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `https://api.potterdb.com/v1/characters?page[number]=${pageIndex}&page[size]=10`; // SWR key
};

const BASE_URL = "https://api.potterdb.com/v1";

const PER_PAGE = 24;

export default function usePaginatedRequest(resource: string) {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const result = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PER_PAGE);

  return { result, error, isLoadingMore, size, setSize, isReachingEnd };
}
