const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.potterdb.com";

const simpleFetch = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((_error) => {
      return {
        hasError: true,
      };
    });
};

export const getBySlug = async (type, slug) => {
  return simpleFetch(`${apiUrl}/v1/${type}/${slug}`);
};

export const getAll = async (type, query) => {
  const { page, perPage, search, orderBy, direction } = query;
  const pageNumber = `page[number]=${page || 1}`;
  const pageSize = `&page[size]=${perPage || 20}`;
  const searchFilter = search ? `&filter[name_cont_any]=${search}` : "";

  return simpleFetch(
    `${apiUrl}/v1/${type}?${pageNumber}${pageSize}${searchFilter}`
  );
};
