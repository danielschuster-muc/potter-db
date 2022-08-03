import { Typography } from "@mui/material";

import Meta from "../../components/Meta";
import DataListTable from "../../components/ui/DataListTable";
import SearchField from "../../components/ui/SearchField";
import { getCharacters } from "../../lib/load_characters";

const Characters = ({ characters }) => {
  const { data, meta } = characters;

  const totalRecords = meta?.pagination.records;

  const metaDescription = `List of all Harry Potter characters - ${
    meta ? `Total: ${totalRecords}` : ""
  }`;

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
      <Meta title="Characters" description={metaDescription} />
      <Typography variant="h3">
        Welcome to the Harry Potter Character List
      </Typography>

      <SearchField totalResults={totalRecords} />

      {data && (
        <DataListTable
          characters={data}
          headCells={headCells}
          totalRecords={totalRecords}
        />
      )}

      {!data && <p>No characters available!</p>}
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
