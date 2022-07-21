import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ id, attributes }) => {
  const { name, slug, born, died, species, gender, wiki_link } = attributes;

  const informationTable = [
    {
      name: "born",
      value: born,
    },
    {
      name: "died",
      value: died,
    },
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
    <Grid item xs={12} md={4}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" textAlign="center">
          {name}
        </Typography>
        <CardMedia>
          <Image
            src={attributes.image_url || "/images/question_mark.png"}
            alt={`Image of ${name}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            priority="true"
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
                      <TableRow key={`${row.name}_${id}`}>
                        <TableCell
                          sx={{
                            textTransform: "uppercase",
                            color: "gray",
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
        <CardActions>
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
