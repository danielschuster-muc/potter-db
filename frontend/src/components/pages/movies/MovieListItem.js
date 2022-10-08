import Image from "next/image";

import { faCalendar, faClock, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

import Link from "../../Link";
import ListItemBox from "../../ui/ListItemBox";

const MovieListItem = ({ movie }) => {
  const { title, slug, release_date, rating, running_time, poster } = movie.attributes;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // TODO: change color based on whether fantastic beasts or harry potter
          // border: `3px solid ${getColor}`,
          justifyContent: "space-between",
        }}
      >
        <CardMedia>
          <Image
            as="image"
            src={poster || "/images/movie.svg"}
            alt={`Poster of ${title}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="scale-down"
            quality={30}
            loading="eager"
            priority
          />
        </CardMedia>
        <CardHeader title={title} />
        <CardContent>
          <ListItemBox value={release_date} icon={faCalendar} />
          <ListItemBox value={rating} icon={faStarHalfStroke} />
          <ListItemBox value={running_time} icon={faClock} />
        </CardContent>
        <CardActions>
          <Link href={`/movies/${slug}`}>
            <Typography sx={{ ml: 1 }}>Detailed Movie Information</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieListItem;
