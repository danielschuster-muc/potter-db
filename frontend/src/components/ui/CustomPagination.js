import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React, { useState } from "react";

const CustomPagination = ({ totalPages }) => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);

  const handlePaginationChange = (_event, newPage) => {
    setPage(newPage);
    const { pathname, query } = router;
    query.page = newPage;
    router.push({ pathname, query });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePaginationChange}
        size="large"
      />
    </Box>
  );
};

export default CustomPagination;
