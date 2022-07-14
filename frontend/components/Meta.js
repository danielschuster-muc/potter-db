import Head from "next/head";

const Meta = ({ title, description, url, image }) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
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
    "Harry Potter Database for information about characters, books, movies, spells, potions and much more!",
  url: process.env.SITE_URL || "https://potterdb.com",
  image: "",
};

export default Meta;
