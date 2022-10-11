import Image from "next/image";
import { AppBar, Toolbar } from "@mui/material";

import Link from "../Link";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src="/images/logo.svg" width={84} height={50} alt="logo" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
