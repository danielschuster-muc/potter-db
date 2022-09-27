import { Error, Expand, Loop } from "@mui/icons-material";
import { Button } from "@mui/material";

const CharacterListStatus = ({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  error,
}) => {
  const message = "Show more characters";
  if (isFetchingNextPage) {
    message = "Loading more...";
  } else if (error) {
    message = `Error: ${error.message}`;
  } else if (!hasNextPage) {
    message = "No more characters available";
  }

  const icon = <Expand />;
  if (isFetchingNextPage) {
    icon = <Loop />;
  } else if (error || !hasNextPage) {
    icon = <Error />;
  }

  return (
    <>
      <Button
        size="small"
        onClick={fetchNextPage}
        variant="outlined"
        startIcon={icon}
        sx={{ my: 1 }}
        disabled={isFetchingNextPage || !hasNextPage || error}
      >
        {message}
      </Button>
    </>
  );
};

export default CharacterListStatus;
