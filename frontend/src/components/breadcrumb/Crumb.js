import Link from "next/link";

import { Typography } from "@mui/material";

export const Crumb = ({ text, href, isLast = false }) => {
  if (isLast) {
    return <Typography color="text.primary">{text}</Typography>;
  }

  return <Link href={href}>{text}</Link>;
};
