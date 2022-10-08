import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";

import CharacterListItem from "./CharacterListItem";
import ListStatusButton from "../../ui/ListStatusButton";
import SearchField from "../../ui/SearchField";

const CharacterList = ({ fetchCharacters }) => {
  const [searchQuery, setSearchQuery] = useState();

  const {
    data: rawCharacters,
    isFetchingNextPage,
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
        placeholder="e.g. Harry"
        handleChangeSearch={setSearchQuery}
        totalResults={
          rawCharacters?.pages
            ? rawCharacters?.pages[0]?.meta?.pagination?.records
            : 0
        }
      />
      {isSuccess && (
        <Grid container spacing={2}>
          {rawCharacters?.pages?.map((page) =>
            page?.data?.map((character) => {
              return (
                <CharacterListItem key={character.id} character={character} />
              );
            })
          )}
        </Grid>
      )}
      <ListStatusButton
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        error={error}
        title="characters"
      />
    </>
  );
};

export default CharacterList;
