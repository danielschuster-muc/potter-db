import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchField = ({ totalResults = 0, handleChangeSearch }) => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  const handleNewInputText = (event) => {
    const newInputText = event.target.value;
    if (inputText !== newInputText) {
      setInputText(newInputText);
      // const { pathname, query } = router;
      // query.search = inputText;
      // router.push({ pathname, query });
      handleChangeSearch(newInputText);
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const { pathname, query } = router;

  //     if (query.search !== inputText) {
  //       query.search = inputText;
  //       router.push({ pathname, query });
  //       handleChangeSearch();
  //       handleResetPage();
  //     }
  //   }, 300);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [inputText]);

  // useEffect(() => {
  //   if (router.query.search !== inputText) {
  //     setInputText(router.query.search);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <TextField
      id="outlined-search"
      sx={{ mt: 3, mb: 1 }}
      variant="outlined"
      size="large"
      type="search"
      fullWidth
      label="Search"
      placeholder="e.g. Harry"
      value={inputText || ""}
      onChange={handleNewInputText}
      helperText={`${totalResults} Results`}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
