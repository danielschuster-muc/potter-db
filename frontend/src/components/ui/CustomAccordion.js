import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const CustomAccordion = ({ value, name }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const isArray = Array.isArray(value);

  const isDisabled = isArray ? value.length === 0 : !value?.trim();

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      disabled={isDisabled}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${name.toLowerCase().replace(/\s+/g, "-")}-content`}
        id={`${name.toLowerCase().replace(/\s+/g, "-")}-header`}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      {!isDisabled && (
        <AccordionDetails>
          {!isArray ? (
            value
          ) : (
            <ul>
              {value?.map((element) => {
                return <li key={element}>{element}</li>;
              })}
            </ul>
          )}
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default CustomAccordion;
