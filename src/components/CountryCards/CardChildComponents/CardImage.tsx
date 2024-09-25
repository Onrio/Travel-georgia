import styles from "../style.module.css";

interface CardImageProps {
  image: string;
  altText: string;
}

const CardImage: React.FC<CardImageProps> = ({ image, altText }) => {
  return (
    <div className={styles["card-image"]}>
      <img src={image} alt={altText} />
    </div>
  );
};

export default CardImage;
