const apiUrl = process.env.API_URL || "https://api.potterdb.com";

export const getBySlug = async (type, slug) => {
  return fetch(`${apiUrl}/v1/${type}/${slug}`)
    .then((res) => res.json())
    .catch((error) => {
      return {
        errors: {
          error,
        },
      };
    });
};

const defaultQuery = { page: 1, search: "", sort: "", direction: "asc" };
export const getAll = async (type, query = defaultQuery) => {
  const { page, search, sort, direction } = query;

  const pagination = `page[number]=${page}`;
  const searchFilter = `filter[name_cont_any]=${search}`;
  const sorting = `sort=${direction === "desc" ? "-" : ""}${sort}`;

  return fetch(`${apiUrl}/v1/${type}?${pagination}&${searchFilter}&${sorting}`)
    .then((res) => res.json())
    .catch((error) => {
      return {
        errors: {
          error,
        },
      };
    });
};
