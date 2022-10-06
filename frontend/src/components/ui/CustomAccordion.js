import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const CustomAccordion = ({ array, name }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const arrayHasElements = array?.length > 0;

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      disabled={!arrayHasElements}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${name.toLowerCase().replace(/\s+/g, "-")}-content`}
        id={`${name.toLowerCase().replace(/\s+/g, "-")}-header`}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      {arrayHasElements && (
        <AccordionDetails>
          <ul>
            {array.map((element) => {
              return <li key={element}>{element}</li>;
            })}
          </ul>
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default CustomAccordion;
