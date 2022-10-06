import { Container } from "@mui/material";

import AccordionList from "./AccordionList";
import CharacterBio from "./CharacterBio";

const CharacterDetail = ({ attributes, apiLink }) => {
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
    <Container maxWidth="md">
      <CharacterBio attributes={attributes} apiLink={apiLink} />
      <AccordionList accordions={accordions} />
    </Container>
  );
};

export default CharacterDetail;
