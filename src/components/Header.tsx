import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.background1} />
      <img
        className={styles.linkIcon}
        loading="lazy"
        alt=""
        src="/link@2x.png"
      />
      <div className={styles.horizontalDivider} />
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.linkHome}>HOME</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.linkHome}>NWAJAGU SAMUEL</div>
        </div>
        <div className={styles.div3}>
          <div className={styles.linkCompetition}>COMPETITION</div>
        </div>
        <div className={styles.div4}>
          <div className={styles.linkHome}>NATIONAL DIRECTORS</div>
        </div>
        <div className={styles.div5}>
          <div className={styles.linkHome}>2025 CONTESTANTS</div>
        </div>
        <div className={styles.div6}>
          <div className={styles.linkHome}>PRESS</div>
        </div>
      </div>
      <div className={styles.div}>
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--alttextlabelfacebook--alttextlabelfacebook-1@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--alttextlabelinstagram--alttextlabelinstagram-1@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--twitter--twitter-1@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--youtube--youtube-1@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--tiktok--tiktok-1@2x.png"
        />
      </div>
    </header>
  );
};

export default Header;
