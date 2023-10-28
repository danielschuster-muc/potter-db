import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Spells",
  description: "Search for your favorite spells from the Harry Potter universe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
