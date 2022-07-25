import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CustomAccordion = ({ array, name }) => {
  const arrayHasElements = array?.length > 0;
  const [expanded, setExpanded] = useState(arrayHasElements);

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
