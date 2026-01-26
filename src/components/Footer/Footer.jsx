import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/Logo.jpg";
import css from "../../components/Footer/Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.logoBlock}>
          <div className={css.logoWrapper}>
            <img src={logo} alt="WheelTEX Logo" className={css.logo} />
            <div className={css.logoText}>
              <span className={css.logoMain}>
                Wheel<span className={css.logoRed}>TEX</span>
              </span>
            </div>
          </div>

          <p className={css.about}>
            Sprinter PRO’s family company providing expert wheel alignment,
            suspension and tire services.
          </p>
        </div>
        {/* Contacts */}
        <div className={css.contacts}>
          <h3>Contacts</h3>
          <a href="tel:+14159105553">📞 +1 415 910 5553</a>
          <a href="mailto:wheeltx@gmail.com">✉ wheeltx@gmail.com</a>
          <span>⏰ Mon–Sat: 10:00–20:00</span>
          <span>📍 3501 Sunrise Blvd, STE 5, Rancho Cordova, CA 95742</span>

          <div className={css.socialsRow}>
            <span className={css.socialTitle}>Follow Us on Social Media </span>
            <a
              href="https://www.facebook.com/profile.php?id=61584629086561&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${css.socialLink} ${css.facebook}`}
              aria-label="Facebook"
            >
              <FaFacebookF />
              <span className={css.tooltip}>Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/wheel.tex?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${css.socialLink} ${css.instagram}`}
              aria-label="Instagram"
            >
              <FaInstagram />
              <span className={css.tooltip}>Instagram</span>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className={css.map}>
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.1694174648756!2d-121.26071042363631!3d38.57594627179444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae9f5bf575d77%3A0xd4ade9cb00e800e4!2sWheelTEX%20Alignment!5e0!3m2!1sru!2sus!4v1768766860161!5m2!1sru!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay */}
          <div className={css.mapOverlay}>
            <a
              href="https://www.google.com/maps?q=WheelTEX+Alignment,+3501+Sunrise+Blvd,+Rancho+Cordova,+CA+95742"
              target="_blank"
              rel="noopener noreferrer"
              className={css.mapLink}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <p>© {new Date().getFullYear()} WheelTEX. All rights reserved.</p>
      </div>
    </footer>
  );
}
