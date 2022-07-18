import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

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
