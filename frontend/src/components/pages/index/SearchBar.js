import { Search } from "@mui/icons-material";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState("chapters");
  const [search, setSearch] = useState("");

  const searchTypes = [
    {
      value: "books",
      label: "Books",
    },
    {
      value: "characters",
      label: "Characters",
    },
    {
      value: "movies",
      label: "Movies",
    },
    {
      value: "potions",
      label: "Potions",
    },
    {
      value: "spells",
      label: "Spells",
    },
  ];

  const handleChangeSearchType = (event) => {
    const searchType = event.target.value;
    setSearchType(searchType);
  };

  const handleChangeSearch = (event) => {
    const search = event.target.value;
    setSearch(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/${searchType}?q=${search}`);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 2,
        mt: 5,
        justifyContent: "center",
        width: {
          xs: "100%",
          sm: "70%",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "stretch",
          md: "stretch",
        },
      }}
    >
      <TextField
        id="outlined-search"
        variant="outlined"
        size="large"
        type="search"
        label="Search"
        value={search}
        onChange={handleChangeSearch}
      />
      <TextField
        id="outlined-type-selection"
        variant="outlined"
        select
        label="Type"
        value={searchType}
        onChange={handleChangeSearchType}
      >
        {searchTypes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        size="large"
        type="submit"
        onClick={handleSubmit}
        variant="outlined"
        aria-label="search"
        startIcon={<Search />}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
