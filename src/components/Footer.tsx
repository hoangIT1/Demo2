import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.background1} />
      <div className={styles.getInTouchContainer}>
        <p className={styles.getInTouch}>
          <span className={styles.getInTouch1}>GET IN TOUCH</span>
        </p>
        <p className={styles.getInTouch}>
          <span>
            Talent Appearance: 
            <span className={styles.email}>Email</span>
          </span>
        </p>
        <p className={styles.getInTouch}>
          <span>
            National Directors and Brand Partnerships: 
            <span className={styles.email}>Email</span>
          </span>
        </p>
        <p className={styles.getInTouch}>
          <span>
            Public Relations: MIO Communications  |  
            <span className={styles.email}>Email</span>
          </span>
        </p>
      </div>
      <b className={styles.followUs}>FOLLOW US</b>
      <div className={styles.div}>
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--alttextlabelfacebook--alttextlabelfacebook@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--alttextlabelinstagram--alttextlabelinstagram@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--twitter--twitter@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--youtube--youtube@2x.png"
        />
        <img
          className={styles.itemLinkAlttextlabelf}
          alt=""
          src="/item--link--tiktok--tiktok@2x.png"
        />
      </div>
      <div className={styles.misterInternationalCompany}>
        ©2024 Mister International Company Limited dba Mister International
        Organization. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
