import React from "react";

import { Box } from "@mui/system";

import CustomAccordion from "../../../ui/CustomAccordion";

const CharacterPageContent = ({ attributes }) => {
  const accordions = [
    {
      name: "Alias Names",
      value: attributes.alias_names,
    },
    {
      name: "Family Members",
      value: attributes.family_members,
    },
    {
      name: "Jobs",
      value: attributes.jobs,
    },
    {
      name: "Romances",
      value: attributes.romances,
    },
    {
      name: "Wands",
      value: attributes.wands,
    },
  ];

  return (
    <>
      <Box sx={{ mt: 3 }}>
        {accordions.map((accordion) => {
          return (
            <CustomAccordion
              key={accordion.name}
              name={accordion.name}
              array={accordion.value}
            />
          );
        })}
      </Box>
    </>
  );
};

export default CharacterPageContent;
