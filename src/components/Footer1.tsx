import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: FunctionComponent<Footer1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background} />
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.background} />
        </div>
        <div className={styles.container3}>
          <footer className={styles.container4}>
            <section className={styles.marginParent}>
              <div className={styles.margin}>
                <div className={styles.container5}>
                  <div className={styles.container6}>
                    <b className={styles.getInTouch}>GET IN TOUCH</b>
                  </div>
                  <div className={styles.container7}>
                    <div className={styles.getInTouch}>
                      Talent Appearance: 
                      <span className={styles.email}>Email</span>
                    </div>
                  </div>
                  <div className={styles.container8}>
                    <div className={styles.getInTouch}>
                      National Directors and Brand Partnerships: 
                      <span className={styles.email}>Email</span>
                    </div>
                  </div>
                  <div className={styles.container7}>
                    <div className={styles.getInTouch}>
                      Public Relations: MIO Communications  |  
                      <span className={styles.email}>Email</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.margin1}>
                <div className={styles.container10}>
                  <div className={styles.container11}>
                    <b className={styles.getInTouch}>FOLLOW US</b>
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.margin2}>
              <div className={styles.container12}>
                <div className={styles.listSocialBar}>
                  <div className={styles.item}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      alt=""
                      src="/link--alttextlabelfacebook-1@2x.png"
                    />
                  </div>
                  <div className={styles.item}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      alt=""
                      src="/link--alttextlabelinstagram-1@2x.png"
                    />
                  </div>
                  <div className={styles.item}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      alt=""
                      src="/link--twitter-1@2x.png"
                    />
                  </div>
                  <div className={styles.item}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      alt=""
                      src="/link--youtube-1@2x.png"
                    />
                  </div>
                  <div className={styles.item}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      alt=""
                      src="/link--tiktok-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.marginWrapper}>
              <div className={styles.margin3}>
                <div className={styles.container13}>
                  <div className={styles.container14}>
                    <div className={styles.misterInternationalCompany}>
                      ©2024 Mister International Company Limited dba Mister
                      International Organization. All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
