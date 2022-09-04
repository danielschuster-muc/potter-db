import Link from "next/link";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { Bolt } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Bolt sx={{ display: "flex" }} color="primary" fontSize="large" />
        <Typography
          variant="h5"
          noWrap
          href="/"
          sx={{
            mr: 2,
            letterSpacing: ".2rem",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          <Link href="/">Potter DB</Link>
        </Typography>

        {/* <Typography variant="h6" component="div">
            <Link href="/characters">Characters</Link>
          </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
