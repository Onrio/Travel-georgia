import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";
import { aboutCompany } from "@/dammyData";

const aboutDescription = () => {
  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["company-row"]}>
          {aboutCompany.map((info) => (
            <div key={info.name} className={style["company-block"]}>
              <div className={style["about-us-text"]}>
                <h3>{info.name}</h3>
                <p>{info.text}</p>
              </div>
              <div className={style["about-us-img"]}>
                <img
                  src={`/src/assets/about-us/${info.image}`}
                  alt="vineyard in georgia"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default aboutDescription;
