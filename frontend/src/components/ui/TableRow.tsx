import React from "react";

export default function TableRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <th scope="row" className="font-bold px-4 py-2 align-top">
        {label}
      </th>
      <td className="px-4 py-2 align-top">{value}</td>
    </tr>
  );
}
