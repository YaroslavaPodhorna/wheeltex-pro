import React from "react";
import { NavLink } from "react-router-dom";
import css from "../../components/FinalCTA/FinalCTA.module.css"; // Adjust the path as necessary
export default function FinalCTA() {
  return (
    <section className={css.ctaSection}>
      <div className={css.container}>
        <h2 className={css.title}>Ready to Get Your Car Aligned?</h2>
        <p className={css.subtitle}>
          Experience smoother driving, better fuel economy, and longer tire life
          with our professional alignment service.
        </p>
        <NavLink to="/book" className={css.ctaBtn}>
          Book Now
        </NavLink>
      </div>
    </section>
  );
}
