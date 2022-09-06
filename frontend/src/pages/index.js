import Meta from "../components/Meta";
import LandingPageBanner from "../components/pages/index/LandingPageBanner";
import FaqCard from "../components/pages/index/FaqCard";

const HomePage = () => {
  return (
    <>
      <Meta title="Landing Page" />
      <LandingPageBanner />
      <FaqCard />
    </>
  );
};

export default HomePage;
