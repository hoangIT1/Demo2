import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Competition.module.css";

const CompetitionPage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        {/* Container để căn giữa toàn bộ nội dung */}
        <div className={styles.contentWrapper}>
          
          {/* Title to rõ ràng */}
          <h1 className={styles.mainTitle}>MISTER KING INTERNATIONAL®</h1>
          <h2 className={styles.subTitle}>COMPETITION DETAILS</h2>

          {/* Đoạn văn bản đầu tiên */}
          <p className={styles.paragraph}>
            2023’s highly-anticipated event will feature 40 men from around the
            globe vying for the job of Mister King International, selected via
            events including personal statements, in-depth interviews, evening
            wear, and swimwear. The evening will culminate with the 1st Mister
            King International, Mark Anthony, crowning his successor.
          </p>
          <p className={styles.date}>September 25, 2025</p>

          {/* Dòng kẻ ngang */}
          <hr className={styles.divider} />

          {/* Đoạn text màu cam vàng */}
          <p className={styles.highlightText}>
            Mister King International 2023
          </p>

          <p className={styles.highlightText}>
            Presented by
          </p>

          {/* Bức ảnh đầu tiên */}
          <img
            src="/Picture2.png" // TODO: Thay thế ảnh của bạn
            alt="Competition Stage"
            className={styles.image}
          />
          
          {/* Subtitle */}
          <h3 className={styles.sectionTitle}>Mister King International 2023</h3>
          <h3 className={styles.sectionTitle}>Upcoming Events</h3>
          
          {/* Minisubtitle */}
          <p className={styles.miniSubtitle}>
            No events at the moment
          </p>

          {/* Ảnh 2 và 3 */}
          <img
            src="/Copy of IG0.png"
            alt="Contestants in swimwear"
            className={styles.image}
          />
          <img
            src="/Picture3.png"
            alt="Contestants in evening wear"
            className={styles.image}
          />

          {/* PHẦN "OUR SPONSORS" GIỮ NGUYÊN */}
          <div className={styles.sponsorSection}>
            <h3 className={styles.sectionTitle}>OUR SPONSORS</h3>
            <div className={styles.finalImageContainer}>
              <img 
                src="/Copy of IG20.jpg"
                alt="Sponsor 1" 
                className={styles.finalImage} 
              />
              <img 
                src="/Copy of IG21.jpg"
                alt="Sponsor 2" 
                className={styles.finalImage} 
              />
              <img 
                src="/Copy of IG22.jpg"
                alt="Sponsor 3" 
                className={styles.finalImage} 
              />
            </div>
          </div>

          {/* PHẦN "SUPPORT BY" ĐÃ ĐƯỢC CẬP NHẬT */}
          <div className={styles.sponsorSection}>
            <h3 className={styles.sectionTitle}>Support By</h3>
            {/* Sử dụng class mới cho container */}
            <div className={styles.supportByContainer}>
              {/* Sử dụng class mới cho từng ảnh */}
              <img src="/Copy of IG1.png" alt="Support 1" className={styles.supportByImage} />
              <img src="/Copy of IG29.png" alt="Support 2" className={styles.supportByImage} />
              <img src="/Copy of IG30.jpg" alt="Support 3" className={styles.supportByImage} />
              <img src="/Copy of IG31.jpg" alt="Support 4" className={styles.supportByImage} />
              <img src="/Copy of IG32.jpg" alt="Support 5" className={styles.supportByImage} />
              <img src="/Copy of IG33.jpg" alt="Support 6" className={styles.supportByImage} />
              <img src="/Copy of IG34.jpg" alt="Support 7" className={styles.supportByImage} />
              <img src="/Copy of IG28.png" alt="Support 8" className={styles.supportByImage} />
              <img src="/Copy of IG35.png" alt="Support 9" className={styles.supportByImage} />
              <img src="/Copy of IG36.jpg" alt="Support 10" className={styles.supportByImage} />
              <img src="/Copy of IG37.jpg" alt="Support 11" className={styles.supportByImage} />
              <img src="/Copy of IG38.jpg" alt="Support 12" className={styles.supportByImage} />
              <img src="/Copy of IG39.jpg" alt="Support 13" className={styles.supportByImage} />
              <img src="/Copy of IG40.jpg" alt="Support 14" className={styles.supportByImage} />
              <img src="/Copy of IG41.jpg" alt="Support 15" className={styles.supportByImage} />
            </div>
          </div>

        </div>
      </main>
      <hr className={styles.footerDivider} />
      <Footer />
    </div>
  );
};

export default CompetitionPage;