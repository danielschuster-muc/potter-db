import {
  faStar,
  faCross,
  faPaw,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import Meta from "../../components/Meta";
import SearchField from "../../components/ui/SearchField";
import Link from "../../lib/Link";
import { getCharacters } from "../../lib/load_characters";
import { getHouseColor } from "../../lib/utils";

const fetchCharacters = async ({ pageParam = 1, queryKey }) => {
  const [_, searchQuery] = queryKey;
  return await getCharacters({ page: pageParam, search: searchQuery });
};

const Characters = () => {
  const [searchQuery, setSearchQuery] = useState();

  const {
    data: rawCharacters,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(["characters", searchQuery], fetchCharacters, {
    retry: 10,
    getNextPageParam: (lastPage, pages) => {
      if (pages?.length < lastPage?.meta?.pagination?.last || 0) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  return (
    <>
      <Meta
        title="Characters"
        description="List of all Harry Potter characters"
      />
      <Typography variant="h3">Character Search</Typography>
      <SearchField
        handleChangeSearch={setSearchQuery}
        totalResults={
          rawCharacters?.pages
            ? rawCharacters?.pages[0]?.meta?.pagination?.records
            : 0
        }
      />

      {isSuccess && (
        <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
          <Grid container spacing={2}>
            {rawCharacters?.pages?.map((page) =>
              page?.data?.map((character) => {
                const {
                  name,
                  slug,
                  house,
                  born,
                  died,
                  species,
                  gender,
                  image,
                } = character.attributes;
                return (
                  <Grid key={character.id} item xs={12} sm={6} md={4} lg={3}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        border: `3px solid ${getHouseColor(house)}`,
                        justifyContent: "space-between",
                      }}
                    >
                      <CardMedia>
                        <Image
                          as="image"
                          src={image || "/images/question_mark.jpg"}
                          alt={`Picture of ${name}`}
                          width="100%"
                          height="100%"
                          layout="responsive"
                          objectFit="scale-down"
                          quality={30}
                          loading="eager"
                          priority
                        />
                      </CardMedia>
                      <CardHeader title={name} />
                      <CardContent>
                        {species && (
                          <Box display="flex">
                            <FontAwesomeIcon icon={faPaw} />
                            <Typography sx={{ ml: 1 }} noWrap>
                              {species}
                            </Typography>
                          </Box>
                        )}
                        {gender && (
                          <Box display="flex">
                            <FontAwesomeIcon icon={faVenusMars} />
                            <Typography sx={{ ml: 1 }} noWrap>
                              {gender}
                            </Typography>
                          </Box>
                        )}
                        {born && (
                          <Box display="flex">
                            <FontAwesomeIcon icon={faStar} />
                            <Typography sx={{ ml: 1 }} noWrap>
                              {born}
                            </Typography>
                          </Box>
                        )}
                        {died && (
                          <Box display="flex">
                            <FontAwesomeIcon icon={faCross} />
                            <Typography sx={{ ml: 1 }} noWrap>
                              {died}
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                      <CardActions>
                        <Link href={`/characters/${slug}`}>
                          Detailed Character Information
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            )}
          </Grid>
        </InfiniteScroll>
      )}
      {isLoading && <CircularProgress />}
      {error && <Typography>Error: {error.message}</Typography>}
      {isFetchingNextPage && <Typography>Loading more...</Typography>}
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
