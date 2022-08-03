import {
  FormControl,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import Meta from "../../components/Meta";
import SearchField from "../../components/ui/SearchField";
import { getCharacters } from "../../lib/load_characters";
import SortFilter from "../../components/ui/SortFilter";
import DirectionFilter from "../../components/ui/DirectionFilter";
import CustomTablePagination from "../../components/ui/CustomTablePagination";
import Link from "next/link";
import { Box } from "@mui/system";
import { visuallyHidden } from "@mui/utils";
import { useState } from "react";
import { useRouter } from "next/router";

const headCells = [
  "Name",
  "Species",
  "Gender",
  "Nationality",
  "House",
  "Height",
  "Weight",
];

const Characters = ({ characters }) => {
  const router = useRouter();
  const { data, meta } = characters;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(headCells[0].toLowerCase());

  const metaDescription = `List of all Harry Potter characters - ${
    meta ? `Total: ${meta.pagination.records}` : ""
  }`;

  const handleRequestSort = (property) => (_event) => {
    const isAsc = orderBy === property && order === "asc";

    const { pathname, query } = router;
    query.direction = isAsc ? "desc" : "asc";
    setOrder(isAsc ? "desc" : "asc");
    query.sort = property;
    setOrderBy(property);
    router.push({ pathname, query });
  };

  return (
    <>
      <Meta title="Characters" description={metaDescription} />
      <Typography variant="h3">
        Welcome to the Harry Potter Character List
      </Typography>
      <SearchField totalResults={meta?.pagination.records} />

      {data && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => {
                  const id = headCell.toLowerCase();
                  return (
                    <TableCell
                      key={id}
                      sortDirection={orderBy === id ? order : false}
                    >
                      <TableSortLabel
                        align="right"
                        active={orderBy === id}
                        direction={orderBy === id ? order : "asc"}
                        onClick={handleRequestSort(id)}
                      >
                        {headCell}
                        {orderBy === id ? (
                          <Box component="span" sx={visuallyHidden}>
                            {order === "desc"
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
              {data.map((character) => (
                <TableRow
                  key={character.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link href={`/characters/${character.attributes.slug}`}>
                      {character.attributes.name}
                    </Link>
                  </TableCell>
                  <TableCell>{character.attributes.species}</TableCell>
                  <TableCell>{character.attributes.gender}</TableCell>
                  <TableCell>{character.attributes.nationality}</TableCell>
                  <TableCell>{character.attributes.house}</TableCell>
                  <TableCell>{character.attributes.height}</TableCell>
                  <TableCell>{character.attributes.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <CustomTablePagination
                  totalRecords={meta?.pagination.records}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}

      {!data && <p>No characters available!</p>}
    </>
  );
};

export async function getServerSideProps({ query }) {
  const characters = await getCharacters(query);

  return {
    props: {
      characters,
    },
  };
}

export default Characters;
