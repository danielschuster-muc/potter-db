const apiUrl = process.env.API_URL || "https://api.potterdb.com";

const getCharacterBySlug = async (slug) => {
  try {
    const res = await fetch(`${apiUrl}/v1/characters/${slug}`);
    return await res.json();
  } catch (error) {
    return {
      errors: {
        error,
      },
    };
  }
};

const getCharacters = async (query = { page: 1, search: null }) => {
  const { page, search } = query;

  const searchFilter = `&filter[name_cont_any]=${search}`;
  const pagination = `page[number]=${page}`;

  try {
    const res = await fetch(
      `${apiUrl}/v1/characters?${pagination}${searchFilter}`
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
