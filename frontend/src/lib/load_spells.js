import { getAll, getBySlug } from "./load_data";

const getSpellBySlug = async (slug) => {
  return await getBySlug("spells", slug);
};

const getSpells = async (query) => {
  const { searchQuery } = query;
  if (searchQuery) {
    query[
      "searchFilter"
    ] = `filter[name_or_incantation_cont_any]=${searchQuery}`;
  }
  return await getAll("spells", query);
};

export { getSpellBySlug, getSpells };
