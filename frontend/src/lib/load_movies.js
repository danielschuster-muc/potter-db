import { getAll, getBySlug } from "./load_data";

const getMovieBySlug = async (slug) => {
  return await getBySlug("movies", slug);
};

const getMovies = async (query) => {
  const { searchQuery } = query;
  if (searchQuery) {
    query["searchFilter"] = `filter[title_cont_any]=${searchQuery}`;
  }
  return await getAll("movies", query);
};

export { getMovieBySlug, getMovies };
