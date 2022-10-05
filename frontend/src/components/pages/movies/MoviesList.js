import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

import SearchField from "../../ui/SearchField";
import ListStatusButton from "../../ui/ListStatusButton";
import MovieListItem from "./MovieListItem";

const MoviesList = ({ fetchMovies }) => {
  const [searchQuery, setSearchQuery] = useState();

  const {
    data: rawMovies,
    isFetchingNextPage,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["movies", searchQuery], fetchMovies, {
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
      <Typography variant="h3">Movie Search</Typography>
      <SearchField
        placeholder="e.g. Philosopher's Stone"
        handleChangeSearch={setSearchQuery}
        totalResults={
          rawMovies?.pages ? rawMovies?.pages[0]?.meta?.pagination?.records : 0
        }
      />
      {isSuccess && (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => {}}>
          <Grid container spacing={2}>
            {rawMovies?.pages?.map((page) =>
              page?.data?.map((movie) => {
                return <MovieListItem key={movie.id} movie={movie} />;
              })
            )}
          </Grid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default MoviesList;
