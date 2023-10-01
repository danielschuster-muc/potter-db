"use client";

import useSWR from "swr";

export default function CharacterShow({ params }: { params: { slug: string } }) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.potterdb.com/v1/characters/${params.slug}`,
    fetcher,
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Character</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Failed to load</div>}
      <p>{data?.data?.attributes?.name}</p>
    </>
  );
}
