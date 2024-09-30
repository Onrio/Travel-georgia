import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import Card from "./components/Card";
import { countries } from "@/dammyData";

const CountryCards: React.FC<{ title: string }> = (props) => {
  const { title } = props;

  return (
    <section className={mainStyle["container"]}>
      <h2 className={mainStyle["section-title"]}>{title}</h2>
      <div className={style["country-card-row"]}>
        {countries.map((country) => (
          <Card key={country.name} cardData={country} />
        ))}
      </div>
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
