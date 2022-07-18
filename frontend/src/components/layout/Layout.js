import { Container } from "@mui/system";
import Footer from "./Footer";
import Navbar from "./Navbar";
const { CssBaseline, Box } = require("@mui/material");

const { ThemeProvider, useTheme } = require("@emotion/react");

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container component="main" maxWidth="xl" sx={{ flex: 1, my: 5 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
