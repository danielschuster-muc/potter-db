import { Error, Expand, Loop } from "@mui/icons-material";
import { Button } from "@mui/material";

const ListStatusButton = ({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  error,
  title,
}) => {
  let message = `Show more ${title}`;
  if (isFetchingNextPage) {
    message = "Loading more...";
  } else if (error) {
    message = `Error: ${error.message}`;
  } else if (!hasNextPage) {
    message = `No more ${title} available`;
  }

  let icon = <Expand />;
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

export default ListStatusButton;
