import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import SearchField from "../../ui/SearchField";
import CharacterListItem from "./CharacterListItem";
import CharacterListStatus from "./CharacterListStatus";

const CharactersList = ({ fetchCharacters }) => {
  const [searchQuery, setSearchQuery] = useState();

  const {
    data: rawCharacters,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["characters", searchQuery], fetchCharacters, {
    retry: 10,
    getNextPageParam: (lastPage, pages) => {
      if (pages?.length < (lastPage?.meta?.pagination?.last || 0)) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  return (
    <>
      <Typography variant="h3">Character Search</Typography>
      <SearchField
        handleChangeSearch={setSearchQuery}
        totalResults={
          rawCharacters?.pages
            ? rawCharacters?.pages[0]?.meta?.pagination?.records
            : 0
        }
      />
      {isSuccess && (
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
          <Grid container spacing={2}>
            {rawCharacters?.pages?.map((page) =>
              page?.data?.map((character) => {
                return (
                  <CharacterListItem key={character.id} character={character} />
                );
              })
            )}
          </Grid>
        </InfiniteScroll>
      )}
      <CharacterListStatus
        isLoading={isLoading}
        error={error}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};

export default CharactersList;
