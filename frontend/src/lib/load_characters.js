import { getAll, getBySlug } from "./load_data";

const getCharacterBySlug = async (slug) => {
  return await getBySlug("characters", slug);
};

const getCharacters = async (query) => {
  const { searchQuery } = query;
  if (searchQuery) {
    query["searchFilter"] = `filter[name_cont_any]=${searchQuery}`;
  }
  return await getAll("characters", query);
};

export { getCharacterBySlug, getCharacters };
