import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const CustomBreadCrumb = () => {
  const router = useRouter();

  const titleize = (slug) => {
    let words = slug.split("_");

    return words
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
      })
      .join(" ");
  };

  const breadcrumbs = useMemo(() => {
    // remove query and split each path by '/'
    const routes = router.asPath
      .split("?")[0]
      .split("/")
      .filter((v) => v.length > 0);

    const crumbs = routes.map((subpath, idx) => {
      const href = "/" + routes.slice(0, idx + 1).join("/");
      return { href, text: titleize(subpath) };
    });

    return [{ href: "/", text: "Home" }, ...crumbs];
  }, [router.asPath]);

  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNext />}>
        {breadcrumbs.map((crumb, index) => (
          <Crumb
            {...crumb}
            key={index}
            isLast={index === breadcrumbs.length - 1}
          />
        ))}
      </Breadcrumbs>
    </Box>
  );
};

const Crumb = ({ text, href, isLast = false }) => {
  if (isLast) {
    return <Typography color="text.primary">{text}</Typography>;
  }

  return (
    <Link underline="hover" color="inherit" href={href}>
      {text}
    </Link>
  );
};
