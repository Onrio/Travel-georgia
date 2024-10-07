import logo from "@/assets/logo/logo.png";
import mainStyle from "@/style/index.module.css";
import style from "./style.module.css";

import { Link, NavLink, NavLinkRenderProps } from "react-router-dom";

const Header: React.FC = () => {
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
                <a href="#">Travel To</a>
              </li>
              <li className={style["main-nav-list"]}>
                <NavLink to="/about" className={handleActiveNav}>
                  About Us
                </NavLink>
              </li>
              <li className={style["nav_item"]}>
                <NavLink to="/contact" className={handleActiveNav}>
                  Contact
                </NavLink>
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
