import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import "./../styles/globals.css";
import NProgressProvider from "@/components/NProgressProvider";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

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
        <NProgressProvider>
          <div className="flex flex-col min-h-screen mx-6">
            <Navbar />
            <div className="flex-1 mb-16 mt-8">{children}</div>
            <Footer />
            <ScrollToTopButton />
          </div>
        </NProgressProvider>
      </body>
    </html>
  );
}
