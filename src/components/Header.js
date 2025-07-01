import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo01 from "../images/logo-01.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest("#nav-bar") && !e.target.closest(".nav-opener")) {
        setMenuOpen(false);
        document.documentElement.style.overflow = "unset";
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header id="header">
      <div className="container">
        <div className="header-block">
          <div className="logo-holder">
            <strong className="logo">
              <NavLink to="/">
                <img src={logo01} alt="Logo" />
              </NavLink>
            </strong>
          </div>

          <nav id="nav-bar" className={menuOpen ? "nav-active" : ""}>
            <button
              className={`nav-opener${menuOpen ? " active" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <span className="line">Menu</span>
            </button>
            <div className="nav-drop">
              <ul className="menu-list">
                <li>
                  <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <div className="theme-selector">{/* Тема */}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
