import { useParams } from "react-router-dom";
import { countries } from "@/dammyData";
import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";

const CountryArticle = () => {
  const { id } = useParams();

  const articleData = countries.find((country) => country.id === id);

  if (!articleData) {
    return <div>Article not found :/</div>;
  }

  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["country-view-row"]}>
          <div className={style["country-view-info"]}>
            <h2>{articleData.name.ka}</h2>
            <p>{articleData.about.ka}</p>
          </div>
          <div className={style["country-view-image"]}>
            <img
              src={`/src/assets/vineyards/${articleData.image}`}
              alt={`Vineyard in ${articleData.name.en}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryArticle;
