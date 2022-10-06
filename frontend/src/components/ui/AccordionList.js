import React from "react";

import { Box } from "@mui/system";

import CustomAccordion from "./CustomAccordion";

const AccordionList = ({ accordions }) => {
  return (
    accordions?.length > 0 && (
      <Box>
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
    )
  );
};

export default AccordionList;
