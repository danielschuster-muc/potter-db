import SpellDetails from '../../../components/pages/spells/[slug]/SpellDetails'
import { getSpells, getSpellsBySlug } from '../../../lib/load_spells';


const Spells = ({ data, links }) => {
  const { attributes } = data;

  return (
    <SpellDetails attributes={attributes} apiLink={links?.self} />
  )
}

export async function getStaticPaths() {
  const defaultSlugs = [
    "age-line",
    "alarte-ascendare",
    "albus-dumbledore-s-forceful-spell",
    "amplifying-charm",
    "anapneo",
    "animagus-spell",
    "anteoculatia",
    "anti-cheating-spell",
    "anti-disapparition-jinx",
    "antonin-dolohov-s-curse",
    "apparition",
    "aqua-eructo",
    "arania-exumai",
    "arrow-shooting-spell",
    "ascendio",
    "avenseguim",
    "avifors-spell",
    "babbling-curse",
    "badgering",
  ]

  const fetchedSpells = await getSpells({ perPage: 30 });

  const spells = fetchedSpells?.data

  const slugs = [...defaultSlugs, ...spells.map(spell => spell.attributes.slug)]

  const paths = slugs.map((slug) => ({
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