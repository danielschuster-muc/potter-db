import Image from "next/image";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
} from "@mui/material";

import Link from "../Link";
import TwoColumnTable from "./TwoColumnTable";

const DetailInfoCard = ({
  color = "#bebebe",
  title,
  subTitle = "",
  slug,
  image,
  tableData,
  links = {},
}) => {
  return (
    <Card sx={{ border: `3px solid ${color}` }}>
      <CardHeader sx={{ ml: 1 }} title={title} subheader={subTitle} />
      <CardMedia>
        <Image
          as="image"
          src={image || "/images/missing_image.jpg"}
          alt={`Picture of ${title}`}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="scale-down"
          loading="eager"
          priority
        />
      </CardMedia>
      <CardContent>
        <TwoColumnTable name={title} tableData={tableData} id={slug} />
      </CardContent>
      <CardActions sx={{ ml: 1 }}>
        {links.map((link) => {
          return (
            <Link key={link.title} href={link.value}>
              <Button size="small">{link.title}</Button>
            </Link>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default DetailInfoCard;
