import ReactPlayer from "react-player/lazy";
import { getMovieBySlug, getMovies } from "../../../lib/load_movies";

const Movie = ({ data, links }) => {
  const { title, slug, trailer } = data.attributes;
  return (
    <>
      {title}
      <ReactPlayer url={trailer} controls />
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
