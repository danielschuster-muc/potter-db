import Link from "next/link";
import React from "react";

export default function HoverLink({ title, href }: { title: string; href: string }) {
  return (
    <Link className="text-gray-300 hover:text-white underline" href={href}>
      {title}
    </Link>
  );
}
