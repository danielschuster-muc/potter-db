import { getApiUrl } from "../../utils";

export const fetchCharacter = async (slug) => {
  const url = getApiUrl() + "/v1/characters/" + slug;
  return fetch(url).then((res) => res.json());
};

export const fetchCharacters = async () => {
  const url = getApiUrl() + "v1/characters/";
  return fetch(url).then((res) => res.json());
};
