import css from "../../pages/BrakesPage/BrakesPage.module.css";
export default function Sections() {
  return (
    <>
      <div className={css.section}>
        <img
          src="/images/services/suspension/brake/brake.png"
          alt="OEM vs Aftermarket Brakes"
        />
        <div>
          <h2>OEM vs. Aftermarket Options</h2>
          <p>
            We offer both OEM (Original Equipment Manufacturer) parts for exact
            factory fit and performance, and premium aftermarket options for
            better value, upgraded durability, or enhanced stopping power.
          </p>
        </div>
      </div>

      <div className={css.section}>
        <img
          src="/images/services/suspension/brake/everyBrake.png"
          alt="Everyday Brake Service"
        />
        <div>
          <h2>Everyday Ride Brakes</h2>
          <p>
            Perfect for daily drivers, sedans, SUVs, and family vehicles. We
            recommend reliable ceramic or semi-metallic pads paired with
            standard vented rotors for quiet operation, low dust, and smooth,
            predictable braking in stop-and-go traffic.
          </p>
        </div>
      </div>

      <div className={css.section}>
        <img
          src="/images/services/suspension/brake/sportBrake.png"
          alt="Performance Brakes"
        />
        <div>
          <h2>Performance Brakes</h2>
          <p>
            For enthusiasts, sports cars, or upgraded builds. Choose
            slotted/drilled rotors for better heat dissipation and reduced fade
            during hard stops, plus high-friction pads or big brake kits with
            larger rotors and multi-piston calipers for shorter stopping
            distances and improved pedal feel.
          </p>
        </div>
      </div>
    </>
  );
}
