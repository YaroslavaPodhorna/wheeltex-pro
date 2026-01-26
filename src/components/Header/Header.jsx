import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { toggleMenu, closeMenu } from "../../redux/slices/headerSlice";
import logo from "../../assets/Logo.jpg";
import css from "./Header.module.css";

export default function Header() {
  const isMenuOpen = useSelector((state) => state.header.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? css.navLinkActive : css.navLink;

  React.useEffect(() => {
    dispatch(closeMenu());
  }, [location.pathname, dispatch]);

  return (
    <>
      <header className={css.header}>
        <div className={css.headerInner}>
          {/* LOGO */}
          <NavLink
            to="/"
            className={css.logoWrapper}
            onClick={() => dispatch(closeMenu())}
          >
            <img src={logo} alt="WheelTEX" className={css.logo} />
            <div className={css.logoText}>
              <div className={css.logoMain}>
                Wheel<span className={css.logoRed}>TEX</span>
              </div>
              <div className={css.logoSub}>
                Sprinter PRO's{" "}
                <span className={css.logoSubAccent}>family company</span>
              </div>
            </div>
          </NavLink>

          {/* NAV */}
          <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ""}`}>
            <div className={css.navLinks}>
              <NavLink
                to="/"
                className={linkClass}
                end
                onClick={() => dispatch(closeMenu())}
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={linkClass}
                onClick={() => dispatch(closeMenu())}
              >
                Services
              </NavLink>

              {/* <NavLink
                to="/about"
                className={linkClass}
                onClick={() => dispatch(closeMenu())}
              >
                About Us
              </NavLink> */}
            </div>

            <div className={css.mobileContacts}>
              <a href="tel:+14159105553" onClick={() => dispatch(closeMenu())}>
                📞 +1 415 910 5553
              </a>
              <a
                href="mailto:wheeltx@gmail.com"
                onClick={() => dispatch(closeMenu())}
              >
                ✉ wheeltx@gmail.com
              </a>
              <span>⏰ Mon–Sat 10:00–20:00</span>
            </div>
          </nav>

          {/* DESKTOP CONTACTS */}
          <div className={css.contacts}>
            <a href="tel:+14159105553">📞 +1 415 910 5553</a>
            <span className={css.schedule}>⏰ Mon–Sat 10:00–20:00</span>
          </div>

          {/* BURGER */}
          <div className={css.burgerWrapper}>
            <button
              className={`${css.burger} ${isMenuOpen ? css.burgerActive : ""}`}
              onClick={() => dispatch(toggleMenu())}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      {/* <div
        className={`${css.backdrop} ${isMenuOpen ? css.backdropOpen : ""}`}
        onClick={() => dispatch(closeMenu())}
        
      /> */}
      {isMenuOpen && (
        <div className={css.backdrop} onClick={() => dispatch(closeMenu())} />
      )}
    </>
  );
}
