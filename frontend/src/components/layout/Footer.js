import { AppBar, Box, Container, Grid } from "@mui/material";

import Link from "../Link";
import { getApiUrl, getGithubUrl } from "../../lib/utils";

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
          name: "Imprint",
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
          name: "Books",
          link: "/books",
        },
        {
          name: "Characters",
          link: "/characters",
        },
        {
          name: "Movies",
          link: "/movies",
        },
        {
          name: "Potions",
          link: "/potions",
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
        {
          name: "Docs",
          link: "https://docs.potterdb.com",
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
              <Box borderBottom={1}>{row.title}</Box>
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
