import style from "./style.module.css";

const Hero: React.FC<{ title: string; text: string }> = (props) => {
  const { title } = props;
  const { text } = props;
  return (
    <section className={style["hero-section"]}>
      <div className={style["hero-section-thickness"]}>
        <div className={style["hero-section-content"]}>
          <h1>{title}</h1>
          <p>{text}</p>
          <button>Follow For More</button>
        </div>
      </div>
    </section>
  );
};
Hero.displayName = "Hero Component";

export default Hero;
