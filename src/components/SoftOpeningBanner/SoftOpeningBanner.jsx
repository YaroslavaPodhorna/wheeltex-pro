import css from "./SoftOpeningBanner.module.css";

const END_DATE = "2026-03-31"; // YYYY-MM-DD

export default function SoftOpeningBanner() {
  const now = new Date();
  const end = new Date(END_DATE + "T23:59:59");

  if (now > end) return null;

  return (
    <div className={css.banner}>
      <p className={css.text}>
        Soft opening special!{" "}
        <span>Get 20% off on wheel alignment until March 31, 2026.</span>
      </p>
    </div>
  );
}
