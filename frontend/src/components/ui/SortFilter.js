import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

const SortFilter = ({}) => {
  const sortOptions = [
    "Name",
    "Gender",
    "Species",
    "Height",
    "Weight",
    "House",
    "Nationality",
  ];

  const router = useRouter();

  const handleSortChange = (event) => {
    const sort = event.target.value;
    const { pathname, query } = router;
    query.sort = sort;
    router.push({ pathname, query });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-filter-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-filter-select-label"
        id="sort-filter-select"
        value={router.query.sort || "name"}
        label="Sort by"
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortFilter;
