import { getAll, getBySlug } from "./load_data";

const getCharacterBySlug = async (slug) => {
  return await getBySlug("characters", slug);
};

const getCharacters = async (query) => {
  return await getAll("characters", query);
};

export { getCharacterBySlug, getCharacters };
