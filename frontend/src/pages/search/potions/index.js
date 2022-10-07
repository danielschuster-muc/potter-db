import { dehydrate, QueryClient } from "@tanstack/react-query";

import Meta from "../../../components/Meta";
import PotionList from "../../../components/pages/search/potions/PotionList";
import { getPotions } from "../../../lib/load_potions";

const fetchPotions = async ({ pageParam = 1, queryKey }) => {
  const [_, searchQuery] = queryKey;
  return await getPotions({
    page: pageParam,
    searchQuery: searchQuery,
  });
};

const Potions = () => {
  return (
    <>
      <Meta title="Potions" description="List of all Harry Potter potions" />
      <PotionList fetchPotions={fetchPotions} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["potions"], fetchPotions, {
    retry: 10,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Potions;
