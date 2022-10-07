import SpellDetails from '../../../components/pages/spells/[slug]/SpellDetails'
import SpellMeta from '../../../components/pages/spells/[slug]/SpellMeta'
import { getSpells, getSpellsBySlug } from '../../../lib/load_spells';

const Spells = ({ data, links }) => {
  const { attributes } = data;

  return (
    <>
      <SpellMeta attributes={attributes} />
      <SpellDetails attributes={attributes} apiLink={links?.self} />
    </>
  )
}

export async function getStaticPaths() {
  const defaultSlugs = [
    "disarming-charm",
    "imperius-curse",
    "killing-curse",
    "levitation-charm",
    "memory-charm",
    "patronus-charm",
    "stunning-spell",
    "summoning-charm",
    "unlocking-charm",
    "wand-lighting-charm",
  ]

  const fetchedSpells = await getSpells({ perPage: 30 });

  const spells = fetchedSpells?.data;

  const slugs = [
    ...defaultSlugs,
    ...spells.map((spell) => spell.attributes.slug),
  ];

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