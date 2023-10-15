import React from "react";

import Book from "@/types/Book";
import TableRow from "../ui/TableRow";

export default function BookDetailsBodyRight({ book }: { book: Book }) {
  const { author, dedication, pages, release_date, summary, title } = book.attributes;

  return (
    <div className="py-2">
      <table className="table-fixed">
        <tbody className="text-white text-left">
          {title && <TableRow label="Title" value={title} />}
          {author && <TableRow label="Author" value={author} />}
          {release_date && (
            <TableRow label="Release Date" value={new Date(release_date).toLocaleDateString()} />
          )}
          {pages && <TableRow label="Pages" value={pages.toString()} />}
          {dedication && <TableRow label="Dedication" value={dedication} />}
          {summary && <TableRow label="Summary" value={summary} />}
        </tbody>
      </table>
    </div>
  );
}
