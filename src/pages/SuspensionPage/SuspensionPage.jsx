import Intro from "../../components/Suspension/Intro";
import Process from "../../components/Suspension/Process";
import Brands from "../../components/Suspension/Brands";
import Final from "../../components/Suspension/Final";
import css from "./SuspensionPage.module.css";

export default function SuspensionPage() {
  return (
    <section className={css.page}>
      <Intro />
      <Process />
      <Brands />
      <Final />
    </section>
  );
}
