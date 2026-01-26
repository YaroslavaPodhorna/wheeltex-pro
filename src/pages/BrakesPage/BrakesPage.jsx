import BrakesAccordion from "../../components/Brakes/BrakesAccordion";
import Intro from "../../components/Brakes/Intro";
import Sections from "../../components/Brakes/Sections";
import Final from "../../components/Brakes/Final";
import css from "./BrakesPage.module.css";

export default function BrakesPage() {
  return (
    <section className={css.page}>
      <Intro />

      <Sections />

      <BrakesAccordion />
      <Final />
    </section>
  );
}
