import { useEffect, useState } from "react";

import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import DatabaseAlert from "../ui/DatabaseAlert";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../ui/ScrollToTop";
import Theme from "../Theme";

const Layout = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ScrollToTop />
        <DatabaseAlert />
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
