import Accordion from "@/components/accordion/Accordion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Accordion title="Accordion">Test</Accordion>
    </div>
  );
}
