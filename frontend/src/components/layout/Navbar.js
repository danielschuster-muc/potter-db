import { AppBar, Toolbar, Typography } from "@mui/material";
import { Bolt } from "@mui/icons-material";
import Link from "../../lib/Link";
import { Box } from "@mui/system";

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

        {/* <Typography variant="h6" component="div">
            <Link href="/characters">Characters</Link>
          </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
