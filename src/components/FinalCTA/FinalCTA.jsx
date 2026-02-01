import React from "react";
import css from "../../components/FinalCTA/FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={css.ctaSection}>
      <div className={css.container}>
        <h2 className={css.title}>Ready to Get Your Car Aligned?</h2>
        <p className={css.subtitle}>
          Experience smoother driving, better fuel economy, and longer tire life
          with our professional alignment service.
        </p>

        <a href="tel:+14159105553" className={css.ctaBtn}>
          Call Us 1-415-910-5553
        </a>
      </div>
    </section>
  );
}
