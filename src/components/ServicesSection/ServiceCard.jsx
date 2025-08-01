import React from "react";
import css from "../ServicesSection/ServicesSection.module.css";

export default function ServiceCard({ icon, image, title, description }) {
  return (
    <div className={css.card}>
      <div className={css.icon}>
        {image ? (
          <img src={image} alt={title} className={css.cardImage} />
        ) : (
          icon
        )}
      </div>
      <h3 className={css.cardTitle}>{title}</h3>
      <p className={css.cardDesc}>{description}</p>
    </div>
  );
}
