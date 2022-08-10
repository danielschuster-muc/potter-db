import { useEffect, useState } from "react";

import { Container } from "@mui/system";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, useTheme } from "@emotion/react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { CustomBreadCrumb } from "../breadcrumb/CustomBreadCrumb";

const Layout = ({ children }) => {
  const theme = useTheme();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <CustomBreadCrumb />
        <Container component="main" maxWidth="xl" sx={{ flex: 1, my: 5 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
