import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import css from "../CustomerReviews/CustomerReviews.module.css";
const reviews = [
  { name: "John D.", text: "Excellent service! My car drives perfectly now." },
  {
    name: "Emily R.",
    text: "Fast, friendly, and professional. Highly recommend!",
  },
  {
    name: "Michael S.",
    text: "They fixed my alignment and the car feels brand new!",
  },
  { name: "Sarah K.", text: "Reliable and honest mechanics. Will come again." },
];

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);

  // Автоперемикання кожні 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={css.reviews}>
      <div className={css.container}>
        <h2 className={css.title}>Customer Reviews</h2>
        <p className={css.subtitle}>
          See what our happy clients say about WheelTex services.
        </p>

        <div className={css.carousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={css.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className={css.cardText}>"{reviews[index].text}"</p>
              <h4 className={css.cardAuthor}>— {reviews[index].name}</h4>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Навігація */}
        <div className={css.dots}>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${css.dot} ${i === index ? css.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
