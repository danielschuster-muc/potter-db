import Image from "next/image";

import { faCross, faStar, faPerson, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

import { getPotionDifficultyColor } from "../../../lib/utils";
import Link from "../../Link";
import ListItemBox from "../../ui/ListItemBox";

const PotionListItem = ({ potion }) => {
  const { name, slug, effect, side_effects, characteristics, difficulty, inventors, image } = potion.attributes;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: `3px solid ${getPotionDifficultyColor(difficulty)}`,
          justifyContent: "space-between",
        }}
      >
        <CardMedia>
          <Image
            as="image"
            src={image || "/images/potion.svg"}
            alt={`Picture of ${name}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="scale-down"
            quality={30}
            loading="eager"
            priority
          />
        </CardMedia>
        <CardHeader title={name} />
        <CardContent>
          <ListItemBox value={difficulty} icon={faStar} />
          <ListItemBox value={inventors} icon={faPerson} />
          <ListItemBox value={side_effects} icon={faCross} />
          <ListItemBox value={effect} icon={faEdit} />
          <ListItemBox value={characteristics} icon={faPlus} />
        </CardContent>
        <CardActions>
          <Link href={`/potions/${slug}`}>
            <Typography sx={{ ml: 1 }}>Detailed Potion Information</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PotionListItem;
