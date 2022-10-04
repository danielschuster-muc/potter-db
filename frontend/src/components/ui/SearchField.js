import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchField = ({ totalResults = 0, handleChangeSearch, placeholder }) => {
  const router = useRouter();
  const [newSearchQuery, setNewSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const { pathname, query } = router;
      query.q = newSearchQuery;
      router.push({ pathname, query });
      handleChangeSearch(newSearchQuery);
    }, 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchQuery]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setNewSearchQuery(q);
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
      placeholder={placeholder}
      value={newSearchQuery || ""}
      onChange={(event) => setNewSearchQuery(event.target.value)}
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
