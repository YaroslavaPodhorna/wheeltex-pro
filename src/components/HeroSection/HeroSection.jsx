import React from "react";
import ReactGA from "react-ga4";
import css from "./HeroSection.module.css";

export default function HeroSection() {
  const phoneNumber = "+14159105553";
  const handleCallClick = () => {
    ReactGA.event({
      category: "Conversion",
      action: "phone_call_click",
      label: "Hero Section Button",
    });
  };

  return (
    <section className={css.hero}>
      <div className={css.overlay}>
        <div className={css.content}>
          <h1 className={css.title}>Wheel Alignment for All Vehicle Types</h1>

          <p className={css.vehicles}>
            Cars • SUVs • Vans • Trucks • Commercial Vehicles
          </p>

          <div className={css.powered}>
            <span className={css.powerText}>Powered by</span>
            <img
              className={css.logo}
              src="/hunter-logo-white-red.png"
              alt="Hunter Engineering Company - Professional alignment equipment"
            />
          </div>

          <p className={css.subtitle}>
            At Wheeltex we are committed to perform the factory grade and custom
            all wheel alignment programs powered by 2025 Hunter HawkEye XL 3D
            laser Stand, all types of suspension set-ups, quick and professional
            tire services via last gen Hunter Revolution Walk Away tire changing
            machine and Hunter Road Force balancing machine.
          </p>

          <a
            href={`tel:${phoneNumber}`}
            className={css.cta}
            onClick={handleCallClick}
          >
            📞 Call Now to Book
          </a>
        </div>
      </div>
    </section>
  );
}
