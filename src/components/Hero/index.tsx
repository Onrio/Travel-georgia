import style from "./style.module.css";

const Hero: React.FC = () => {
  return (
    <section className={style["hero-section"]}>
      <div className={style["hero-section-thickness"]}>
        <div className={style["hero-section-content"]}>
          <h1>Explore the World, One Glass at a Time</h1>
          <p>
            Embark on a journey through the world’s most exquisite vineyards,
            savoring unique wines and unforgettable experiences. Discover the
            art, culture, and passion behind every bottle with our curated wine
            tours.
          </p>
          <button>Follow For More</button>
        </div>
      </div>
    </section>
  );
};
Hero.displayName = "Hero Component";

export default Hero;
