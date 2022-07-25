import { CircularProgress, Grid } from "@mui/material";
import { useRouter } from "next/router";

import { getCharacterBySlug, getCharacters } from "../../../lib/characters";
import BioCard from "../../../components/pages/characters/[slug]/BioCard";
import SingleCharacterMeta from "../../../components/pages/characters/[slug]/CharacterMeta";
import CharacterPageContent from "../../../components/pages/characters/[slug]/CharacterPageContent";

const Character = ({ data, links }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <CircularProgress />
        <p>Loading ...</p>
      </>
    );
  }

  const { attributes } = data;

  return (
    <>
      <SingleCharacterMeta attributes={attributes} />
      <h1>{attributes.name}</h1>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
          <CharacterPageContent attributes={attributes} />
        </Grid>

        <Grid item xs={12} md={4} order={{ xs: 1, md: 2 }}>
          <BioCard attributes={attributes} apiLink={links.self} />
        </Grid>
      </Grid>
    </>
  );
};

export async function getStaticPaths() {
  const characters = await getCharacters();

  let paths = [];

  if (characters.data) {
    paths = characters.data.map((character) => ({
      params: {
        slug: character.attributes.slug.toString(),
      },
    }));
  }

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  let data, links;
  let notFound = true;

  try {
    const character = await getCharacterBySlug(slug);
    data = character.data;
    links = character.links;
    if (data.attributes !== null) notFound = false;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data,
      links,
    },
    notFound,
  };
}

export default Character;

// #mw-content-text > div > p:nth-child(8)
