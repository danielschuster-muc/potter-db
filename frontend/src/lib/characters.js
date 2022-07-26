const apiUrl = process.env.API_URL || "https://api.potterdb.com";

const getCharacterBySlug = async (slug) => {
  const res = await fetch(`${apiUrl}/v1/characters/${slug}`);
  return await res.json();
};

const getCharacters = async (query = { page: 1, search: "", sort: "" }) => {
  const { page, search, sort } = query;

  const pagination = `page[number]=${page}`;
  const searchFilter = `filter[name_cont_any]=${search}`;
  const sorting = `sort=${sort}`;

  try {
    const res = await fetch(
      `${apiUrl}/v1/characters?${pagination}&${searchFilter}&${sorting}`
    );
    return await res.json();
  } catch (error) {
    return {
      errors: {
        error,
      },
    };
  }
};

export { getCharacterBySlug, getCharacters };
