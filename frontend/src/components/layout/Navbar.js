import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Image from 'next/image'
import Link from "../Link";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box display="flex" sx={{mt:2}}>
          <Image src='/images/logo.svg' width={25} height={25} alt="logo"/>
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
