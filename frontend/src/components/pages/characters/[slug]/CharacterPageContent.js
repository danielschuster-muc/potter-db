import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomAccordion from "../../../ui/CustomAccordion";

const CharacterPageContent = ({ attributes }) => {
  return (
    <>
      <Typography>
        Officia dolor tempor esse laboris commodo et mollit duis amet consequat.
        Consequat labore nulla dolore quis nisi fugiat excepteur ut aliqua
        occaecat duis reprehenderit. Consectetur commodo sunt et amet dolore ad
        anim proident. Nisi pariatur commodo cillum quis nisi amet est id ex do
        veniam mollit. Ullamco cillum consequat excepteur culpa qui laborum anim
        magna cillum. Aute dolor eu labore eiusmod quis. Aute consequat eiusmod
        labore laborum laborum excepteur eu ut duis officia minim voluptate
        labore. Lorem consequat reprehenderit est cupidatat labore ad magna duis
        commodo. Anim dolore dolor ipsum eiusmod cupidatat ad proident officia.
        Veniam dolore sint eiusmod ipsum sit mollit. Laborum nisi consequat duis
        cillum adipisicing in proident. Laborum dolore ullamco laboris
        incididunt adipisicing sunt voluptate fugiat voluptate ullamco anim. Ad
        non nisi anim ex velit. Aute labore dolore eiusmod id enim cupidatat
        ipsum. Magna et aute dolor id excepteur ut nostrud qui. Ut irure
        incididunt anim eu. Laborum sit fugiat incididunt sunt eu et consectetur
        dolor officia ex esse. Dolore reprehenderit ullamco deserunt officia
        ullamco elit ea eiusmod. Exercitation commodo aliquip cillum occaecat
        elit. Non aute exercitation do aliquip officia incididunt ad irure.
        Fugiat do proident id ad pariatur. Ut minim duis deserunt officia
        incididunt est ipsum est qui sit eiusmod eiusmod incididunt ullamco.
        Commodo deserunt anim eiusmod aliqua ipsum commodo veniam aute sit
        irure. Officia commodo mollit consectetur irure aliqua duis Lorem. Eu
        deserunt occaecat minim qui duis id. Ea nisi nostrud minim ad aliquip
        laboris excepteur et tempor. Minim incididunt ad dolore consequat
        laborum esse consequat cillum elit consectetur. Sint cupidatat deserunt
        mollit officia qui consequat magna ad. Ad cillum non aliqua ad deserunt
        magna incididunt amet sit dolore cupidatat. Non sunt sunt ad id aliquip
        veniam reprehenderit duis laboris. Laboris duis eiusmod quis officia
        aute nostrud sint aliquip tempor enim sunt officia labore ut. Proident
        anim duis ex duis id minim sit adipisicing dolore voluptate duis
        exercitation. Laborum nulla esse ut ut incididunt magna ex aute. Tempor
        id nostrud aliqua cupidatat nulla veniam officia amet nostrud magna.
        Nulla duis aliqua commodo sunt laboris deserunt elit. Sint adipisicing
        excepteur aliquip mollit officia. Irure aliqua fugiat dolor occaecat
        culpa occaecat labore tempor aute consectetur ex dolor. Excepteur ut
        consectetur id aute pariatur laboris voluptate consequat laboris nisi
        mollit. Occaecat nisi do veniam qui veniam ad dolor sunt ea adipisicing
        commodo. Aliqua adipisicing duis tempor adipisicing ea.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <CustomAccordion array={attributes.alias_names} name="Alias Names" />
        <CustomAccordion
          array={attributes.family_members}
          name="Family Members"
        />
        <CustomAccordion array={attributes.jobs} name="Jobs" />
        <CustomAccordion array={attributes.romances} name="Romances" />
        <CustomAccordion array={attributes.wands} name="Wands" />
      </Box>
    </>
  );
};

export default CharacterPageContent;
