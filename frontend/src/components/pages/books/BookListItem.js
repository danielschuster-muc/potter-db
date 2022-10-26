import Image from "next/legacy/image";

import { faCalendar, faPen, faBook } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import Link from "../../Link";
import ListItemBox from "../../ui/ListItemBox";
import { getBookColorBySlug } from "../../../lib/utils";

const BookListItem = ({ book }) => {
  const { title, slug, release_date, author, pages, cover } = book.attributes;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: `3px solid ${getBookColorBySlug(slug)}`,
          justifyContent: "space-between",
        }}
      >
        <CardMedia>
          <Image
            as="image"
            src={cover || "/images/missing_book.svg"}
            alt={`Poster of ${title}`}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="scale-down"
            quality={30}
            loading="eager"
            priority
          />
        </CardMedia>
        <CardHeader title={title} />
        <CardContent>
          <ListItemBox value={release_date} icon={faCalendar} />
          <ListItemBox value={author} icon={faPen} />
          <ListItemBox value={pages} icon={faBook} />
        </CardContent>
        <CardActions>
          <Link href={`/books/${slug}`}>
            <Typography sx={{ ml: 1 }}>Detailed Book Information</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookListItem;
