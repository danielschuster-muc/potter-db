import Image from "next/legacy/image";

import {
  faCross,
  faPaw,
  faStar,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Link from "../../Link";
import ListItemBox from "../../ui/ListItemBox";
import { getCharacterColorByHouse } from "../../../lib/utils";

const CharacterListItem = ({ character }) => {
  const { name, slug, house, born, died, species, gender, image } =
    character.attributes;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: `3px solid ${getCharacterColorByHouse(house)}`,
          justifyContent: "space-between",
        }}
      >
        <CardMedia>
          <Image
            as="image"
            src={image || "/images/missing_character.svg"}
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
          <ListItemBox value={species} icon={faPaw} />
          <ListItemBox value={gender} icon={faVenusMars} />
          <ListItemBox value={born} icon={faStar} />
          <ListItemBox value={died} icon={faCross} />
        </CardContent>
        <CardActions>
          <Link href={`/characters/${slug}`}>
            <Typography sx={{ ml: 1 }}>
              Detailed Character Information
            </Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterListItem;
