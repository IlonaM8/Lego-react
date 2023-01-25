import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import service from "./services";
import { useEffect, useState } from "react";

const pageSize = 7;

export default function BasicPagination({ setProducts }) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        setProducts(response.data);
      });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      sx={{
        margin: "20px 0px",
      }}
    >
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        color="secondary"
        onChange={handlePageChange}
      />
    </Box>
  );
}
