import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ListItemBox = ({ value, icon }) => {
  return (
    value && (
      <Box display="flex">
        <FontAwesomeIcon icon={icon} />
        <Typography sx={{ ml: 1 }} noWrap>
          {value}
        </Typography>
      </Box>
    )
  );
};

export default ListItemBox;
