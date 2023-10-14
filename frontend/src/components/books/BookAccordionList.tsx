import { simpleFetch } from "@/lib/utils";
import Chapter from "@/types/Chapters";
import React from "react";

export default async function BookAccordionList({ slug }: { slug: string }) {
  const rawBookChapters = await simpleFetch(`https://api.potterdb.com/v1/books/${slug}/chapters`);

  if (!rawBookChapters || !rawBookChapters?.data) {
    return null;
  }

  const bookChapters = rawBookChapters.data as Chapter[];

  if (bookChapters.length === 0) {
    return null;
  }

  // TODO: Add Accordion component here once we have some chapter summaries
  // See: https://github.com/danielschuster-muc/potter-db/issues/741
  return (
    <div className="flex justify-center">
      <div className="mt-5 p-5 w-full md:w-2/3 border-2 border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-3 font-bold">Chapters</h2>
        <ul className="list-decimal list-inside">
          {bookChapters.map((chapter) => {
            return (
              <li key={chapter.id} className="text-lg">
                {chapter.attributes.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
