import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import SearchField from "../../ui/SearchField";
import MovieListItem from "./MovieListItem";

const MovieList = ({ fetchMovies }) => {
  const [searchQuery, setSearchQuery] = useState();

  const { data: rawMovies, isSuccess } = useQuery(
    ["movies", searchQuery],
    fetchMovies,
    {
      retry: 10,
    }
  );

  return (
    <>
      <Typography variant="h3">Movie Search</Typography>
      <SearchField
        placeholder="e.g. Philosopher's Stone"
        handleChangeSearch={setSearchQuery}
        totalResults={rawMovies?.meta?.pagination?.records || 0}
      />
      {isSuccess && (
        <Grid container spacing={2}>
          {rawMovies?.data?.map((movie) => {
            return <MovieListItem key={movie.id} movie={movie} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default MovieList;
