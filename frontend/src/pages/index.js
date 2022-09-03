import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Meta from "../components/Meta";

const HomePage = () => {
  return (
    <>
      <Meta title="Landing Page" />
      <Card sx={{ position: "relative", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="Potter DB Banner"
          src="/images/hogwarts.jpg"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            background:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
            color: "white",
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent
            sx={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
            }}
          >
            <Typography variant="h4">Welcome to the Harry Potter DB</Typography>
            <Typography>
              A Database with Information about Characters, Movies, Books,
              Spells, Potions and much more.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default HomePage;
