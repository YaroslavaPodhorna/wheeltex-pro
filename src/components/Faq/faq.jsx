import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import css from "../../components/Faq/faq.module.css";

const faqs = [
  {
    q: "1. Why do I need wheel alignment? (Part 1)",
    a: `Wheel alignment benefits!
Proper wheel alignment is a key maintenance service that adjusts your vehicle’s suspension angles (toe, camber, and caster) so your tires make optimal contact with the road. This simple adjustment delivers major real-world benefits for safety, savings, and performance—whether you’re driving a passenger car, exotic sports model, heavy-duty truck, RV, or off-road rig.`,
  },
  {
    q: "2. Why do I need wheel alignment? (Part 2)",
    a: `Here are the main benefits of getting your wheels properly aligned:
• Extended Tire Life and Even Wear — Misaligned wheels cause uneven tread wear, leading to premature bald spots, feathering, or cupping. Proper alignment ensures tires roll straight and wear evenly, often adding thousands of miles to their lifespan and saving you from frequent (and expensive) replacements.
Improved Fuel Efficiency — When wheels are out of alignment, tires drag sideways (like sliding tires at every mile), forcing your engine to work harder. Alignment can boost gas mileage by up to 7-10%, reducing fuel costs over time—especially noticeable for high-mileage drivers or heavy vehicles.
• Enhanced Safety and Handling — Aligned wheels help your vehicle track straight without pulling to one side, improving steering response, stability, and braking. This reduces accident risk in wet, emergency, or high-speed conditions, and keeps modern driver-assist systems (like lane-keeping or adaptive cruise) functioning correctly.
• Smoother, More Comfortable Ride — No more fighting a crooked steering wheel, vibrations, or drifting. Alignment eliminates unnecessary stress on suspension components, making drives quieter, less fatiguing, and more enjoyable.
• Reduced Wear on Suspension and Other Parts — Misalignment strains tie rods, ball joints, bushings, and shocks, leading to costly premature failures. Keeping alignment in check protects your entire undercarriage and prevents bigger repairs down the road.
• Better Overall Vehicle Performance — From sharper cornering in sports cars to stable hauling in trucks/semis or off-road capability in modified 4x4s, proper alignment optimizes grip, control, and efficiency tailored to your vehicle’s needs.
We use state-of-the-art Hunter alignment systems to deliver precise, measurable results—shown clearly on the display for transparency.

Regular checks (every 6,000-10,000 miles, or after hitting potholes/curbs) keep these benefits going strong. If your car pulls, the steering wheel is off-center, or tires show uneven wear, it’s time for an alignment—stop by our shop for expert service!`,
  },
  {
    q: "3. How often should I check alignment?",
    a: "Regular checks (every 6,000-10,000 miles, or after hitting potholes/curbs).",
  },
  {
    q: "4. What signs show my car needs alignment?",
    a: "If your car pulls to one side, steering wheel off-center, or tires show uneven wear.",
  },
  {
    q: "5. How long does alignment take?",
    a: "Usually 30–60 minutes depending on the vehicle.",
  },
  {
    q: "6. Does alignment improve fuel economy?",
    a: "Yes, alignment can boost gas mileage by up to 7–10%.",
  },
  {
    q: "7. What equipment do you use?",
    a: "We use state-of-the-art Hunter alignment systems.",
  },
  {
    q: "8. What benefits does alignment give?",
    a: "Better safety, smoother ride, longer tire life, and reduced wear on suspension.",
  },
  {
    q: "9. Why is it important to align after hitting potholes?",
    a: "Potholes can knock wheels out of alignment, causing uneven wear and steering issues.",
  },
  {
    q: "10. How does alignment help with tire wear?",
    a: "Proper alignment keeps tires rolling straight and wearing evenly, adding miles to tire life.",
  },
];

export default function AccordionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={css.faq}>
      <div className={css.container}>
        <h2 className={css.title}>Wheel Alignment FAQs</h2>

        <ul className={css.accordionContainer}>
          {faqs.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={index}
                className={`${css.accordionItem} ${isActive ? css.active : ""}`}
              >
                <button className={css.trigger} onClick={() => toggle(index)}>
                  <span>{item.q}</span>
                  <span className={css.icon}>
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div className={`${css.panel} ${isActive ? css.open : ""}`}>
                  <p className={css.text}>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
