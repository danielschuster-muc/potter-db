import Image from "next/image";

import {
  faCross,
  faPaw,
  faStar,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import { getHouseColor } from "../../../lib/utils";
import Link from "../../Link";

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
          border: `3px solid ${getHouseColor(house)}`,
          justifyContent: "space-between",
        }}
      >
        <CardMedia>
          <Image
            as="image"
            src={image || "/images/question_mark.jpg"}
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
          {species && (
            <Box display="flex">
              <FontAwesomeIcon icon={faPaw} />
              <Typography sx={{ ml: 1 }} noWrap>
                {species}
              </Typography>
            </Box>
          )}
          {gender && (
            <Box display="flex">
              <FontAwesomeIcon icon={faVenusMars} />
              <Typography sx={{ ml: 1 }} noWrap>
                {gender}
              </Typography>
            </Box>
          )}
          {born && (
            <Box display="flex">
              <FontAwesomeIcon icon={faStar} />
              <Typography sx={{ ml: 1 }} noWrap>
                {born}
              </Typography>
            </Box>
          )}
          {died && (
            <Box display="flex">
              <FontAwesomeIcon icon={faCross} />
              <Typography sx={{ ml: 1 }} noWrap>
                {died}
              </Typography>
            </Box>
          )}
        </CardContent>
        <CardActions>
          <Link href={`/characters/${slug}`}>
            <Typography>Detailed Character Information</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterListItem;
