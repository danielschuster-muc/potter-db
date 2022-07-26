import { useMemo } from "react";
import { useRouter } from "next/router";

import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";
import { Box } from "@mui/system";

import { Crumb } from "./Crumb";

export const CustomBreadCrumb = () => {
  const router = useRouter();

  const titleize = (slug) => {
    return slug
      .split("_")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      )
      .join(" ");
  };

  const breadcrumbs = useMemo(() => {
    const routes = router.asPath
      .split("?")[0]
      .split("/")
      .filter((v) => v.length > 0);

    const crumbs = routes.map((subpath, i) => {
      const href = "/" + routes.slice(0, i + 1).join("/");
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
