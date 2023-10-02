import React from "react";

import type { Metadata } from "next";

import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Potter DB",
    default: "Potter DB",
  },
  description:
    "Harry Potter Database for information about characters, books, movies, spells, potions and much more!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen mx-6">
          <Navbar />
          <div className="flex-1 mb-16 mt-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
