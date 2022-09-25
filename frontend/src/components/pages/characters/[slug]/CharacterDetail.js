import { Container } from "@mui/material";

import CharacterAccordion from "./CharacterAccordion";
import CharacterBio from "./CharacterBio";

const CharacterDetail = ({ attributes, apiLink }) => {
  console.log(apiLink);
  return (
    <Container maxWidth="md">
      <CharacterBio attributes={attributes} apiLink={apiLink} />
      <CharacterAccordion attributes={attributes} />
    </Container>
  );
};

export default CharacterDetail;
