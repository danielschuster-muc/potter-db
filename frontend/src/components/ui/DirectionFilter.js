import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";

const DirectionFilter = () => {
  const router = useRouter();

  const handleDirectionChange = (event) => {
    const direction = event.target.value;
    const { pathname, query } = router;
    query.direction = direction;
    router.push({ pathname, query });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="sort-direction-select-label">Direction</InputLabel>
      <Select
        labelId="sort-direction-select-label"
        id="sort-direction-select"
        value={router.query.direction || "asc"}
        label="Direction"
        onChange={handleDirectionChange}
      >
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DirectionFilter;
