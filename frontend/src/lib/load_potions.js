import { getAll, getBySlug } from "./load_data";

const getPotionsBySlug = async (slug) => {
	return await getBySlug("potions", slug);
};

const getPotions = async (query) => {
	const { searchQuery } = query;
	if (searchQuery) {
		query["searchFilter"] = `filter[name_cont_any]=${searchQuery}`;
	}
	return await getAll("potions", query);
};

export { getPotionsBySlug, getPotions };
