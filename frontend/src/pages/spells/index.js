import { dehydrate, QueryClient } from "@tanstack/react-query";

import Meta from '../../components/Meta'
import SpellList from '../../components/pages/spells/SpellList'
import { getSpells } from "../../lib/load_spells";

const fetchSpells = async ({ pageParam = 1, queryKey }) => {
  const [_, searchQuery] = queryKey;
  return await getSpells({
    page: pageParam, searchQuery: searchQuery,
  })
}

const Spells = () => {
  return (
    <>
      <Meta title={'Spells'} description='List of all Harry Potter spells' />
      <SpellList fetchSpells={fetchSpells} />
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['spells'], fetchSpells, {retry: 10})
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Spells;