import { Link } from "react-router-dom";
import style from "../style.module.css";
import like from "@/assets/like.png";

interface CardProps {
  cardData: {
    name: string;
    image: string;
    capital: string;
    population: number;
    about: string;
    id: string;
    like: number;
    isDeleted: boolean;
  };
  handleLikeClick: () => void;
  handleDelete: () => void;
  handleRestore: () => void;
}

const Card: React.FC<CardProps> = ({
  cardData,
  handleLikeClick,
  handleDelete,
  handleRestore,
}) => {
  const isDeleted = cardData.isDeleted;
  const cardClass = isDeleted
    ? `${style["country-card"]} ${style["deleted"]}`
    : style["country-card"];

  const handleLikeButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleLikeClick();
  };

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleDelete();
  };

  const handleRestoreButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    handleRestore();
  };

  return (
    <Link to={`country-view/${cardData.id}`} className={cardClass}>
      <div id={cardData.id}>
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
          <div className={style["like-row"]}>
            {isDeleted ? (
              <button
                className={style["restore-button"]}
                onClick={handleRestoreButtonClick}
              >
                Restore
              </button>
            ) : (
              <button
                className={style["delete-button"]}
                onClick={handleDeleteButtonClick}
              >
                Delete
              </button>
            )}
            <button
              onClick={handleLikeButtonClick}
              className={style["like-button"]}
            >
              <img src={like} alt="like" />
              <span>{cardData.like}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
