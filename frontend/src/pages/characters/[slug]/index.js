import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { getCharacterBySlug, getCharacters } from "../../../lib/characters";

const Character = ({ character }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <CircularProgress/>
        <p>Loading ...</p>
      </>
    )
  }

  const attributes = character.data.attributes;
  const metaDescription = getMetaDescription(attributes);

  return (
    <>
      <Meta title={`${attributes.name}`} description={metaDescription} image={attributes.image_url} />
      <h1>{attributes.name}</h1>
      {attributes.image_url && (
        <Box>
        <Image
          src={attributes.image_url}
          alt={`Image of ${attributes.name}`}
          width="100%"
          height="100%"
          /></Box>
      )}
    </>
  );
};

const getMetaDescription = (attributes) => {
  let description = []
  if(attributes.born) {
    description.push(`Born: ${attributes.born}`)
  }

  if (attributes.died) {
    description.push(`Died: ${attributes.died}`)
  }

  if (attributes.species) {
    description.push(`Species: ${attributes.species}`)
  }

  if (attributes.gender) {
    description.push(`Gender: ${attributes.gender}`)
  }

  return description.join(" - ")
}

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
    fallback: true,
    paths: paths,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const character = await getCharacterBySlug(slug);

  return {
    props: {
      character,
    }
  };
}

export default Character;
