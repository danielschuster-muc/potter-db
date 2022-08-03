import { TablePagination } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CustomTablePagination = ({ totalRecords }) => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(router.query.pageSize) || 25
  );

  const handlePageChange = (_event, newPage) => {
    newPage = newPage <= 0 ? 1 : newPage + 1;
    setPage(newPage);
    const { pathname, query } = router;
    query.page = newPage;
    router.push({ pathname, query });
  };

  const handleChangeRowsPerPage = (event) => {
    const newPageSize = +event.target.value;
    setRowsPerPage(newPageSize);
    const { pathname, query } = router;
    query.pageSize = newPageSize;
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
    />
  );
};

export default CustomTablePagination;
