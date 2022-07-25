import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import TwoColumnTable from "../../ui/TwoColumnTable";

const getHouseColor = (house) => {
  switch (house) {
    case "Gryffindor":
      return "#ae0001";
    case "Slytherin":
      return "#2a623d";
    case "Hufflepuff":
      return "#ffdb00";
    case "Ravenclaw":
      return "#222f5b";
    default:
      return "#bebebe";
  }
};

const CharacterCard = ({ id, attributes }) => {
  const { name, slug, species, gender, house, image_url } = attributes;

  const informationTable = [
    {
      name: "species",
      value: species,
    },
    {
      name: "gender",
      value: gender,
    },
  ];

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ my: 1 }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: `3px solid ${getHouseColor(house)}`,
        }}
      >
        <CardHeader
          title={
            <Link href={`/characters/${slug}`}>
              <Button size="large">{name}</Button>
            </Link>
          }
          subheader={house ? house : ""}
          sx={{ textAlign: "center" }}
        />

        <CardMedia>
          <Image
            as="image"
            src={image_url || "/images/question_mark.jpg"}
            alt={`Picture of ${name}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="scale-down"
            loading="eager"
            priority
          />
        </CardMedia>
        <CardContent>
          <TwoColumnTable name={name} tableData={informationTable} id={id} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
