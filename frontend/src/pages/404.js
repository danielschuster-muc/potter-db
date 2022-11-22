import { Button, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <div>
      <Typography variant="h3">Have You Seen this page?</Typography>
      <img
        src="https://user-images.githubusercontent.com/90754725/194039761-45ed2b6c-aa69-4070-b1df-6ca2ef90cb48.png"
        alt=""
        srcset=""
      />
      <Typography variant="body1">
        Approach with extreme caution! To not attempt to use magic against this
        site!
      </Typography>
      <Button href="/">Back to Home</Button>
    </div>
  );
};

export default NotFound;
