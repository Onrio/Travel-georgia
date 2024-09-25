import style from "../style.module.css";

interface CardImageProps {
  name: string;
  capital: string;
  population: number;
}

const CardImage: React.FC<CardImageProps> = ({ name, capital, population }) => {
  return (
    <div className={style["card-info"]}>
      <h3>{name}</h3>
      <div className={style["info-row"]}>
        <span className={style["capital"]}>{capital}</span>
        <span>{population}</span>
      </div>
    </div>
  );
};

export default CardImage;
