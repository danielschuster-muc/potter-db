import { Container } from "@mui/material";

import CharacterBio from "../../../components/pages/characters/[slug]/CharacterBio";
import CharacterMeta from "../../../components/pages/characters/[slug]/CharacterMeta";
import CharacterAccordion from "../../../components/pages/characters/[slug]/CharacterAccordion";

import { getCharacterBySlug } from "../../../lib/load_characters";

const Character = ({ data, links }) => {
  const { attributes } = data;

  return (
    <Container maxWidth="md">
      <CharacterMeta attributes={attributes} />
      <CharacterBio attributes={attributes} apiLink={links.self} />
      <CharacterAccordion attributes={attributes} />
    </Container>
  );
};

export async function getStaticPaths() {
  const slugs = [
    "harry-potter",
    "ronald-weasley",
    "hermione-granger",
    "ginevra-weasley",
    "severus-snape",
    "albus-dumbledore",
    "tom-riddle",
    "draco-malfoy",
    "james-potter-i",
    "lily-j-potter",
    "albus-potter",
    "dobby",
    "sirius-black",
    "luna-lovegood",
    "dudley-dursley",
    "rubeus-hagrid",
    "vernon-dursley",
    "petunia-dursley",
    "arthur-weasley",
    "molly-weasley",
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
  const character = await getCharacterBySlug(params.slug);
  const { data, links, hasError } = character;

  if (hasError || !data || !data.attributes || !links) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      links,
    },
  };
}

export default Character;
