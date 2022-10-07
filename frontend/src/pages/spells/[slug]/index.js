import SpellDetails from '../../../components/pages/spells/[slug]/SpellDetails'
import { getSpells, getSpellsBySlug } from '../../../lib/load_spells';


const Spells = ({ data, links }) => {
  const { attributes } = data;

  return (
    <SpellDetails attributes={attributes} apiLink={links?.self} />
  )
}

export async function getStaticPaths() {
  const fetchedSpells = await getSpells({ perPage: 30 });

  const spellSlugs = fetchedSpells?.data?.map(
    (spell) => spell?.attributes?.slug
  );

  const paths = spellSlugs.map((slug) => ({
    params: {
      slug,
    }
  }))

  return {
    fallback: 'blocking',
    paths,
  }
}

export async function getStaticProps({ params }) {
  const spell = await getSpellsBySlug(params.slug);
  const { data, links, hasError } = spell;

  if (hasError || !data || !data.attributes || !links) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      links,
    }
  }
}

export default Spells;