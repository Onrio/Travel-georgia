import { lazy } from "react";
import "@/style/index.module.css";
const Hero = lazy(() => import("@/pages/home/components/Hero/index"));
const CountryCards = lazy(
  () => import("@/pages/home/components/CountryCards/index")
);

const article = {
  title: "Explore the World, One Glass at a Time",
  text: "Embark on a journey through the worlds most exquisite vineyards savoring unique wines and unforgettable experiences. Discover the art culture and passion behind every bottle with our curated wine tours",
};

const Home = () => {
  return (
    <>
      <Hero {...article} />
      <CountryCards title="Discover Wine Destinations" />
    </>
  );
};

export default Home;
