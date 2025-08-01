import React from "react";
import logo from "../../assets/Logo.jpg";
import css from "../../components/Footer/Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        {/* Logo & About */}
        <div className={css.logoBlock}>
          <img src={logo} alt="WheelTex Logo" className={css.logo} />
          <p className={css.about}>
            Wheel<span className={css.logoRed}>TEX</span> – Sprinter PRO's
            family company providing expert wheel alignment and tire services.
          </p>
        </div>

        {/* Contacts */}
        <div className={css.contacts}>
          <h3>Contacts</h3>
          <a href="tel:+1234567890">📞 +1 234 567 890</a>
          <a href="mailto:info@wheeltex.com">✉ info@wheeltex.com</a>
          <span>⏰ Mon–Sat: 8:00–18:00</span>
          <span>📍 3501 Sunrise Blvd, STE 7, Rancho Cordova, CA 95742</span>
        </div>

        {/* Map */}
        <div className={css.map}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.175348805!2d-121.26065122363622!3d38.57580967179451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae8013e955555%3A0xcd061ead9c74e6b6!2s3501%20Sunrise%20Blvd%2C%20Rancho%20Cordova%2C%20CA%2095742!5e0!3m2!1sru!2sus!4v1754026399862!5m2!1sru!2sus"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className={css.bottom}>
        <p>© {new Date().getFullYear()} WheelTEX. All rights reserved.</p>
      </div>
    </footer>
  );
}
