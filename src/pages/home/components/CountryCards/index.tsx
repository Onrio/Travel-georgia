import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import Card from "./components/Card";
import { countries } from "@/dammyData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CountryCards: React.FC<{ title: string }> = (props) => {
  const { title } = props;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className={mainStyle["container"]}>
      <h2 className={mainStyle["section-title"]}>{title}</h2>
      <div className={style["country-card-row"]}>
        <Carousel responsive={responsive} draggable={false}>
          {countries.map((country) => (
            <Card key={country.id} cardData={country} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
