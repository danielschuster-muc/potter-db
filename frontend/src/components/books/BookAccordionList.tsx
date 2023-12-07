import React from "react";

import { simpleFetch } from "@/lib/utils";
import Chapter from "@/types/Chapters";
import Accordion from "../ui/Accordion";

export default async function BookAccordionList({ slug }: { slug: string }) {
  const rawBookChapters = await simpleFetch(`https://api.potterdb.com/v1/books/${slug}/chapters`);

  if (!rawBookChapters || !rawBookChapters?.data) {
    return null;
  }

  const bookChapters = rawBookChapters.data as Chapter[];

  if (bookChapters.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <div className="mt-5 p-5 w-full md:w-2/3 border-2 border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-3 font-bold">Chapters</h2>
        {bookChapters.map((chapter) => {
          if (chapter.attributes.summary)
            return (
              <Accordion
                key={chapter.id}
                title={`${chapter.attributes.order}. ${chapter.attributes.title}`}
                content={chapter.attributes.summary}
              />
            );
          else
            return (
              <h3
                key={chapter.id}
                className="text-lg font-semibold">{`${chapter.attributes.order}. ${chapter.attributes.title}`}</h3>
            );
        })}
      </div>
    </div>
  );
}
