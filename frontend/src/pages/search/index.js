import Image from "next/image";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "../../components/Link";

const DatabaseSearch = () => {
  const searchables = [
    {
      title: "Characters",
      link: "/search/characters",
    },
    {
      title: "Movies",
      link: "/search/movies",
    },
    {
      title: "Potions",
      link: "/search/potions",
    },
    {
      title: "Spells",
      link: "/search/spells",
    },
  ];

  return (
    <>
      <Typography variant="h3">Database Search</Typography>
      <Grid container spacing={3}>
        {searchables.map((searchable, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia>
                  <Image
                    as="image"
                    src={"/images/missing_image.jpg"}
                    alt={`Picture of ${searchable.title}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="scale-down"
                    quality={30}
                    loading="eager"
                    priority
                  />
                </CardMedia>
                <CardHeader title={searchable.title} />
                <CardActions>
                  <Link href={searchable.link}>
                    <Typography sx={{ ml: 1 }}>
                      Search {searchable.title}
                    </Typography>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default DatabaseSearch;
