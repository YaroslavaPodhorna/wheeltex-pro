// import React from "react";
// import { Link } from "react-router-dom"; // Важно для SPA

// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import logo from "../../assets/Logo.jpg";
// import css from "./Footer.module.css";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className={css.footer}>
//       <div className={css.container}>
//         {/* LOGO BLOCK */}
//         <div className={css.logoBlock}>
//           <div className={css.logoWrapper}>
//             <img src={logo} alt="WheelTEX Logo" className={css.logo} />
//             <div className={css.logoText}>
//               <span className={css.logoMain}>
//                 Wheel<span className={css.logoRed}>TEX</span>
//               </span>
//             </div>
//           </div>
//           <p className={css.about}>
//             Sprinter PRO’s family company providing expert wheel alignment,
//             suspension and tire services in Rancho Cordova.
//           </p>
//         </div>

//         {/* CONTACTS */}
//         <div className={css.contacts}>
//           <h3>Contacts</h3>
//           <div className={css.contactLinks}>
//             <a href="tel:+14159105553">📞 +1 415 910 5553</a>
//             <a href="mailto:wheeltx@gmail.com">✉ wheeltx@gmail.com</a>
//             <span>⏰ Mon–Sat: 10:00–20:00</span>
//             <span className={css.address}>
//               📍 3501 Sunrise Blvd, STE 5, Rancho Cordova, CA 95742
//             </span>
//           </div>

//           <div className={css.socialsRow}>
//             <a
//               href="https://www.facebook.com/profile.php?id=61584629086561"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${css.socialLink} ${css.facebook}`}
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="https://www.instagram.com/wheel.tex"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`${css.socialLink} ${css.instagram}`}
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>

//         {/* MAP BLOCK */}
//         <div className={css.mapBlock}>
//           <div className={css.mapWrapper}>
//             <iframe
//               title="Our Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.4243163351336!2d-121.2721832!3d38.5850117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ade08f760e91b%3A0xc348507421f66d49!2zMzUwMSBTdW5yaXNlIEJsdmQgU1RFIDUsIFJhbmNobyBDb3Jkb3ZhLCBDQSA5NTc0Miwg0KHQqNCQ!5e0!3m2!1sru!2sua!4v1707000000000!5m2!1sru!2sua"
//               loading="lazy"
//             />
//           </div>
//           {/* <Link to="/privacy-policy" className={css.privacyLink}>
//             Privacy Policy
//           </Link> */}
//           <Link
//             to="/privacy-policy"
//             target="_blank"
//             className={css.css.privacyLink}
//             onClick={() => {
//               // Принудительно записываем, чтобы новая вкладка уже видела "true"
//               localStorage.setItem("cookiesAccepted", "true");

//               // Генерируем событие storage, чтобы баннер в текущей вкладке тоже скрылся
//               window.dispatchEvent(new Event("storage"));
//             }}
//           >
//             Privacy Policy
//           </Link>
//           ;
//         </div>
//       </div>

//       {/* COPYRIGHT */}
//       <div className={css.bottom}>
//         <p>
//           © {currentYear} <strong>WheelTEX</strong>. All Rights Reserved.
//           Unauthorized use and/or duplication of this material without express
//           and written permission is strictly prohibited.
//         </p>
//       </div>
//     </footer>
//   );
// }
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/Logo.jpg";
import css from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Функция для отметки принятия куки при клике на политику
  const handlePrivacyClick = () => {
    localStorage.setItem("cookiesAccepted", "true");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        {/* LOGO BLOCK */}
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
            suspension and tire services in Rancho Cordova.
          </p>
        </div>

        {/* CONTACTS */}
        <div className={css.contacts}>
          <h3>Contacts</h3>
          <div className={css.contactLinks}>
            <a href="tel:+14159105553">📞 +1 415 910 5553</a>
            <a href="mailto:wheeltx@gmail.com">✉ wheeltx@gmail.com</a>
            <span>⏰ Mon–Sat: 10:00–20:00</span>
            <span className={css.address}>
              📍 3501 Sunrise Blvd, STE 5, Rancho Cordova, CA 95742
            </span>
          </div>

          <div className={css.socialsRow}>
            <a
              href="https://www.facebook.com/profile.php?id=61584629086561"
              target="_blank"
              rel="noopener noreferrer"
              className={`${css.socialLink} ${css.facebook}`}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/wheel.tex"
              target="_blank"
              rel="noopener noreferrer"
              className={`${css.socialLink} ${css.instagram}`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* MAP BLOCK */}
        <div className={css.mapBlock}>
          <div className={css.mapWrapper}>
            <iframe
              title="WheelTEX Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.169420622727!2d-121.26300641175595!3d38.57594619906857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae9f5bf575d77%3A0xd4ade9cb00e800e4!2sWheelTEX%20Alignment!5e0!3m2!1sen!2sus!4v1738163828489!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <div className={css.mapWrapper}>
            <iframe
              title="WheelTEX Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.169420622727!2d-121.26300641175595!3d38.57594619906857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae9f5bf575d77%3A0xd4ade9cb00e800e4!2sWheelTEX%20Alignment!5e0!3m2!1sen!2sus!4v1770163828489!5m2!1sen!2sus" 
            />
          </div> */}
          <NavLink
            to="/privacy-policy"
            className={css.privacyLink}
            onClick={handlePrivacyClick}
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={css.bottom}>
        <p>
          © {currentYear} <strong>WheelTEX</strong>. All Rights Reserved.
          Unauthorized use and/or duplication of this material without express
          and written permission is strictly prohibited.
        </p>
      </div>
    </footer>
  );
}