const apiUrl = process.env.API_URL || "https://api.potterdb.com";

const getCharacterBySlug = async (slug) => {
  const res = await fetch(`${apiUrl}/v1/characters/${slug}`);
  return await res.json();
};

const getCharacters = async (query = { page: 1, search: null }) => {
  let result = { data: null, meta: null, errors: null };

  const { page, search } = query;

  const searchFilter = `&filter[name_cont_any]=${search}`;

  try {
    const res = await fetch(
      `${apiUrl}/v1/characters?page[number]=${page}${searchFilter}`
    );
    result = await res.json();
  } catch (error) {
    result = {
      errors: {
        error,
      },
    };
  }
  return result;
};

export { getCharacterBySlug, getCharacters };
