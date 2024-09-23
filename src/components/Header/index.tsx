import logo from "/src/assets/logo/logo.png";
import "./style.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="main-header-row">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="main-nav">
            <ul>
              <li className="main-nav-list">
                <a href="">Travel To</a>
              </li>
              <li className="main-nav-list">
                <a href="">About UsM</a>
              </li>
              <li className="main-nav-list">
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
