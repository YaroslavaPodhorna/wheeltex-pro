import css from "../../pages/BrakesPage/BrakesPage.module.css";

export default function AccordionItem({ title, children, isActive, onToggle }) {
  return (
    <div className={`${css.accordionItem} ${isActive ? css.open : ""}`}>
      <button className={css.accordionHeader} onClick={onToggle} type="button">
        <span>{title}</span>
        <span className={css.icon}>{isActive ? "−" : "+"}</span>
      </button>

      <div className={css.accordionContent}>{children}</div>
    </div>
  );
}
