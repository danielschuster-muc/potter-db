import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Potions",
  description: "Search for your favorite potions from the Harry Potter universe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
