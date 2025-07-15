import { FunctionComponent } from "react";
import styles from "./Section1.module.css";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background} />
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <div className={styles.form}>
              <div className={styles.container2}>
                <div className={styles.container5}>
                  <div className={styles.margin}>
                    <div className={styles.container6}>
                      <div className={styles.heading5}>
                        <h2 className={styles.subscribeForm}>Subscribe Form</h2>
                      </div>
                    </div>
                  </div>
                  <div className={styles.marginParent}>
                    <div className={styles.margin1}>
                      <div className={styles.container7}>
                        <div className={styles.input}>
                          <div className={styles.container8}>
                            <i className={styles.egEmailexamplecom}>
                              e.g., email@example.com
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.margin2}>
                      <div className={styles.container9}>
                        <div className={styles.buttonJoin}>
                          <div className={styles.rectangle} />
                          <div className={styles.rectangle} />
                          <div className={styles.container10}>
                            <div className={styles.join}>Join</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
