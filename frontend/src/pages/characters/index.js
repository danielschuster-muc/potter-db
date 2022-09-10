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
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Meta from "../../components/Meta";
import Link from "../../lib/Link";
import { getCharacters } from "../../lib/load_characters";
import { getHouseColor } from "../../lib/utils";

const Characters = ({ charactersData }) => {
  const { data, meta, hasError } = charactersData;

  const router = useRouter();

  const [page, setPage] = useState(parseInt(router.query.page) || 1);

  const [characters, setCharacters] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMoreData = async () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);

      const myQuery = { page: page + 1 };
      setPage((prePage) => (prePage += 1));

      const newCharactersData = await getCharacters(myQuery);
      const newCharacters = newCharactersData?.data;
      if (newCharacters) {
        setCharacters((preCharacters) => {
          const characterList = {};
          [...preCharacters, ...newCharacters].forEach((item) => {
            characterList[item.id] = item;
          });
          return Object.values(characterList);
        });

        const pagination = newCharactersData.meta.pagination;
        if (pagination.current == pagination.last) {
          setHasMore(false);
        }
      }

      setIsLoadingMore(false);
    }
  };

  console.log(characters.length);

  return (
    <>
      <Meta
        title="Characters"
        description="List of all Harry Potter characters"
      />
      <Typography variant="h3">Character Search</Typography>

      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={characters.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<CircularProgress aria-label="Loading more characters" />}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <Grid container spacing={2}>
          {characters.map((character) => {
            const { name, slug, house, born, died, species, gender, image } =
              character.attributes;
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
          })}
        </Grid>
      </InfiniteScroll>

      {/* <SearchField totalResults={totalRecords} /> */}
    </>
  );
};

export async function getServerSideProps() {
  const myQuery = { page: 1 };
  const charactersData = await getCharacters(myQuery);

  return {
    props: {
      charactersData,
    },
  };
}

export default Characters;
