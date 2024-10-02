import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";

const aboutDescription: React.FC<{
  title: string;
  text: string;
  image: string;
}> = (props) => {
  const { title } = props;
  const { text } = props;
  const { image } = props;
  return (
    <section className={style["about-us-section"]}>
      <div className={mainStyle["container"]}>
        <div className={style["about-us"]}>
          <div className={style["about-us-text"]}>
            <h2 className={mainStyle["section-title"]}>{title}</h2>
            <p>{text}</p>
          </div>
          <div className={style["about-us-img"]}>
            <img
              src={`/src/assets/about-us/${image}`}
              alt="our commpany staff"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default aboutDescription;
