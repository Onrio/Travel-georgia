import "@/style/index.module.css";
import Hero from "@/pages/home/components/Hero/index";
import CountryCards from "../../components/CountryCards";

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
