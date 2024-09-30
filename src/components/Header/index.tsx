import logo from "@/assets/logo/logo.png";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={mainStyle["container"]}>
        <div className={style["main-header-row"]}>
          <div className={style["logo"]}>
            <img src={logo} alt="Logo" />
          </div>
          <nav className={style["main-nav"]}>
            <ul>
              <li className={style["main-nav-list"]}>
                <a href="">Travel To</a>
              </li>
              <li className={style["main-nav-list"]}>
                <a href="">About UsM</a>
              </li>
              <li className={style["main-nav-list"]}>
                <a href="">Contact</a>
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
