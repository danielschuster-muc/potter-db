import React, { useState } from "react";

import { useRouter } from "next/router";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { visuallyHidden } from "@mui/utils";

import CustomTablePagination from "./CustomTablePagination";
import Link from "../../lib/Link";

const DataListTable = ({ characters, headCells, totalRecords }) => {
  const router = useRouter();

  const [direction, setDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState(headCells[0].toLowerCase());

  const handleRequestSort = (newOrderBy) => (_event) => {
    const isAsc = orderBy === newOrderBy && direction === "asc";
    const newDirection = isAsc ? "desc" : "asc";
    const { pathname, query } = router;

    query.orderBy = newOrderBy;
    query.direction = newDirection;
    setOrderBy(newOrderBy);
    setDirection(newDirection);
    router.push({ pathname, query });
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => {
              const id = headCell.toLowerCase();
              return (
                <TableCell
                  key={id}
                  sortDirection={orderBy === id ? direction : false}
                >
                  <TableSortLabel
                    align="right"
                    active={orderBy === id}
                    direction={orderBy === id ? direction : "asc"}
                    onClick={handleRequestSort(id)}
                  >
                    {headCell}
                    {orderBy === id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {direction === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => {
            const { attributes } = character;
            return (
              <TableRow
                key={character.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  <Link href={`/characters/${attributes.slug}`}>
                    {attributes.name}
                  </Link>
                </TableCell>
                <TableCell>{attributes.species}</TableCell>
                <TableCell>{attributes.gender}</TableCell>
                <TableCell>{attributes.nationality}</TableCell>
                <TableCell>{attributes.house}</TableCell>
                <TableCell>{attributes.height}</TableCell>
                <TableCell>{attributes.weight}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <CustomTablePagination totalRecords={totalRecords} />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default DataListTable;
