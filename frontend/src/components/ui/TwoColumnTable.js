import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const TwoColumnTable = ({ title, tableData, id }) => {
  return (
    <TableContainer>
      <Table aria-label={`Information about ${title}`}>
        <TableBody>
          {tableData
            .filter((row) => row.value)
            .map((row) => {
              return (
                <TableRow key={`${row.name}_${id}`}>
                  <TableCell
                    sx={{
                      textTransform: "uppercase",
                      color: "text.secondary",
                      borderBottom: "none",
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name.replace("_", " ")}
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none" }}>
                    {row.value}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TwoColumnTable;
