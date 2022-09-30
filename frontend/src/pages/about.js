import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "../components/Link";
import Meta from "../components/Meta";
import { getApiUrl, getGithubUrl } from "../lib/utils";

const About = () => {
  const apiUrl = getApiUrl();
  const tools = [
    {
      name: "Ruby on Rails",
      description: "The API is built with this Framework",
      link: "https://ruby-lang.org",
    },
    {
      name: "Next.js",
      description: "This Website uses Next.js",
      link: "https://nextjs.org",
    },
    {
      name: "PostgreSQL",
      description: "The data is saved in a PostgreSQL database",
      link: "https://postgresql.org",
    },
  ];

  return (
    <>
      <Meta
        title="About Potter DB"
        description="The Harry Potter DB is an API with data from the Harry Potter Universe: Characters, Movies, Books, Spells and Potions."
      />
      <Typography variant="h3">About Potter DB</Typography>
      <Typography>
        The Harry Potter DB is an API with data from the Harry Potter Universe:
        Characters, Movies, Books, Spells and Potions.
      </Typography>
      <Typography>
        You can search up data with the{" "}
        <Link href="/characters">Character Search</Link>. Or you use our{" "}
        <Link href={apiUrl}>REST</Link> or{" "}
        <Link href={`${apiUrl}/graphql`}>GraphQL</Link> API.
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h4">Tech Stack</Typography>
        <List>
          {tools.map((tool) => {
            return (
              <ListItem disablePadding key={tool.name}>
                <Typography>
                  <Link href={tool.link}>{tool.name}</Link> - {tool.description}
                </Typography>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h4">Contributing</Typography>
        <Typography>
          There are many ways you can contribute to the Potter DB.
        </Typography>
        <Typography>
          If you find any bugs or issues with the Potter DB, you can create a{" "}
          <Link href={`${getGithubUrl()}/issues/new/choose`}>Bug Report</Link>{" "}
          on the GitHub.
        </Typography>
        <Typography>
          You can also make a{" "}
          <Link href={`${getGithubUrl()}/issues/new/choose`}>
            Feature Request
          </Link>{" "}
          if you have any ideas for the Potter DB.
        </Typography>
        <Typography>
          Another option is to contribute directly by improving data, work on
          the Frontend or Backend of the Potter DB. Checkout our{" "}
          <Link href={`${getGithubUrl()}/CONTRIBUTING.md`}>
            Contribution Guidelines
          </Link>{" "}
          for more information.
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h4">Copyright</Typography>
        <Typography>
          Potter DB is an unofficial Harry Potter Database. Harry Potter and all
          associated names are copyright J.K. Rowling and Warner Bros.
          Entertainment Inc.
        </Typography>
        <Typography>
          All data has been freely collected from open sources such as{" "}
          <Link href="https://harrypotter.fandom.com/">Harry Potter Wiki</Link>.
        </Typography>
        <Typography>This project is licensed under the MIT License.</Typography>
      </Box>
    </>
  );
};

export default About;
