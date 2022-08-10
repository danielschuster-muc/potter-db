import React, { useState } from "react";
import { useRouter } from "next/router";
import { TablePagination } from "@mui/material";

const CustomTablePagination = ({ totalRecords }) => {
  const router = useRouter();

  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(router.query.perPage) || 15
  );

  const handlePageChange = (_event, newPage) => {
    const { pathname, query } = router;
    newPage = newPage <= 0 ? 1 : newPage + 1;
    query.page = newPage;
    setPage(newPage);
    router.push({ pathname, query });
  };

  const handleChangeRowsPerPage = (event) => {
    const { pathname, query } = router;
    const perPage = +event.target.value;
    query.page = 1;
    query.perPage = perPage;
    setRowsPerPage(perPage);
    setPage(1);
    router.push({ pathname, query });
  };

  return (
    <TablePagination
      rowsPerPageOptions={[10, 15, 25]}
      rowsPerPage={rowsPerPage}
      count={totalRecords}
      page={page - 1}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleChangeRowsPerPage}
      showFirstButton={true}
      showLastButton={true}
    />
  );
};

export default CustomTablePagination;
