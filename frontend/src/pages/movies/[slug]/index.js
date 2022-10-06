import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ReactPlayer from "react-player";
import Link from "../../../components/Link";
import Meta from "../../../components/Meta";
import AccordionList from "../../../components/pages/characters/[slug]/AccordionList";
import TwoColumnTable from "../../../components/ui/TwoColumnTable";
import { getMovieBySlug, getMovies } from "../../../lib/load_movies";

const Movie = ({ data, links }) => {
  const {
    title,
    slug,
    summary,
    release_date,
    running_time,
    budget,
    box_office,
    rating,
    directors,
    screenwriters,
    producers,
    cinematographers,
    editors,
    music_composers,
    trailer,
    poster,
    wiki,
  } = data?.attributes;
  const accordions = [
    {
      name: "Directors",
      value: directors,
    },
    {
      name: "Screenwriters",
      value: screenwriters,
    },
    {
      name: "Producers",
      value: producers,
    },
    {
      name: "Cinematographers",
      value: cinematographers,
    },
    {
      name: "Editors",
      value: editors,
    },
    {
      name: "Music Composers",
      value: music_composers,
    },
  ];

  const informationTable = [
    {
      name: "title",
      value: title,
    },
    {
      name: "release date",
      value: new Date(release_date).toLocaleDateString(),
    },
    {
      name: "running time",
      value: running_time,
    },
    {
      name: "budget",
      value: budget,
    },
    {
      name: "box office",
      value: box_office,
    },
    {
      name: "rating",
      value: rating,
    },
  ];

  return (
    <>
      <Meta title={title} description={summary} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title={title} sx={{ textAlign: "center" }} />
            <CardMedia>
              <Image
                as="image"
                src={poster || "/images/missing_image.jpg"}
                alt={`Poster of ${title}`}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="scale-down"
                loading="eager"
                priority
              />
            </CardMedia>
            <CardContent>
              <TwoColumnTable
                name={title}
                tableData={informationTable}
                id={slug}
              />
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Link href={wiki}>
                <Button size="small">Wiki</Button>
              </Link>
              <Link href={links?.self}>
                <Button size="small">API</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <Box sx={{ m: 2 }}>
              <ReactPlayer url={trailer} controls width="100%" />
              <Box sx={{ my: 1 }}>
                <Typography>{summary}</Typography>
              </Box>
            </Box>
          </Card>
          <AccordionList accordions={accordions} />
        </Grid>
      </Grid>
    </>
  );
};

export async function getStaticPaths() {
  const fetchedMovies = await getMovies({ perPage: 30 });

  const movieSlugs = fetchedMovies?.data?.map((movie) => movie.attributes.slug);

  const paths = movieSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  const movie = await getMovieBySlug(params.slug);
  const { data, links, hasError } = movie;

  if (hasError || !data || !data.attributes || !links) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      links,
    },
  };
}

export default Movie;
