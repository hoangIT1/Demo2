// hoangit1/demo2/Demo2-9855f584a63b8f581c2297b365b2a42bf8b33caa/src/components/Section1.tsx
import { FunctionComponent } from "react";
import styles from "./Section.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <h2 className={styles.title}>Subscribe Form</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            className={styles.input}
            type="email"
            placeholder="e.g., email@example.com"
            aria-label="Email for subscription"
          />
          <button className={styles.button} type="submit">
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Section1;