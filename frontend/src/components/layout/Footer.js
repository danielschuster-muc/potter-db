import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <AppBar position="static" component="footer" color="default">
      <Toolbar sx={{ textAlign: "center" }}>
        <Container maxWidth="xl">
          <Typography>
            Copyright &copy;{" "}
            <Link color="inherit" href="/">
              Potter DB
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
