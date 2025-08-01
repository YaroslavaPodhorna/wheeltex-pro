import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaBolt, FaAward, FaTools } from "react-icons/fa";
import css from "../../components/WhyChooseUs/WhyChooseUs.module.css"; // Ensure this path is correct
const features = [
  {
    icon: <FaCheckCircle />,
    title: "Experienced Mechanics",
    desc: "Our certified team handles any vehicle with care and precision.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Service",
    desc: "We value your time and provide quick, high-quality services.",
  },
  {
    icon: <FaAward />,
    title: "Warranty on Work",
    desc: "All our works are guaranteed for your peace of mind.",
  },
  {
    icon: <FaTools />,
    title: "Modern Equipment",
    desc: "We use state-of-the-art Hunter technology and tools.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={css.why}>
      <div className={css.container}>
        <h2 className={css.title}>Why Choose Us</h2>
        <p className={css.subtitle}>
          We provide top-notch car care backed by experience and modern
          technology.
        </p>

        <div className={css.grid}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              className={css.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={css.icon}>{item.icon}</div>
              <h3 className={css.cardTitle}>{item.title}</h3>
              <p className={css.cardDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
