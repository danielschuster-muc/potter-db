import { Box, Card, Grid, Typography } from "@mui/material";

import AccordionList from "../../../ui/AccordionList";
import DetailInfoCard from "../../../ui/DetailedInfoCard";

const MovieDetails = ({ attributes, apiLink }) => {
	const {
		title,
		slug,
		summary,
		release_date,
		running_time,
		budget,
		box_office,
		rating,
		directors,
		screenwriters,
		producers,
		cinematographers,
		editors,
		music_composers,
		trailer,
		poster,
		wiki,
	} = attributes;

	const accordions = [
		{
			name: "Directors",
			value: directors,
		},
		{
			name: "Screenwriters",
			value: screenwriters,
		},
		{
			name: "Producers",
			value: producers,
		},
		{
			name: "Cinematographers",
			value: cinematographers,
		},
		{
			name: "Editors",
			value: editors,
		},
		{
			name: "Music Composers",
			value: music_composers,
		},
	];

	const informationTable = [
		{
			name: "title",
			value: title,
		},
		{
			name: "release date",
			value: new Date(release_date).toLocaleDateString(),
		},
		{
			name: "running time",
			value: running_time,
		},
		{
			name: "budget",
			value: budget,
		},
		{
			name: "box office",
			value: box_office,
		},
		{
			name: "rating",
			value: rating,
		},
	];

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<DetailInfoCard
						title={title}
						slug={slug}
						image={poster}
						tableData={informationTable}
						links={[
							{ title: "Wiki", value: wiki },
							{ title: "API", value: apiLink },
							{ title: "Trailer", value: trailer },
						]}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Card sx={{ mb: 2 }}>
						<Box sx={{ my: 1, mx: 2 }}>
							<Typography variant="h4">Summary</Typography>
							<Typography>{summary}</Typography>
						</Box>
					</Card>
					<AccordionList accordions={accordions} />
				</Grid>
			</Grid>
		</>
	);
};

export default MovieDetails;
