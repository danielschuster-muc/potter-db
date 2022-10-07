import { Grid } from "@mui/material";

import { getPotionDifficultyColor } from "../../../../lib/utils";
import AccordionList from "../../../ui/AccordionList";
import DetailInfoCard from "../../../ui/DetailedInfoCard";

const PotionDetails = ({ attributes, apiLink }) => {
	const {
		name,
		slug,
		image,
		effect,
		difficulty,
		inventors,
		side_effects,
		characteristics,
		time,
		ingredients,
		manufacturers,
		wiki,
	} = attributes;

	const accordions = [
		{
			name: "Ingredients",
			value: ingredients?.split(", "),
		},
	];

	const informationTable = [
		{
			name: "name",
			value: name,
		},
		{
			name: "difficulty",
			value: difficulty,
		},
		{
			name: "inventors",
			value: inventors,
		},
		{
			name: "effect",
			value: effect,
		},
		{
			name: "side_effects",
			value: side_effects,
		},
		{
			name: "characteristics",
			value: characteristics,
		},
		{
			name: "time",
			value: time,
		},
		{
			name: "manufacturers",
			value: manufacturers,
		},
	];

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<DetailInfoCard
					title={name}
					slug={slug}
					color={getPotionDifficultyColor(difficulty)}
					image={image}
					tableData={informationTable}
					links={[
						{ title: "Wiki", value: wiki },
						{ title: "API", value: apiLink },
					]}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<AccordionList accordions={accordions} />
			</Grid>
		</Grid>
	);
};

export default PotionDetails;
