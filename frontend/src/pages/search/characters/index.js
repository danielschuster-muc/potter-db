import { dehydrate, QueryClient } from "@tanstack/react-query";

import CharacterList from "../../../components/pages/search/characters/CharacterList";
import Meta from "../../../components/Meta";
import { getCharacters } from "../../../lib/load_characters";

const fetchCharacters = async ({ pageParam = 1, queryKey }) => {
  const searchQuery = queryKey[1];
  return await getCharacters({
    page: pageParam,
    searchQuery: searchQuery,
  });
};

const Characters = () => {
  return (
    <>
      <Meta
        title="Characters"
        description="List of all Harry Potter characters"
      />
      <CharacterList fetchCharacters={fetchCharacters} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["characters"], fetchCharacters, {
    retry: 10,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Characters;
