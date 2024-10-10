import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import Card from "./components/Card";
import { countries } from "@/dammyData";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const CountryCards: React.FC<{ title: string }> = (props) => {
  const { title } = props;


  const [countryData, setCountryData] = useState<
    {
      name: string;
      population: number;
      capital: string;
      about: string;
      image: string;
      id: string;
      like: number;
    }[]
  >(countries);


  const handleSortByLikes = () => {
    const sortedCountries = [...countryData].sort((a, b) => b.like - a.like);
    setCountryData(sortedCountries);
  };

  return (
    <section className={mainStyle["container"]}>
      <div className={style["country-card-header"]}>
        <h2 className={mainStyle["section-title"]}>{title}</h2>
        <button onClick={handleSortByLikes}>Sort by like</button>
      </div>
      <div className={style["country-card-row"]}>
        {countryData.map((country) => (
          <Card key={country.id} cardData={country} />
        ))}
      </div>
    </section>
  );
};

CountryCards.displayName = "Country Card Component";

export default CountryCards;
