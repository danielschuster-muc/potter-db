import { Pagination } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Meta from "../../components/Meta";
import { getCharacters } from "../../lib/characters";

const Characters = ({ characters }) => {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const { data, meta, errors } = characters;

  const handlePaginationChange = (_event, page) => {
    setPage(page);
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page;
    // currentQuery.filter["name_start"] = "Hedwig";
    router.push({ pathname: currentPath, query: currentQuery });
  };

  const stats = meta && (
    <>
      <p>Total characters: {meta.pagination.records}</p>
      <p>Current page: {meta.pagination.current}</p>
      <p>Next page: {meta.pagination.next}</p>
      <p>Last page: {meta.pagination.last}</p>
      {data && <p>Characters on current page: {data.length}</p>}
    </>
  );

  // if (errors) {
  //   console.log(errors);
  // }

  return (
    <>
      <Meta />
      <h1>Welcome to the Harry Potter Character List</h1>
      {stats}

      {data && (
        <ul>
          {data.map((c) => {
            return (
              <li key={c.id}>
                <Link href={`/characters/${c.attributes.slug}`}>
                  {c.attributes.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      {!data && <p>No characters available!</p>}

      <Pagination
        count={meta?.pagination.last}
        page={page}
        onChange={handlePaginationChange}
      />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const page = query.page;
  const characters = await getCharacters(page);

  return {
    props: {
      characters,
    },
  };
}

export default Characters;
