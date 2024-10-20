import "@/style/index.module.css";
import Hero from "@/pages/home/components/Hero/index";
import CountryCards from "../../components/CountryCards";
import { useLanguage } from "@/App";

// Define translations for article and country cards title
const translations = {
  en: {
    article: {
      title: "Explore the World, One Glass at a Time",
      text: "Embark on a journey through the world's most exquisite vineyards, savoring unique wines and unforgettable experiences. Discover the art, culture, and hodtory behind every bottle with our curated wine tours.",
    },
    countryCardsTitle: "Discover Wine Destinations",
  },
  ka: {
    article: {
      title: "აღმოაჩინეთ მსოფლიო ერთი ჭიქით",
      text: "გაემგზავრეთ გამორჩეული ვენახების სამყაროში, დააგემოვნეთ უნიკალური ღვინოები და დაუვიწყარი შთაბეჭდილებები. აღმოაჩინეთ ხელოვნება, კულტურა და ისტორია ყოველი ბოთლის უკან ჩვენი ღვინის ტურებით.",
    },
    countryCardsTitle: "აღმოაჩინეთ ღვინის გზა",
  },
};

const Home = () => {
  const { language } = useLanguage();

  const articleContent = translations[language].article;
  const countryCardsTitle = translations[language].countryCardsTitle;

  return (
    <>
      <Hero {...articleContent} />

      <CountryCards title={countryCardsTitle} />
    </>
  );
};

export default Home;
