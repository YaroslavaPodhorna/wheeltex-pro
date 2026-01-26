import { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";
import css from "../../pages/BrakesPage/BrakesPage.module.css";
export default function BrakesAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className={css.accordion}>
      <h2>Key Brake Maintenance Intervals</h2>
      <div className={css.accordionContainer}>
        <AccordionItem
          title="1. Brake Inspections"
          isActive={activeIndex === 0}
          onToggle={() => toggle(0)}
        >
          <ul>
            <li>
              Have your brakes visually inspected regularly to catch wear early.
              Recommended: Every 5,000–7,000 miles or every 4–6 months
              (whichever comes first), or at least once a year.
            </li>
            <li>
              Many shops inspect brakes during tire rotations or oil changes
              (when wheels are off).
            </li>
            <li>
              This includes checking pad thickness, rotor condition, caliper
              movement, fluid level, and leaks.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          title="2. Brake Pad Replacement"
          isActive={activeIndex === 1}
          onToggle={() => toggle(1)}
        >
          <ul>
            <li>Typical range: 25,000–70,000 miles.</li>
            <li>Ceramic pads may last longer, semi-metallic wear faster.</li>
            <li>
              Replace when pads reach 3–4mm thickness to avoid rotor damage.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          title="3. Brake Fluid Flush / Change"
          isActive={activeIndex === 2}
          onToggle={() => toggle(2)}
        >
          <ul>
            <li>Recommended every 2–3 years or 30,000 miles.</li>
            <li>
              Fresh fluid ensures firm pedal feel and protects brake components.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          title="4. Other Components"
          isActive={activeIndex === 3}
          onToggle={() => toggle(3)}
        >
          <ul>
            <li>Rotors: Typically every 30,000–70,000 miles.</li>
            <li>Calipers: Clean and lubricate slide pins if sticking.</li>
            <li>
              Full inspection immediately if you notice noise, vibration, or
              warning lights.
            </li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
}
