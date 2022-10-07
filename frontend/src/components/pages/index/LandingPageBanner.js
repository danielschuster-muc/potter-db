import Image from "next/image";

import { Box, Card, CardContent, Typography } from "@mui/material";

const LandingPageBanner = () => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "10px",
        height: "70vh",
      }}
    >
      <Image
        alt="Potter DB Banner"
        src="/images/hogwarts_express.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="top left"
        quality="50"
        priority
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <Typography variant="h3">Harry Potter DB</Typography>
            <Typography>
              An API with Data from the Harry Potter Universe.
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default LandingPageBanner;
