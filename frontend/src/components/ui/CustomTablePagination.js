import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { TablePagination } from "@mui/material";

const CustomTablePagination = ({ totalRecords }) => {
  const router = useRouter();

  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const [rowsPerPage, setRowsPerPage] = useState(
    parseInt(router.query.perPage) || 15
  );

  useEffect(() => {
    const { pathname, query } = router;
    query.page = page;
    router.replace({ pathname, query });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const { pathname, query } = router;
    query.perPage = rowsPerPage;
    router.replace({ pathname, query });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowsPerPage]);

  const handlePageChange = (_event, newPage) => {
    newPage = newPage <= 0 ? 1 : newPage + 1;
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const perPage = +event.target.value;
    setRowsPerPage(perPage);
    setPage(1);
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
