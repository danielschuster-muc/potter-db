import { CircularProgress, Typography } from "@mui/material";

const CharacterListStatus = ({ isLoading, error, isFetchingNextPage }) => {
  return (
    <>
      {isLoading && <CircularProgress />}
      {error && <Typography>Error: {error.message}</Typography>}
      {isFetchingNextPage && <Typography>Loading more...</Typography>}
    </>
  );
};

export default CharacterListStatus;
