import Link from "next/link";
import React from "react";

export default function LinkButton({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-secondary opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded-full text-center">
      {title}
    </Link>
  );
}
