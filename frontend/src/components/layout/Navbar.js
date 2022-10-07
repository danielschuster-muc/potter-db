import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Bolt } from "@mui/icons-material";

import Link from "../Link";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Link href="/">
          <Box display="flex">
            <Bolt fontSize="large" />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              Potter DB
            </Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
