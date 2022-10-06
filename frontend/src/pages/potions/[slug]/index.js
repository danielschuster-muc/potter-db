import { getPotionsBySlug, getPotions } from '../../../lib/load_potions';

import PotionDetails from '../../../components/pages/potions/[slug]/PotionDetails';
import PotionMeta from '../../../components/pages/potions/[slug]/PotionMeta';

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
	const defaultSlugs = [
		'ageing-potion',
		'alihotsy-draught',
		'amortentia',
		'angel-s-trumpet-draught',
		'antidote',
		'antidote-to-common-poisons',
		'antidote-to-uncommon-poisons',
		'antidote-to-veritaserum',
		'anti-paralysis-potion',
		'armadillo-bile-mixture',
		'babbling-beverage',
		'baneberry-potion',
		'baruffio-s-brain-elixir',
		'beautification-potion',
		'befuddlement-draught',
		'blood-replenishing-potion',
		'bloodroot-poison',
		'bruise-removal-paste',
		'bulgeye-potion',
		'bundimun-pomade',
	];

	const fetchedPotions = await getPotions({ perPage: 30 });

	const potions = fetchedPotions?.data;

	const slugs = [...defaultSlugs, ...potions.map((potion) => potion.attributes.slug)];

	const paths = slugs.map((slug) => ({
		params: {
			slug,
		},
	}));

	return {
		fallback: 'blocking',
		paths,
	};
}

export async function getStaticProps({ params }) {
	const potion = await getPotionsBySlug(params.slug);
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
