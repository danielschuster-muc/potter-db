import BookDetails from "../../../components/pages/books/[slug]/BookDetails";
import Meta from "../../../components/Meta";
import { getBooks, getBookBySlug, getChapters } from "../../../lib/load_books";

const fetchChapters = async ({ queryKey }) => {
  const searchQuery = queryKey[0];
  return await getChapters({
    searchQuery: searchQuery,
    perPage: 50,
  });
};

const Books = ({ data, links }) => {
  const { attributes } = data;

  return (
    <>
      <Meta title={attributes.title} description={attributes.summary} />
      <BookDetails
        attributes={attributes}
        apiLink={links?.self}
        fetchChapters={fetchChapters}
      />
    </>
  );
};

export async function getStaticPaths() {
  const fetchedBooks = await getBooks({ perPage: 30 });

  const booksSlugs = fetchedBooks?.data?.map((book) => book?.attributes?.slug);

  const paths = booksSlugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    fallback: "blocking",
    paths,
  };
}

export async function getStaticProps({ params }) {
  const book = await getBookBySlug(params.slug);
  const { data, links, hasError } = book;

  if (hasError || !data || !data.attributes || !links) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      links,
    },
  };
}

export default Books;
