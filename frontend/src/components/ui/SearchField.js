import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchField = ({ totalResults = 0, handleChangeSearch }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const { pathname, query } = router;
      query.q = searchQuery;
      router.push({ pathname, query });
      handleChangeSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setSearchQuery(q);
  }, []);

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
      value={searchQuery || ""}
      onChange={(event) => setSearchQuery(event.target.value)}
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
