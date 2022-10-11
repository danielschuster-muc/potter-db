import { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import BookListItem from "./BookListItem";
import SearchField from "../../ui/SearchField";

const BookList = ({ fetchBooks }) => {
  const [searchQuery, setSearchQuery] = useState();

  const { data: rawBooks, isSuccess } = useQuery(
    ["books", searchQuery],
    fetchBooks,
    {
      retry: 10,
    }
  );

  return (
    <>
      <Typography variant="h3">Book Search</Typography>
      <SearchField
        placeholder="e.g. Philosopher's Stone"
        handleChangeSearch={setSearchQuery}
        totalResults={rawBooks?.pages
            ? rawBooks?.meta?.pagination?.records
            : 0}
      />
      {isSuccess && (
        <Grid container spacing={2}>
          {rawBooks?.data?.map((book) => {
            return <BookListItem key={book.id} book={book} />;
          })}
        </Grid>
      )}
    </>
  );
};

export default BookList;
