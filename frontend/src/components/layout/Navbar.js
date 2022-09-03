import Link from "next/link";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          href="/"
          sx={{
            mr: 2,
            letterSpacing: ".2rem",
            color: "inherit",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          <Link href="/">Potter DB</Link>
        </Typography>

        <Typography variant="h6" component="div">
          <Link href="/characters">Characters</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
