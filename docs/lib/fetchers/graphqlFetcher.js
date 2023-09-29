const graphqlFetcher = async (query) => {
  const url = "https://api.potterdb.com/graphql";
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
