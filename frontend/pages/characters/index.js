import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Meta from "../../components/Meta";

const testData = [
  {
    id: 1,
    attributes: { name: "Harry James Potter" },
  },
];

const Characters = ({ data, meta, errors }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const handlePaginationChange = (_event, page) => {
    setPage(page);
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page;
    router.push({ pathname: currentPath, query: currentQuery });
  };

  return (
    <>
      <Meta />
      <h1>Welcome to the Harry Potter Character List</h1>
      <p>Total characters: {meta.pagination.records}</p>
      <p>Current page: {meta.pagination.current}</p>
      <p>Next page: {meta.pagination.next}</p>
      <p>Last page: {meta.pagination.last}</p>
      <p>{data.length}</p>
      <ul>
        {data.map((c) => {
          return (
            <li key={c.id}>
              <p>{c.attributes.name}</p>
            </li>
          );
        })}
      </ul>
      <Pagination
        count={meta?.pagination.last}
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
};

Characters.getInitialProps = async ({ query }) => {
  const baseUrl = "http://localhost:3000";
  const page = query.page || 1;
  const res = await fetch(`${baseUrl}/v1/characters?page[number]=${page}`);
  const json = await res.json();
  const { data, meta, errors } = json;
  return { data, meta, errors };
};

export default Characters;
