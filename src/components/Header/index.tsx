import logo from "@/assets/logo/logo.png";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";
import { translateHeader } from "@/dammyData";
import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";
import { useLanguage } from "@/App";

const Header: React.FC = () => {
  const { language, switchLanguage } = useLanguage();
  const handleActiveNav = ({ isActive }: NavLinkRenderProps) =>
    isActive ? style["active_nav_item"] : style["nav_item"];

  return (
    <header>
      <div className={mainStyle["container"]}>
        <div className={style["main-header-row"]}>
          <div className={style["logo"]}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className={style["main-nav"]}>
            <ul>
              <li className={style["nav_item"]}>
                <a href="#">{translateHeader[language].travel}</a>
              </li>
              <li className={style["main-nav-list"]}>
                <NavLink to="/about" className={handleActiveNav}>
                  {translateHeader[language].about}
                </NavLink>
              </li>
              <li className={style["nav_item"]}>
                <NavLink to="/contact" className={handleActiveNav}>
                  {translateHeader[language].contact}
                </NavLink>
              </li>
              <li className={style["nav_item"]}>
                <button
                  className={style["change-lang"]}
                  onClick={switchLanguage}
                >
                  {translateHeader[language].lang}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header Component";

export default Header;
