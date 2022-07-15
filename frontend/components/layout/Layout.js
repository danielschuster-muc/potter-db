import { Container } from "@mui/system";
const { CssBaseline } = require("@mui/material");

const { ThemeProvider, useTheme } = require("@emotion/react");

const Layout = (props) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xl" sx={{ flex: 1, my: 5 }}>
        {props.children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
