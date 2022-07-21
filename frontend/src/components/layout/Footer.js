import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" component="footer" color="default">
      <Toolbar sx={{ textAlign: "center" }}>
        <Container maxWidth="xl">
          <Typography>
            Copyright &copy; {new Date().getFullYear()} Potter DB
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
