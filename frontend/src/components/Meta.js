import Head from "next/head";
import { getSiteUrl } from "../lib/utils";

const Meta = ({ title, description, url, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{`Potter DB - ${title}`}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Potter DB",
  description:
    "Harry Potter Database for information about characters, books, movies, spells, potions and much more! - Data based on the Harry Potter Wiki",
  url: getSiteUrl(),
  image: "",
};

export default Meta;
