import { Grid } from "@mui/material";

import { getCharacterBySlug, getCharacters } from "../../../lib/load_characters";
import BioCard from "../../../components/pages/characters/[slug]/BioCard";
import SingleCharacterMeta from "../../../components/pages/characters/[slug]/CharacterMeta";
import CharacterPageContent from "../../../components/pages/characters/[slug]/CharacterPageContent";

const Character = ({ data, links }) => {
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
  const slugs = [
    "harry_potter",
    "ronald_weasley",
    "hermione_granger",
    "ginevra_weasley",
    "severus_snape",
    "albus_dumbledore",
    "draco_malfoy",
    "dobby",
    "luna_lovegood",
    "dudley_dursley",
    "sirius_black",
  ];

  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  try {
    const character = await getCharacterBySlug(params.slug);
    const { data, links, errors } = character;
    if (!data || !data.attributes || !links || errors) {
      return { notFound: true };
    }

    return {
      props: {
        data,
        links,
      },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
}

export default Character;
