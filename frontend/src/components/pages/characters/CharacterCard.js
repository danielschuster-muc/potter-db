import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const getHouseColor = (house) => {
  switch (house) {
    case "Gryffindor":
      return "#ae0001";
    case "Slytherin":
      return "#2a623d";
    case "Hufflepuff":
      return "#ffdb00";
    case "Rawenclaw":
      return "#222F5B";
    default:
      return "#bebebe";
  }
};

const CharacterCard = ({ id, attributes }) => {
  const { name, slug, species, gender, house, wiki_link } = attributes;

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
          title={name}
          subheader={house ? house : ""}
          sx={{ textAlign: "center" }}
        />

        <CardMedia>
          <Image
            as="image"
            src={attributes.image_url || "/images/question_mark.png"}
            alt={`Image of ${name}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </CardMedia>
        <CardContent>
          <TableContainer>
            <Table aria-label={`Information about ${name}`}>
              <TableBody>
                {informationTable
                  .filter((row) => row.value)
                  .map((row) => {
                    return (
                      <TableRow
                        key={`${row.name}_${id}`}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <TableCell
                          sx={{
                            textTransform: "uppercase",
                            color: "text.secondary",
                            borderBottom: "none",
                          }}
                          component="th"
                          scope="row"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none" }}>
                          {row.value}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Link href={`/characters/${slug}`}>
            <Button size="small">More Information</Button>
          </Link>
          <Link href={wiki_link}>
            <Button size="small">Wiki</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
