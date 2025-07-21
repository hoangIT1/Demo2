// hoangit1/demo2/Demo2-9855f584a63b8f581c2297b365b2a42bf8b33caa/src/components/Footer.tsx
import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

// Đổi tên component Footer thành tên có ý nghĩa hơn nếu cần, ví dụ: MainFooter
const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    // Sử dụng thẻ footer của HTML5
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.contentWrapper}>
        {/* Cột thông tin liên hệ */}
        <div className={styles.contactSection}>
          <h4>GET IN TOUCH</h4>
          <p>
            Talent Appearance: <a href="mailto:misterkinginternational@gmail.com">Email</a>
          </p>
          <p>
            National Directors and Brand Partnerships: <a href="mailto:misterkinginternational@gmail.com">Email</a>
          </p>
          <p>
            Public Relations: MKIO Communications | <a href="mailto:misterkinginternational@gmail.com">Email</a>
          </p>
        </div>

        {/* Cột mạng xã hội */}
        <div className={styles.socialSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/p/Mister-King-International-Official-100085496981945/"><img alt="Facebook" src="/Copy of IG42.png" /></a>
            <a href="https://www.instagram.com/mister_kinginternational/?hl=fr"><img alt="Instagram" src="/Copy of IG43.png" /></a>
            <a href="https://x.com/MisterkingIntl"><img alt="Twitter" src="/Copy of IG44.png" /></a>
            <a href="https://www.youtube.com/@misterkinginternationaltv"><img alt="YouTube" src="/Copy of IG45.png" /></a>
            <a href="#"><img alt="TikTok" src="/Copy of IG46.png" /></a>
          </div>
        </div>
      </div>

      {/* Phần bản quyền */}
      <div className={styles.copyright}>
        ©2023 Mister King International Company Limited dba Mister King International Organization. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;