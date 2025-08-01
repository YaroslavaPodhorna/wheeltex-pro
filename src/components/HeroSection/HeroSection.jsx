import React from "react";
import { NavLink } from "react-router-dom";
import css from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={css.hero}>
      <div className={css.overlay}>
        <div className={css.content}>
          <h1 className={css.title}>Professional Wheel Alignment</h1>
          <p className={css.subtitle}>
            Keep your car safe and smooth with our expert alignment and tire
            services.
          </p>
          <NavLink to="/book" className={css.cta}>
            Book Now
          </NavLink>
        </div>
      </div>
    </section>
  );
}
