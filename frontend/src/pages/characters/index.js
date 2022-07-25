import { Box, Grid, Pagination, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meta from "../../components/Meta";
import BasicCharacterCard from "../../components/pages/characters/BasicCharacterCard";
import { getCharacters } from "../../lib/characters";

const Characters = ({ characters }) => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPath = router.pathname;
      const currentQuery = router.query;
      currentQuery.search = inputText;
      router.push({ pathname: currentPath, query: currentQuery });
    }, 300);
    return () => clearTimeout(timer);
  }, [inputText]);

  const { data, meta } = characters;

  const handlePaginationChange = (_event, page) => {
    setPage(page);
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page;
    router.push({ pathname: currentPath, query: currentQuery });
  };

  useEffect(() => {
    setInputText(router.query.search);
  }, []);

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

      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText || ""}
      />

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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={meta?.pagination.last}
          page={page}
          onChange={handlePaginationChange}
          size="large"
        />
      </Box>
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
