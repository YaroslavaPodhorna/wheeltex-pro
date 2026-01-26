import css from "../../pages/BrakesPage/BrakesPage.module.css";
export default function Intro() {
  return (
    <div className={css.intro}>
      <h1>Keep Your Brakes Safe and Reliable</h1>

      <p>
        Your brakes are one of the most critical safety systems in your vehicle.
        Brake maintenance is essential for vehicle safety, as brakes handle
        tremendous heat and friction every time you stop. While there’s no
        one-size-fits-all schedule—since it depends on your driving habits (city
        stop-and-go vs. highway), vehicle type, road conditions, and
        manufacturer specs—the general guidelines below help most drivers stay
        ahead of issues.
      </p>

      <p>
        Always check your vehicle’s owner’s manual for the exact OEM-recommended
        intervals, as they vary by make and model (e.g., Toyota often suggests
        brake fluid changes every 2 years or 20,000–30,000 miles, while others
        align with broader ranges).
      </p>
    </div>
  );
}
