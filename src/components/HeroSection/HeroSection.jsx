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
          <h1 className={css.title}>
            Wheel Alignment in Rancho Cordova, CA for All Vehicle Types
          </h1>

          <p className={css.vehicles}>
            Cars • SUVs • Vans • Trucks • Commercial Vehicles in Rancho Cordova
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
            We provide professional wheel alignment services in Rancho Cordova,
            CA using the 2025 Hunter HawkEye XL 3D laser system for cars, SUVs,
            trucks, and commercial vehicles. Another key feature of WheelTEX is
            a dealer quality suspension services, custom builds and individualy
            crafted set-ups.
            {/* quick and professional tire services via last gen Hunter Revolution
            Walk Away tire changing machine and Hunter Road Force balancing
            machine. */}
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
