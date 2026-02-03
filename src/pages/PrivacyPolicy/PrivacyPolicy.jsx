import React, { useState, useEffect } from "react";
import css from "./PrivacyPolicy.module.css";

const POLICY_DATA = [
  {
    title: "1. Information We Collect",
    content:
      "We collect identifiers (name, email, phone number) and commercial information (vehicle brand, model, year). These are collected directly from you when you submit a form or interact with our services.",
    items: [
      "Full name",
      "Phone number",
      "Email address",
      "Vehicle information",
      "Service details",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to provide services and improve your experience:",
    items: [
      "To respond to inquiries",
      "To provide estimates and schedule appointments",
      "To communicate regarding services",
      "To improve our website performance",
    ],
  },
  {
    title: "3. Your California Privacy Rights (CCPA)",
    content: "If you are a California resident, you have the following rights:",
    items: [
      "Right to Know: Request a list of personal information we collected.",
      "Right to Delete: Request deletion of your data (with some exceptions).",
      "Right to Opt-Out: We do not sell data, but you can always confirm your preferences.",
      "Non-Discrimination: We won't treat you differently for exercising these rights.",
    ],
  },
  {
    title: "4. Do Not Sell My Personal Information",
    content:
      "WheelTEX does not sell, trade, disclose or rent your personal information to third parties for monetary consideration. We only share data with trusted service providers (like email hosts) to run our business.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement reasonable technical measures to protect your data. However, no internet transmission is 100% secure.",
  },
];

export default function PrivacyPolicy() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Privacy Policy</h1>
        <p className={css.updated}>Last updated: February 3, 2026</p>

        <p className={css.text_intro}>
          This Privacy Policy explains how <strong>WheelTEX</strong> ("we",
          "our", or "us") collects, uses, and protects your personal information
          in compliance with California laws.
        </p>

        {POLICY_DATA.map((item, idx) => (
          <div key={idx}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            {item.items && (
              <ul>
                {item.items.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2>6. Contact Information</h2>
        <p className={css.contactInfo}>
          To exercise your CCPA rights, please contact us:
          <br />
          <strong>WheelTEX</strong>
          <br />
          Email: <a href="mailto:wheeltx@gmail.com">wheeltx@gmail.com</a>
          <br />
          Phone: <a href="tel:+14159105553">+1 415 910 5553</a>
        </p>
      </div>

      {showBanner && (
        <div className={css.cookieBanner}>
          <p>
            We use cookies to improve your experience and analyze traffic. By
            continuing to browse, you agree to our{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>
          <button onClick={acceptCookies} className={css.cookieBtn}>
            Accept
          </button>
        </div>
      )}
    </section>
  );
}
