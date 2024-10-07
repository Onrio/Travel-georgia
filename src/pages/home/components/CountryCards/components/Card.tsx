import { Link } from "react-router-dom";
import style from "../style.module.css";

interface CardProps {
  cardData: {
    name: string;
    image: string;
    capital: string;
    population: number;
    about: string;
    id: string;
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <Link to={`country-view/${cardData.id}`}>
      <div className={style["country-card"]} id={cardData.id}>
        <div className={style["card-image"]}>
          <img
            src={`/src/assets/vineyards/${cardData.image}`}
            alt={`vineyard in ${cardData.name}`}
          />
        </div>
        <div className={style["card-body"]}>
          <div className={style["card-info"]}>
            <h3>{cardData.name}</h3>
            <div className={style["info-row"]}>
              <span className={style["capital"]}>{cardData.capital}</span>
              <span>{cardData.population}</span>
            </div>
          </div>
          <p>{cardData.about}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
