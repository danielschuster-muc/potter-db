import { getAll, getBySlug } from "./load_data";

const getBookBySlug = async (slug) => {
  return await getBySlug("books", slug);
};

const getBooks = async (query) => {
  const { searchQuery } = query;
  if (searchQuery) {
    query["searchFilter"] = `filter[title_cont_any]=${searchQuery}`;
  }
  return await getAll("books", query);
};

const getChapters = async (query) => {
  return await getAll(`books/${query.searchQuery}/chapters`, query);
};

export { getBookBySlug, getBooks, getChapters };
