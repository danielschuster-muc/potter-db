import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchField = ({ totalResults = 0 }) => {
  const router = useRouter();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const { pathname, query } = router;
      query.search = inputText;
      router.push({ pathname, query });
    }, 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  useEffect(() => {
    setInputText(router.query.search);
  }, [router.query.search]);

  return (
    <TextField
      id="outlined-search"
      sx={{ mt: 3, mb: 1 }}
      variant="outlined"
      size="large"
      type="search"
      fullWidth
      label="Search"
      placeholder="Search Characters"
      value={inputText || ""}
      onChange={(e) => setInputText(e.target.value)}
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
