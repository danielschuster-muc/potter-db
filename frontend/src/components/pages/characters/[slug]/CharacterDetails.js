import { useEffect, useState } from "react";

import { Grid } from "@mui/material";

import AccordionList from "../../../ui/AccordionList";
import DetailInfoCard from "../../../ui/DetailedInfoCard";
import { getCharacterColorByHouse } from "../../../../lib/utils";

const CharacterDetails = ({ attributes, apiLink }) => {
  const {
    name,
    slug,
    image,
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
    family_members,
    jobs,
    romances,
    wands,
    wiki,
  } = attributes;

  const [subTitle, setSubTitle] = useState();

  useEffect(() => {
    if (alias_names?.length > 0) {
      setSubTitle(alias_names[Math.floor(Math.random() * alias_names.length)]);
    }
  }, [alias_names]);

  const accordions = [
    {
      name: "Alias Names",
      value: alias_names,
    },
    {
      name: "Family Members",
      value: family_members,
    },
    {
      name: "Jobs",
      value: jobs,
    },
    {
      name: "Romances",
      value: romances,
    },
    {
      name: "Wands",
      value: wands,
    },
  ];

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
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <DetailInfoCard
          title={name}
          subTitle={subTitle}
          slug={slug}
          color={getCharacterColorByHouse(house)}
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

export default CharacterDetails;
