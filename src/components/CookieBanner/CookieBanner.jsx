import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Функция проверки статуса
    const checkStatus = () => {
      const accepted = localStorage.getItem("cookiesAccepted");
      setIsVisible(!accepted);
    };

    // Проверяем при первом рендере
    checkStatus();

    // Следим за изменениями в других вкладках/окнах
    window.addEventListener("storage", checkStatus);

    return () => window.removeEventListener("storage", checkStatus);
  }, []);

  const accept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    // Важно: событие 'storage' не срабатывает в той же вкладке, где сделана запись,
    // поэтому если у тебя есть другие компоненты, следящие за этим, вызываем вручную:
    window.dispatchEvent(new Event("storage"));
  };

  if (!isVisible) return null;

  return (
    <div className={css.banner}>
      <p className={css.text}>
        We use cookies to enhance your experience. By continuing, you agree to
        our
        <Link
          to="/privacy-policy"
          className={css.policyLink}
          onClick={accept} // Закрываем баннер и сохраняем статус при переходе
        >
          {" "}
          Privacy Policy
        </Link>
      </p>
      <button className={css.btn} onClick={accept}>
        Accept
      </button>
    </div>
  );
}
