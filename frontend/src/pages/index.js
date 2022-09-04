import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Meta from "../components/Meta";

const HomePage = () => {
  return (
    <>
      <Meta title="Landing Page" />
      <Card sx={{ position: "relative", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="Potter DB Banner"
          src="/images/hogwarts.jpg"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            background:
              "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
            color: "white",
            width: "100%",
            height: "100%",
          }}
        >
          <CardContent
            sx={{
              position: "absolute",
              left: "1rem",
            }}
          >
            <Typography variant="h4">Welcome to the Harry Potter DB</Typography>
            <Typography>
              A Database with Information about Characters, Movies, Books,
              Spells, Potions and much more.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Card sx={{ position: "relative", borderRadius: "10px", mt: 5 }}>
        <CardContent>
          Proident exercitation velit Lorem exercitation occaecat ipsum fugiat.
          Enim reprehenderit ipsum do laborum excepteur dolor duis non ipsum
          magna sit aliquip magna elit. Aliquip tempor amet ut id non do non qui
          officia nisi Lorem. Lorem anim voluptate minim id laboris in occaecat
          pariatur sint deserunt laborum ex id ea. Culpa officia aliquip
          deserunt dolore laborum est amet nulla ad esse nisi ipsum. Occaecat
          magna in dolor veniam do elit incididunt laborum culpa nisi labore
          cillum. Ipsum laborum mollit minim ullamco Lorem ad ex velit ipsum in
          occaecat. Non est proident anim duis aliquip ad excepteur cillum
          aliquip id magna ea. Nisi exercitation sit aliqua non culpa commodo
          ullamco deserunt ullamco est culpa voluptate. Ullamco in occaecat ea
          culpa duis consequat dolore aliqua culpa. Laboris voluptate eu ut et.
          Duis veniam laboris amet aliqua voluptate aliqua nostrud laborum velit
          officia Lorem sunt nisi aliquip. Labore proident ullamco cillum
          commodo deserunt mollit velit ad. Duis aute ullamco in ullamco elit
          incididunt non qui commodo officia consequat quis in voluptate.
          Cupidatat et amet commodo et amet ullamco cillum commodo exercitation
          et mollit tempor ex deserunt. Duis officia proident Lorem aliqua
          ullamco ut cillum reprehenderit aliqua amet. Occaecat esse consectetur
          adipisicing exercitation est nostrud dolor. Aute et aliquip tempor
          cupidatat labore in nisi duis veniam ex laboris. Id sit excepteur
          labore ullamco Lorem voluptate aute aliqua ut ad quis culpa nisi. Et
          sunt consequat labore laboris cupidatat exercitation Lorem
          reprehenderit laboris. Pariatur excepteur do ad officia ex. Velit
          ipsum consequat occaecat adipisicing irure excepteur dolor cillum nisi
          occaecat et ut pariatur laborum. Ipsum velit eiusmod incididunt
          reprehenderit esse laboris qui occaecat amet exercitation minim. Quis
          labore enim reprehenderit minim nisi deserunt qui veniam ipsum mollit.
          Ipsum fugiat ad laborum id magna est aute veniam do eu consequat culpa
          eu in. Irure veniam incididunt magna tempor excepteur reprehenderit.
          Sunt duis pariatur pariatur cupidatat commodo consectetur dolore
          eiusmod reprehenderit mollit cillum. Culpa sunt incididunt ad mollit
          dolore sint eiusmod ullamco sit sunt. Labore fugiat laborum voluptate
          adipisicing ullamco ex cillum ullamco duis cillum ex aliquip. Do Lorem
          veniam in in ex commodo cupidatat ea esse nisi laborum cupidatat.
          Occaecat eiusmod quis ut aute. Labore laborum tempor enim in magna ut
          proident occaecat minim eiusmod ipsum. Incididunt aliquip exercitation
          eiusmod aliqua excepteur tempor qui Lorem laborum et. Ad cillum duis
          tempor minim tempor non elit ipsum eu anim minim veniam in id. Sunt
          amet quis cillum ut ullamco ipsum et eiusmod Lorem quis sint. Elit
          consequat est culpa velit nisi. Lorem et occaecat aliquip ipsum
          deserunt nisi do. Non nulla reprehenderit labore enim sunt culpa quis
          anim aliquip. Adipisicing sint cupidatat velit deserunt ut irure
          aliqua veniam. Ad cillum culpa mollit nisi officia excepteur
          consectetur. Duis quis amet amet do pariatur ut do proident do
          proident. Elit ea minim proident elit nulla. Elit anim eiusmod sint
          cillum magna qui et. Incididunt in voluptate laborum sit fugiat est
          qui laboris irure adipisicing minim in elit ea. In aliqua id sit do
          pariatur exercitation dolor commodo. Ea do amet tempor elit
          consectetur ea aliqua nostrud. Reprehenderit in sunt mollit
          reprehenderit voluptate non. Nisi cillum occaecat incididunt cillum
          proident adipisicing velit duis pariatur. Reprehenderit reprehenderit
          fugiat ut duis sunt et quis eiusmod qui. Fugiat ad sint aute voluptate
          pariatur labore sint dolor ut sit amet aliqua exercitation. Magna
          irure deserunt labore est commodo velit velit eu consectetur qui ut
          nostrud. Nulla est do sunt reprehenderit mollit fugiat non consectetur
          amet sunt adipisicing sit ad. Amet sit cupidatat dolor commodo
          exercitation eu aute quis.
        </CardContent>
      </Card>
    </>
  );
};

export default HomePage;
