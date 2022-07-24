import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Meta from "../../../components/Meta";
import { getCharacterBySlug, getCharacters } from "../../../lib/characters";

const getMetaDescription = (attributes) => {
  let description = [];
  if (attributes.born) {
    description.push(`Born: ${attributes.born}`);
  }

  if (attributes.died) {
    description.push(`Died: ${attributes.died}`);
  }

  if (attributes.species) {
    description.push(`Species: ${attributes.species}`);
  }

  if (attributes.gender) {
    description.push(`Gender: ${attributes.gender}`);
  }

  return description.join(" - ");
};

const Character = ({ data, links }) => {
  const router = useRouter();

  const [subHeader, setSubHeader] = useState();

  const { attributes } = data;
  const {
    slug,
    name,
    born,
    died,
    gender,
    species,
    height,
    weight,
    hair_color,
    eye_color,
    skin_color,
    blood_status,
    marital_status,
    nationality,
    animagus,
    boggart,
    house,
    patronus,
    alias_names,
    image_url,
    wiki_link,
  } = attributes;
  const apiLink = links.self;

  useEffect(() => {
    let randomSubHeader;
    if (alias_names?.length > 0) {
      randomSubHeader =
        alias_names[Math.floor(Math.random() * alias_names.length)];
    }
    setSubHeader(randomSubHeader);
  }, [alias_names]);

  if (router.isFallback) {
    return (
      <>
        <CircularProgress />
        <p>Loading ...</p>
      </>
    );
  }

  const informationTable = [
    {
      name: "name",
      value: name,
    },
    {
      name: "born",
      value: born,
    },
    {
      name: "died",
      value: died,
    },
    {
      name: "gender",
      value: gender,
    },
    {
      name: "species",
      value: species,
    },
    {
      name: "height",
      value: height,
    },
    {
      name: "weight",
      value: weight,
    },
    {
      name: "hair_color",
      value: hair_color,
    },
    {
      name: "eye_color",
      value: eye_color,
    },
    {
      name: "skin_color",
      value: skin_color,
    },
    {
      name: "blood_status",
      value: blood_status,
    },
    {
      name: "marital_status",
      value: marital_status,
    },
    {
      name: "nationality",
      value: nationality,
    },
    {
      name: "animagus",
      value: animagus,
    },
    {
      name: "boggart",
      value: boggart,
    },
    {
      name: "house",
      value: house,
    },
    {
      name: "patronus",
      value: patronus,
    },
  ];

  const metaDescription = getMetaDescription(attributes);

  return (
    <>
      <Meta title={name} description={metaDescription} image={image_url} />
      <h1>{attributes.name}</h1>

      <Card>
        <CardHeader
          title="Bio"
          subheader={subHeader}
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
          <TableContainer>
            <Table aria-label={`Information about ${name}`}>
              <TableBody>
                {informationTable
                  .filter((row) => row.value)
                  .map((row) => {
                    return (
                      <TableRow key={`${row.name}_${slug}`}>
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
          <Link href={wiki_link}>
            <Button size="small">Wiki</Button>
          </Link>
          <Link href={apiLink}>
            <Button size="small">API</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export async function getStaticPaths() {
  const characters = await getCharacters();

  let paths = [];

  if (characters.data) {
    paths = characters.data.map((character) => ({
      params: {
        slug: character.attributes.slug.toString(),
      },
    }));
  }

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  let data, links;
  let notFound = true;

  try {
    const character = await getCharacterBySlug(slug);
    data = character.data;
    links = character.links;
    if (data.attributes !== null) notFound = false;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data,
      links,
    },
    notFound,
  };
}

export default Character;
