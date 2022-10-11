import { getApiUrl } from "../utils";

const graphqlFetcher = async (query) => {
  const url = getApiUrl() + "/graphql";
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());
};

export default graphqlFetcher;
