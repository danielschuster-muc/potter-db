import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Search for your favorite books from the Harry Potter universe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
