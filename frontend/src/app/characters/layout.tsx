import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Characters",
  description: "Search for your favorite characters from the Harry Potter universe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
