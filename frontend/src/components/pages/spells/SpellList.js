import { useState }  from 'react'

import { Grid, Typography } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';

import SearchField from '../../ui/SearchField'
import SpellListItem from './SpellListItem'
import ListStatusButton from '../../ui/ListStatusButton'

const SpellList = ({ fetchSpells }) => {
  const [searchQuery, setSearchQuery] = useState()

  const {
    data: rawSpells,
    isFetchingNextPage,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(['spells', searchQuery], fetchSpells, {
    retry: 10,
    getNextPageParam: (lastPage, pages) => {
      if (pages?.length < (lastPage?.meta?.pagination?.last || 0)) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  return (
    <>
      <Typography variant="h3">Spell Search</Typography>
      <SearchField
        placeholder={'e.g. Wingardium Leviosa'}
        handleChangeSearch={setSearchQuery}
        totalResults={rawSpells?.pages ? rawSpells?.pages[0]?.meta?.pagination?.records : 0}
      />
      {isSuccess && (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => {}}>
          <Grid container spacing={2}>
            {rawSpells?.pages?.map((page) =>
              page?.data?.map((spell) => {
                return <SpellListItem key={spell.id} spell={spell} />
              }))}
          </Grid>
        </InfiniteScroll>
      )}
      <ListStatusButton 
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        error={error}
        title='spells'
      />
    </>
  )
}

export default SpellList;