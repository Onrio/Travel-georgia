interface CardTextProps {
  text: string;
}

const CardImage: React.FC<CardTextProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default CardImage;
