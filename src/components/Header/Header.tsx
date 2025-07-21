// hoangit1/demo2/Demo2-9855f584a63b8f581c2297b365b2a42bf8b33caa/src/components/Header1.tsx
import { FunctionComponent, useState } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
  sticky?: boolean;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }, sticky = true) => {
  // State để quản lý việc menu có đang mở hay không
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
     <header className={[styles.header, !sticky && styles.nonSticky, className].filter(Boolean).join(" ")}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img
            className={styles.logo}
            loading="lazy"
            alt="Mister International Logo"
            src="/Copy of IG0.png" // Giữ lại src logo của bạn
          />
        </a>

        {/* Nút Hamburger cho Mobile */}
        <button
          className={styles.hamburgerButton}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Bạn có thể dùng icon ☰ hoặc đơn giản là 3 thẻ div */}
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
          <div className={styles.hamburgerLine} />
        </button>

        {/* Menu (Bao gồm cả nav links và social icons) */}
        {/* Thêm class 'menuOpen' khi isMenuOpen là true */}
        <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <nav className={styles.navLinks}>
            <a href="/">HOME</a>
            <a href="/mark-anthony">MARK ANTHONY</a>
            <a href="/competition">COMPETITION</a>
            <a href="/national-directors">NATIONAL DIRECTORS</a>
            <a href="/contestants">CONTESTANTS</a>
            <a href="/press">PRESS</a>
          </nav>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/p/Mister-King-International-Official-100085496981945/"><img alt="Facebook" src="/Copy of IG42.png" /></a>
            <a href="https://www.instagram.com/mister_kinginternational/?hl=fr"><img alt="Instagram" src="/Copy of IG43.png" /></a>
            <a href="https://x.com/MisterkingIntl"><img alt="Twitter" src="/Copy of IG44.png" /></a>
            <a href="https://www.youtube.com/@misterkinginternationaltv"><img alt="YouTube" src="/Copy of IG45.png" /></a>
            <a href="#"><img alt="TikTok" src="/Copy of IG46.png" /></a>
          </div>
        </div>
      </div>
      <div className={styles.horizontalDivider} />
    </header>
  );
};

export default Header;