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
  const arrayHasElements = array?.length > 0;

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Accordion
      disabled={!arrayHasElements}
      expanded={expanded}
      onChange={handleChange}
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
