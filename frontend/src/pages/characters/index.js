import { Grid } from "@mui/material";
import Meta from "../../components/Meta";
import BasicCharacterCard from "../../components/pages/characters/BasicCharacterCard";
import CustomPagination from "../../components/ui/CustomPagination";
import SearchField from "../../components/ui/SearchField";
import { getCharacters } from "../../lib/load_characters";
import SortFilter from "../../components/ui/SortFilter";
import DirectionFilter from "../../components/ui/DirectionFilter";

const Characters = ({ characters }) => {
  const { data, meta } = characters;

  const stats = meta && (
    <>
      <p>Total characters: {meta.pagination.records}</p>
      <p>Current page: {meta.pagination.current}</p>
      <p>Next page: {meta.pagination.next}</p>
      <p>Last page: {meta.pagination.last}</p>
      {data && <p>Characters on current page: {data.length}</p>}
    </>
  );

  const metaDescription = `List of all Harry Potter characters - ${
    meta ? `Total: ${meta.pagination.records}` : ""
  }`;

  return (
    <>
      <Meta title="Characters" description={metaDescription} />
      <h1>Welcome to the Harry Potter Character List</h1>
      {stats}

      <Grid container spacing={1}>
        <Grid item xs={12} md={8} my={2}>
          <SearchField />
        </Grid>
        <Grid item xs={6} md={2} my={2}>
          <SortFilter />
        </Grid>
        <Grid item xs={6} md={2} my={2}>
          <DirectionFilter />
        </Grid>
      </Grid>

      {data && (
        <Grid container spacing={5} sx={{ mt: 1 }} alignItems="stretch">
          {data.map((character) => (
            <BasicCharacterCard
              key={character.id}
              id={character.id}
              attributes={character.attributes}
            />
          ))}
        </Grid>
      )}

      {!data && <p>No characters available!</p>}

      <CustomPagination totalPages={meta?.pagination.last} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const characters = await getCharacters(query);

  return {
    props: {
      characters,
    },
  };
}

export default Characters;
