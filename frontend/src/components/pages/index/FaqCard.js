import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { GitHub, QuestionMark, Search } from "@mui/icons-material";
import Link from "../../Link";

const faqData = [
  {
    icon: <QuestionMark color="primary" sx={{ fontSize: 72 }} />,
    question: "What is the Potter DB?",
    answer: (
      <Typography>
        The Harry Potter DB is an API with data from the Harry Potter Universe:
        Characters, Movies, Books, Spells and Potions.
      </Typography>
    ),
  },
  {
    icon: <Search color="primary" sx={{ fontSize: 72 }} />,
    question: "What can I do with it?",
    answer: (
      <Typography>
        You can either use the <Link href="https://api.potterdb.com/">API</Link>{" "}
        itself or use the{" "}
        <Link href="https://potterdb.com/characters/">Database</Link> to lookup
        things from Harry Potter. I also plan to create a detailed Documentation
        for the API.
      </Typography>
    ),
  },
  {
    icon: <GitHub color="primary" sx={{ fontSize: 72 }} />,
    question: "How can I help?",
    answer: (
      <Typography>
        The Potter DB is open source. This means you can{" "}
        <Link href="https://github.com/danielschuster-muc/potter-db">
          contribute
        </Link>{" "}
        to it by improving the data, report issues or writing code for the api.
      </Typography>
    ),
  },
];

const FaqCard = () => {
  return (
    <Card sx={{ mt: 5, p: 2, textAlign: "center", borderRadius: "10px" }}>
      <Grid container spacing={2} alignItems="stretch">
        {faqData.map((data, id) => {
          return (
            <Grid item lg={4} sm={6} xs={12} key={id}>
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "secondary",
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                }}
              >
                <CardMedia>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {data.icon}
                  </Box>
                </CardMedia>
                <CardHeader title={data.question} />
                <CardContent>{data.answer}</CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default FaqCard;
