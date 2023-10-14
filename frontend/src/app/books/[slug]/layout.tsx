import React from "react";

import { simpleFetch } from "@/lib/utils";
import Book from "@/types/Book";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const rawBook = await simpleFetch(`https://api.potterdb.com/v1/books/${params.slug}`);

  if (!rawBook || !rawBook.data) {
    return {
      title: "Not Found | Potter DB",
      description: "Book not found.",
    };
  }

  const book = rawBook?.data as Book;
  const { title, summary } = book.attributes;

  return {
    title: `${title} | Potter DB`,
    description: summary,
  };
}

export async function generateStaticParams() {
  const fetchedBooks = await simpleFetch("https://api.potterdb.com/v1/books");

  const slugs = await fetchedBooks?.data?.map((book: Book) => book.attributes.slug);

  return slugs.map((slug: string) => ({ slug: slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
