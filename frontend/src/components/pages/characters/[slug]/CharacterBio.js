import { useEffect, useState } from "react";

import Image from "next/image";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

import TwoColumnTable from "../../../ui/TwoColumnTable";

import { getHouseColor } from "../../../../lib/utils";
import Link from "../../../Link";

const CharacterBio = ({ attributes, apiLink }) => {
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
    image,
    wiki,
  } = attributes;

  const [subHeader, setSubHeader] = useState();

  useEffect(() => {
    let randomSubHeader;
    if (alias_names?.length > 0) {
      randomSubHeader =
        alias_names[Math.floor(Math.random() * alias_names.length)];
    }
    setSubHeader(randomSubHeader);
  }, [alias_names]);

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

  return (
    <Card sx={{ border: `3px solid ${getHouseColor(house)}` }}>
      <CardHeader
        title={name}
        subheader={subHeader}
        sx={{ textAlign: "center" }}
      />
      <CardMedia>
        <Image
          as="image"
          src={image || "/images/missing_image.jpg"}
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
        <TwoColumnTable name={name} tableData={informationTable} id={slug} />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Link href={wiki}>
          <Button size="small">Wiki</Button>
        </Link>
        <Link href={apiLink}>
          <Button size="small">API</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CharacterBio;
