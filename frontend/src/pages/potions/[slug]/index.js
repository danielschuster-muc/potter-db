import PotionDetails from "../../../components/pages/potions/[slug]/PotionDetails";
import PotionMeta from "../../../components/pages/potions/[slug]/PotionMeta";
import { getPotionBySlug, getPotions } from "../../../lib/load_potions";

const Potions = ({ data, links }) => {
  const { attributes } = data;

  return (
    <>
      <PotionMeta attributes={attributes} />
      <PotionDetails attributes={attributes} apiLink={links?.self} />
    </>
  );
};

export async function getStaticPaths() {
  const fetchedPotions = await getPotions({ perPage: 30 });

  const potions = fetchedPotions?.data?.map(
    (potion) => potion?.attributes?.slug
  );

  const paths = potions.map((slug) => ({
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
  const potion = await getPotionBySlug(params.slug);
  const { data, links, hasError } = potion;

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

export default Potions;
