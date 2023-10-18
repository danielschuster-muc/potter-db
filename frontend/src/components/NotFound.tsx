import Link from "next/link";
import React from "react";

import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
      <h2 className="mb-4">
        Have you seen this page? Approach with extreme caution! Do not attempt to use magic against
        this site!
      </h2>
      <Link
        href="/"
        className="flex items-center text-lg text-white opacity-90 hover:opacity-100 mr-2 transition animate-pulse">
        <FiArrowLeft className="mr-2" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
