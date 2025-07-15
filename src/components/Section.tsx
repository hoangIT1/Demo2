import { FunctionComponent } from "react";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background} />
      </div>
      <div className={styles.section1}>
        <div className={styles.container1}>
          <div className={styles.margin}>
            <div className={styles.container2}>
              <div className={styles.container}>
                <div className={styles.background1} />
              </div>
              <div className={styles.container4}>
                <div className={styles.marginWrapper}>
                  <div className={styles.margin1}>
                    <div className={styles.container5}>
                      <div className={styles.heading2}>
                        <h2 className={styles.misterInternational}>
                          Mister international
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.margin2}>
                  <div className={styles.container6}>
                    <div className={styles.heading3}>
                      <div className={styles.createdIn2006Container}>
                        <p className={styles.misterInternationalIs}>
                          Created in 2006
                        </p>
                        <p className={styles.misterInternationalIs}>
                          Mister International is the World's
                        </p>
                        <p className={styles.misterInternationalIs}>
                          Most Prestigious Male Pageant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.margin3}>
                  <div className={styles.horizontalborder} />
                </div>
                <section className={styles.marginContainer}>
                  <div className={styles.margin4}>
                    <div className={styles.container6}>
                      <div className={styles.heading31}>
                        <div className={styles.moreThan50Container}>
                          <p className={styles.misterInternationalIs}>
                            More than  50 Countries
                          </p>
                          <p className={styles.misterInternationalIs}> </p>
                          <p className={styles.misterInternationalIs}>
                            100 National Preliminary Pageants
                          </p>
                          <p className={styles.misterInternationalIs}>
                            Throughout the World
                          </p>
                          <p className={styles.misterInternationalIs}> </p>
                          <p className={styles.misterInternationalIs}>
                            Over Thousand Contestants Each Year and
                          </p>
                          <p className={styles.misterInternationalIs}>
                            1 Mister International Finals Show
                          </p>
                        </div>
                        <div className={styles.moreThan50Container}>
                          <p className={styles.misterInternationalIs}>
                            All International Show Watched by Millions
                          </p>
                          <p className={styles.misterInternationalIs}>
                            of People WorldWide Annually
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className={styles.margin5}>
            <div className={styles.container8}>
              <div className={styles.container9}>
                <img
                  className={styles.marginIcon}
                  alt=""
                  src="/margin@2x.png"
                />
                <div className={styles.margin6}>
                  <div className={styles.container10}>
                    <div className={styles.heading32}>
                      <div className={styles.fromLeftMisterContainer}>
                        <p className={styles.misterInternationalIs}>
                          <span className={styles.fromLeft}>From left:</span>
                          <span> Mister International President, Pradit</span>
                        </p>
                        <p className={styles.misterInternationalIs}>
                          Pradinunt, COO Nicholo Paulo Ventura and CEO
                        </p>
                        <p className={styles.misterInternationalIs}>
                           Jeon Jeonghun 
                        </p>
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

export default Section;
