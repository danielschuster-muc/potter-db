import React from "react";
import { deslugify } from "@/lib/utils";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const deslugified = deslugify(params.slug);

  return {
    title: deslugified + " | Potter DB",
    description: `Character ${deslugified} from the Harry Potter universe.`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
