import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      color="transparent"
      elevation={0}
      position="static"
    >
      <Toolbar sx={{ textAlign: "center" }}>
        <Container disableGutters>
          <Typography>
            Copyright &copy; {new Date().getFullYear()} Potter DB
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
