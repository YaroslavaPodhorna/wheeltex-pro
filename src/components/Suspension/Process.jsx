import css from "../../pages/SuspensionPage/SuspensionPage.module.css";
export default function Process() {
  return (
    <div className={css.process}>
      <div className={css.block}>
        <h2>Expert Diagnosis: Identifying the Root Cause</h2>
        <p>
          Suspension problems often manifest as uneven tire wear, excessive
          bouncing over bumps, strange noises like clunking or squeaking, or a
          vehicle that pulls to one side. Our certified technicians use
          state-of-the-art diagnostic tools, including visual inspections, road
          tests, and computerized alignment checks, to pinpoint issues with
          components like shocks, struts, springs, bushings, and control arms.
          Early diagnosis prevents minor problems from escalating into costly
          repairs, such as damaged tires or steering components.
        </p>
      </div>

      <div className={css.block}>
        <h2>Professional Repair: Restoring Peak Performance</h2>
        <p>
          Once diagnosed, we provide tailored repair solutions, from replacing
          worn-out parts to full system overhauls. We work with top-tier brands
          known for durability and performance.
        </p>
      </div>
    </div>
  );
}
