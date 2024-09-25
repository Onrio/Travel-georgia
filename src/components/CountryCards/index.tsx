import style from "./style.module.css";
import mainStyle from "../../style/index.module.css";
import CardImage from "./CardChildComponents/CardImage";
import CardTitle from "./CardChildComponents/CardTitle";
import CardText from "./CardChildComponents/CardText";

const country = [
  {
    name: "Italy",
    population: 58.94,
    capital: "Rome",
    about: `Italy's wine culture is a rich tapestry of history, tradition, and
              passion. With diverse regions, indigenous grapes, and time-honored
              winemaking methods, it offers a unique and unforgettable
              experience.`,
    image: "vineyards-italy.jpg",
  },
  {
    name: "France",
    population: 67.97,
    capital: "Paris",
    about: `France's wine culture is renowned for its rich history, 
              diverse regions, and world-class vineyards. From Bordeaux to Burgundy, 
              it celebrates tradition, craftsmanship, and the art of winemaking.`,
    image: "vineyards-France.jpg",
  },
  {
    name: "Georgia",
    population: 3.713,
    capital: "Tbilisi",
    about: `Georgia, the birthplace of wine, boasts an 8,000-year-old tradition 
            with unique qvevri winemaking. Its rich culture blends ancient techniques, 
            diverse grape varieties, and vibrant wine festivals.`,
    image: "vineyards-georgia.jpg",
  },
];

const CountryCards: React.FC = () => {
  return (
    <section className={mainStyle["container"]}>
      <h2 className={style["section-title"]}>Discover Wine Destinations</h2>
      <div className={style["country-card-row"]}>
        {country.map((country) => (
          <div key={country.name} className={style["country-card"]}>
            <CardImage
              image={`/src/assets/vineyards/${country.image}`}
              altText={`vineyard in ${country.name}`}
            />
            <div className={style["card-body"]}>
              <CardTitle
                name={country.name}
                capital={country.capital}
                population={country.population}
              />
              <CardText text={country.about} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
