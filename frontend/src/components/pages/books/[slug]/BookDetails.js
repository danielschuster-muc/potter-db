import { Box, Card, Grid, Typography } from "@mui/material";

import AccordionList from "../../../ui/AccordionList";
import DetailedInfoCard from "../../../ui/DetailedInfoCard";

import { useQuery } from "@tanstack/react-query";

const BookDetails = ({ attributes, apiLink, fetchChapters }) => {
  const {
    title,
    slug,
    summary,
    release_date,
    pages,
    dedication,
    author,
    cover,
    wiki,
  } = attributes;

  const { data: rawChapters, isSuccess } = useQuery([slug], fetchChapters, {
    retry: 10,
  });

  const informationTable = [
    {
      name: "title",
      value: title,
    },
    {
      name: "author",
      value: author,
    },
    {
      name: "release date",
      value: new Date(release_date).toLocaleDateString(),
    },
    {
      name: "pages",
      value: pages,
    },
    {
      name: "dedication",
      value: dedication,
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <DetailedInfoCard
            title={title}
            slug={slug}
            image={cover || "/images/missing_book.svg"}
            tableData={informationTable}
            links={[
              { title: "Wiki", value: wiki },
              { title: "API", value: apiLink },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <Box sx={{ my: 1, mx: 2 }}>
              <Typography variant="h4">Summary</Typography>
              <Typography>{summary}</Typography>
            </Box>
          </Card>
          {isSuccess && (
            <AccordionList
              accordions={rawChapters?.data?.map(({ attributes }) => {
                return { name: attributes?.title, value: attributes?.summary };
              })}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default BookDetails;
