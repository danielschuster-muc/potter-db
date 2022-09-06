import { Typography } from "@mui/material";
import Link from "../../lib/Link";

export const Crumb = ({ text, href, isLast = false }) => {
  if (isLast) {
    return <Typography color="text.primary">{text}</Typography>;
  }

  return <Link href={href}>{text}</Link>;
};
