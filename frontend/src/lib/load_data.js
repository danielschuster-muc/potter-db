import { getApiUrl } from "./utils";

const apiUrl = getApiUrl();

const simpleFetch = async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch(() => {
      return {
        hasError: true,
      };
    });
};

export const getBySlug = async (type, slug) => {
  return simpleFetch(`${apiUrl}/v1/${type}/${slug}`);
};

export const getAll = async (type, query) => {
  const { page, perPage, searchFilter } = query;
  const pageNumber = `page[number]=${page || 1}`;
  const pageSize = `&page[size]=${perPage || 20}`;
  const filter = searchFilter ? `&${searchFilter}` : "";
  const url = `${apiUrl}/v1/${type}?${pageNumber}${pageSize}${filter}`;
  return simpleFetch(url);
};
