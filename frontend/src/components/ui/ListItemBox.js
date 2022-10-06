import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Stack, Typography } from "@mui/material";

const ListItemBox = ({ value, icon }) => {
  return (
    value && (
      <Stack direction="row" alignItems="center" gap={1}>
        <FontAwesomeIcon icon={icon} />
        <Typography noWrap>{value}</Typography>
      </Stack>
    )
  );
};

export default ListItemBox;
