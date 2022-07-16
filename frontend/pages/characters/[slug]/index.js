import Image from "next/image";
import { getCharacterBySlug, getCharacters } from "../../../lib/characters";

const Character = ({ character }) => {
  const attributes = character.data.attributes;
  console.log(attributes.image_url);
  return (
    <>
      <h1>{attributes.name}</h1>
      {attributes.image_url && (
        <Image
          src={attributes.image_url}
          alt={`Image of ${attributes.name}`}
          layout="fill"
        />
      )}
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
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const character = await getCharacterBySlug(slug);

  return {
    props: {
      character,
    },
  };
}

export default Character;
