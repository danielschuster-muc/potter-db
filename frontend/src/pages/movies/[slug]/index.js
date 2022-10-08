import Meta from "../../../components/Meta";
import MovieDetails from "../../../components/pages/movies/[slug]/MovieDetails";
import { getMovieBySlug, getMovies } from "../../../lib/load_movies";

const Movie = ({ data, links }) => {
  const { attributes } = data;
  return (
    <>
      <Meta title={attributes.title} description={attributes.summary} />
      <MovieDetails attributes={attributes} apiLink={links?.self} />
    </>
  );
};

export async function getStaticPaths() {
  const fetchedMovies = await getMovies({ perPage: 30 });

  const movieSlugs = fetchedMovies?.data?.map(
    (movie) => movie?.attributes?.slug
  );

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
