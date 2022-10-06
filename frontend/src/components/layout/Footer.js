import { AppBar, Box, Container, Grid, Typography } from "@mui/material";
import { getApiUrl, getGithubUrl } from "../../lib/utils";

import Link from "../Link";

const Footer = () => {
  const footerData = [
    {
      title: "General",
      content: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Impressum",
          link: "https://danielschuster.me/legal-notice",
        },
        {
          name: "Sitemap",
          link: "/sitemap.xml",
        },
      ],
    },
    {
      title: "Database Search",
      content: [
        {
          name: "Characters",
          link: "/characters",
        },
        {
          name: "Movies",
          link: "/movies",
        },
        {
          name: "Spells",
          link: "/spells",
        },
      ],
    },
    {
      title: "Information",
      content: [
        {
          name: "API",
          link: getApiUrl(),
        },
        {
          name: "Contribute",
          link: getGithubUrl(),
        },
      ],
    },
  ];

  return (
    <AppBar
      component="footer"
      color="transparent"
      elevation={0}
      position="static"
      sx={{ mt: 5, mb: 2 }}
    >
      <Container disableGutters>
        <Grid container spacing={5}>
          {footerData.map((row) => (
            <Grid item key={row.title} xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">{row.title}</Typography>
              </Box>
              {row.content.map((column) => (
                <Box key={column.name} pt={1}>
                  <Link href={column.link}>{column.name}</Link>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>

        <Box
          style={{ textAlign: "center" }}
          pt={{ xs: 3, sm: 5 }}
          pb={{ xs: 4, sm: 0 }}
        >
          Copyright &copy; Potter DB {new Date().getFullYear()}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
