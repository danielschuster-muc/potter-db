const apiUrl = process.env.API_URL || "https://api.potterdb.com";

const getCharacterBySlug = async (slug) => {
  const res = await fetch(`${apiUrl}/v1/characters/${slug}`);
  return await res.json();
};

const getCharacters = async (page = 1) => {
  let result = { data: null, meta: null, errors: null };
  try {
    const res = await fetch(
      `${apiUrl}/v1/characters?page[number]=${page}&page[size]=30`
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
