import css from "../../pages/SuspensionPage/SuspensionPage.module.css";
export default function Process() {
  return (
    <div className={css.process}>
      <div className={css.block}>
        <h2>Expert Diagnosis: Identifying the Root Cause</h2>
        <p>
          Suspension problems are often manifest as uneven tire wear, excessive
          bouncing over bumps, strange noises like clunking or squeaking, or a
          vehicle that pulls to one side. Our experienced technicians use the
          state-of-the-art diagnostic tools and machines, professional visual
          inspections, road tests, and computerized alignment checks, to
          pinpoint issues with components like shocks, struts, springs,
          bushings, and control arms. Early diagnosis prevents minor problems
          from escalating into costly repairs, such as damaged tires or steering
          components.
        </p>
      </div>

      <div className={css.block}>
        <h2>Professional Repair: Restoring Peak Performance</h2>
        <p>
          Once diagnosed, we provide tailored repair solutions, from replacing
          worn-out parts to full system overhauls. We work with OEM and top-tier
          brands known for durability and performance. Choosing the right one
          depends on your goals: Bilstein shines for no-fuss reliability;
          KW/Öhlins for adjustability and refinement; KONI for tunable value.
          Always match your vehicle, driving style (daily, track, off-road), and
          springs. Professional installation and alignment are key for the best
          results. Have your brakes visually inspected regularly to catch wear
          early. Recommended: Every 5,000–7,000 miles or every 4–6 months
          (whichever comes first), or at least once a year. This includes
          checking pad thickness, rotor condition, caliper movement, fluid
          level, and leaks.
        </p>
      </div>
    </div>
  );
}
