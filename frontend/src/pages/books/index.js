import { dehydrate, QueryClient } from "@tanstack/react-query";

import Meta from "../../components/Meta";
import BookList from "../../components/pages/books/BookList";
import { getBooks } from "../../lib/load_books";

const fetchBooks = async ({ pageParam = 1, queryKey }) => {
  const searchQuery = queryKey[1];
  return await getBooks({
    page: pageParam,
    searchQuery: searchQuery,
  });
};

const Books = () => {
  return (
    <>
      <Meta title={"Books"} description="List of all Harry Potter books" />
      <BookList fetchBooks={fetchBooks} />
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["books"], fetchBooks, { retry: 10 });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Books;
