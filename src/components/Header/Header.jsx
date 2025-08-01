import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleMenu, closeMenu } from "../../redux/slices/headerSlice";
import logo from "../../assets/Logo.jpg";
import css from "./Header.module.css";
export default function Header() {
  const isMenuOpen = useSelector((state) => state.header.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Logo */}
        <a href="#home" className={css.logoWrapper}>
          <img src={logo} alt="WheelTex Logo" className={css.logo} />
          <div className={css.logoTextBlock}>
            <span className={css.logoMain}>
              Wheel<span className={css.logoRed}>TEX</span>
            </span>
            <span className={css.logoSub}>Sprinter PRO's family company</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={`${css.nav} ${isMenuOpen ? css.open : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : "")}
            onClick={() => dispatch(closeMenu())}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? css.active : "")}
            onClick={() => dispatch(closeMenu())}
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? css.active : "")}
            onClick={() => dispatch(closeMenu())}
          >
            About Us
          </NavLink>
          {/* <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? css.active : "")}
            onClick={() => dispatch(closeMenu())}
          >
            Contacts
          </NavLink> */}

          {/* Контакти в мобільному меню */}
          <div className={css.mobileContacts}>
            <a href="tel:+1234567890">📞 +1 234 567 890</a>
            <a href="mailto:info@wheeltex.com">✉ info@wheeltex.com</a>
            <span>⏰ Mon–Sat: 8:00–18:00</span>
          </div>
        </nav>

        {/* Контакти для десктопу */}
        <div className={css.contacts}>
          <a href="tel:+1234567890" className={css.phone}>
            📞 +1 234 567 890
          </a>
          <a href="mailto:info@wheeltex.com" className={css.email}>
            ✉ info@wheeltex.com
          </a>
          <span className={css.schedule}>⏰ Mon–Sat: 8:00–18:00</span>
        </div>

        {/* Burger */}
        <button
          className={`${css.burger} ${isMenuOpen ? css.active : ""}`}
          onClick={() => dispatch(toggleMenu())}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
