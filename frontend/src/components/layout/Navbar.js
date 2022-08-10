import Link from "next/link";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar component="nav" position="static">
      <Toolbar>
        <Link href="/">
          <Typography>Potter DB</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
