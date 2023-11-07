import React from "react";

import Movie from "@/types/Movie";
import TableRow from "../ui/TableRow";

export default function MovieDetailsBodyRight({ movie }: { movie: Movie }) {
  const { box_office, budget, rating, release_date, summary, title } = movie.attributes;

  return (
    <div className="py-2">
      <table className="table-fixed">
        <tbody className="text-white text-left">
          {title && <TableRow label="Title" value={title} />}
          {release_date && (
            <TableRow label="Release Date" value={new Date(release_date).toLocaleDateString()} />
          )}
          {box_office && <TableRow label="Box Office" value={box_office} />}
          {budget && <TableRow label="Budget" value={budget} />}
          {rating && <TableRow label="Rating" value={rating} />}
          {summary && <TableRow label="Summary" value={summary} />}
        </tbody>
      </table>
    </div>
  );
}
