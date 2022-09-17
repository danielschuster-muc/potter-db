import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

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
        // {
        //   name: "About",
        //   link: "/",
        // },
        // {
        //   name: "Imprint",
        //   link: "/",
        // },
      ],
    },
    {
      title: "Database Search",
      content: [
        // {
        //   name: "Books",
        //   link: "/",
        // },
        {
          name: "Characters",
          link: "/characters",
        },
        // {
        //   name: "Movies",
        //   link: "/",
        // },
        // {
        //   name: "Potions",
        //   link: "/",
        // },
        // {
        //   name: "Spells",
        //   link: "/",
        // },
      ],
    },
    {
      title: "Information",
      content: [
        {
          name: "API",
          link: "/",
        },
        // {
        //   name: "Docs",
        //   link: "/",
        // },
        // {
        //   name: "Contribute",
        //   link: "/",
        // },
      ],
    },
  ];

  return (
    <AppBar
      component="footer"
      color="transparent"
      elevation={0}
      position="static"
      sx={{ mt: 5 }}
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
          Copyright &copy; Potter DB {new Date().getFullYear()}. All rights
          reserved.
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
