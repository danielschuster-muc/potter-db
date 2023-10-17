import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "Search for your favorite movies from the Harry Potter universe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
