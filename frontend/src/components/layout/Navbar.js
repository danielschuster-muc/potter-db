import { AppBar, Toolbar, Typography } from "@mui/material";
import { Bolt } from "@mui/icons-material";
import { Box } from "@mui/system";

import Image from 'next/image';
import Link from "../Link";

const Navbar = () => {
  return (
    <AppBar component="nav" color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box display="flex">
            <Image src='/images/logo.svg' width={45} height={45} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mt: 1,
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
