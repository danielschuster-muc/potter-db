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

const defaultQuery = {
  page: 1,
  perPage: 25,
  search: "",
  orderBy: "",
  direction: "asc",
};

export const getAll = async (type, query = defaultQuery) => {
  const { page, perPage, search, orderBy, direction } = query;
  const pageNumber = `page[number]=${page}`;
  const pageSize = `page[size]=${perPage}`;
  const searchFilter = `filter[name_cont_any]=${search}`;
  const sort = `sort=${direction === "desc" ? "-" : ""}${orderBy}`;

  return fetch(
    `${apiUrl}/v1/${type}?${pageNumber}&${pageSize}&${searchFilter}&${sort}`
  )
    .then((res) => res.json())
    .catch((error) => {
      return {
        errors: {
          error,
        },
      };
    });
};
