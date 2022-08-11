import { Typography } from "@mui/material";

import Meta from "../../components/Meta";
import DataListTable from "../../components/ui/DataListTable";
import SearchField from "../../components/ui/SearchField";

import { getCharacters } from "../../lib/load_characters";

const Characters = ({ charactersData }) => {
  const { data, meta, hasError } = charactersData;

  const totalRecords = meta?.pagination.records;

  const headCells = [
    "Name",
    "Species",
    "Gender",
    "Nationality",
    "House",
    "Height",
    "Weight",
  ];

  return (
    <>
      <Meta
        title="Characters"
        description="List of all Harry Potter characters"
      />
      <Typography variant="h3">
        Welcome to the Harry Potter Character List
      </Typography>

      <SearchField totalResults={totalRecords} />

      {(hasError || !data) && <p>No characters available!</p>}

      {data && !hasError && (
        <DataListTable
          characters={data}
          headCells={headCells}
          totalRecords={totalRecords}
        />
      )}
    </>
  );
};

export async function getServerSideProps({ query }) {
  const charactersData = await getCharacters(query);

  return {
    props: {
      charactersData,
    },
  };
}

export default Characters;
