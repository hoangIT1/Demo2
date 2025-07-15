import { FunctionComponent } from "react";
import styles from "./Header1.module.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.background} />
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.background1} />
        </div>
        <div className={styles.container3}>
          <div className={styles.containerInner}>
            <div className={styles.marginParent}>
              <div className={styles.margin}>
                <img
                  className={styles.containerIcon}
                  loading="lazy"
                  alt=""
                  src="/container@2x.png"
                />
              </div>
              <div className={styles.margin1}>
                <div className={styles.horizontalDivider} />
              </div>
            </div>
          </div>
          <div className={styles.wixDropdownMenumarginParent}>
            <div className={styles.wixDropdownMenumargin}>
              <div className={styles.wixDropdownMenu}>
                <div className={styles.wixDropdownMenumarginParent}>
                  <div className={styles.list}>
                    <div className={styles.item}>
                      <div className={styles.link}>
                        <div className={styles.home}>HOME</div>
                      </div>
                    </div>
                    <div className={styles.item1}>
                      <div className={styles.link}>
                        <div className={styles.home}>NWAJAGU SAMUEL</div>
                      </div>
                    </div>
                    <div className={styles.item2}>
                      <div className={styles.link}>
                        <div className={styles.home}>COMPETITION</div>
                      </div>
                    </div>
                    <div className={styles.item3}>
                      <div className={styles.link}>
                        <div className={styles.home}>NATIONAL DIRECTORS</div>
                      </div>
                    </div>
                    <div className={styles.item4}>
                      <div className={styles.link}>
                        <div className={styles.home}>2025 CONTESTANTS</div>
                      </div>
                    </div>
                    <div className={styles.item5}>
                      <div className={styles.link}>
                        <div className={styles.home}>PRESS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.margin2}>
              <div className={styles.container4}>
                <div className={styles.listSocialBar}>
                  <div className={styles.item6}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      loading="lazy"
                      alt=""
                      src="/link--alttextlabelfacebook@2x.png"
                    />
                  </div>
                  <div className={styles.item6}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      loading="lazy"
                      alt=""
                      src="/link--alttextlabelinstagram@2x.png"
                    />
                  </div>
                  <div className={styles.item6}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      loading="lazy"
                      alt=""
                      src="/link--twitter@2x.png"
                    />
                  </div>
                  <div className={styles.item6}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      loading="lazy"
                      alt=""
                      src="/link--youtube@2x.png"
                    />
                  </div>
                  <div className={styles.item6}>
                    <img
                      className={styles.linkAlttextlabelfacebook}
                      loading="lazy"
                      alt=""
                      src="/link--tiktok@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
