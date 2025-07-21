// src/pages/WLight1.tsx
import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import ImageSlider from "../../components/ImageSlider/ImageSlider"; // <--- 1. IMPORT COMPONENT MỚI
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        {/* === Hero Section === */}
        <section className={`${styles.heroSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h1 className={styles.mainTitle}>
              MISTER KING
              <br />
              INTERNATIONAL
            </h1>
            <h2 className={styles.subTitle}>- Become King of All Men's -</h2>
          </div>
        </section>

        {/* === SLIDER ĐƯỢC CHÈN VÀO ĐÂY === */}
        <ImageSlider /> 

        {/* === Who We Are & Initiatives Section === */}
        <section className={`${styles.infoSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
            
            <p className={styles.paragraph}>
              The Mister King International Organization (MKIO) is a global, inclusive organization that celebrates all cultures, backgrounds and religions. We create and provide a safe space for men to share their stories and drive impact personally, professionally, and philanthropically. The men who participate in this international platform serve as inspirational leaders and role models to their communities and fans around the world. 
            </p>
            <h2 className={styles.sectionTitle}>OUR INITIATIVES</h2>
            <p className={styles.paragraph}>
              MKIO prioritizes contributing to our communities through an international platform of charitable partnerships. As leaders and role models, our delegates and title holders create positive change through volunteering, fundraising and advocacy, from environmental awareness to an eco-friendly planet, against global warming and environmental protection.
            </p>
          </div>
          </section>
        
        {/* Full width image Section*/}
        <section className={styles.infoSection}>
          <img
            className={styles.fullWidthImage}
            alt="Stage with contestants"
            src="/Picture1.jpg"
          />
        </section>

        {/* ... các section còn lại giữ nguyên ... */}
        
        <section className={`${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>WHAT DRIVES US</h2>
            <p className={styles.paragraph}>
              The Mister King International Organization exists to advocate for a future forged by men - men with the courage to push the limits of what’s possible, who are curious enough to make world-shaking discoveries, and audacious enough to do this over and over. We believe that the future of humanity rests on reaching gender equity around the world.
            </p>
          </div>

          <div className={styles.twoColumns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>RUN FOR MEN</h3>
              <p className={styles.paragraph}>
                MKIO enables men to realize their personal and professional ambitions and develop their self-confidence as a catalyst for future success.  The MKIO community is a family of brotherhood committed to encouraging one another.  We celebrate beauty, in all its forms, and provide the tools that help men feel their most beautiful.
              </p>
              <div className={styles.imageRow}>
                <img
                  className={styles.columnImage}
                  alt="Run for men"
                  src="/Copy of IG8.jpg"
                />
                <img
                  className={styles.columnImage}
                  alt="Run for men"
                  src="/Copy of IG9.jpg"
                />
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>CREATING OPPORTUNITIES</h3>
              <p className={styles.paragraph}>
                MKIO delegates and incumbents are able to cultivate their personal, professional, and philanthropic goals. These young men are forward-thinking and motivated not only to talk about change, but also to conceptualize and implement social projects beneficial to the well-being of their communities and even the world.
              </p>
              <img
                className={styles.columnImage}
                alt="Creating opportunities"
                src="/Copy of IG7.jpg"
              />
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* === DÁN SECTION MỚI CỦA BẠN VÀO ĐÂY === */}
        <section className={styles.splitSection}>

          <div className={styles.splitTextColumn}>
            <div className={styles.splitTextContent}>
              <h3 className={styles.splitTitle}>Mister King International</h3>
              <p className={styles.splitParagraph}>
                Created in 2019
                <br />
                Mister King International is the World's Most Prestigious Male Pageant
              </p>
              <p className={styles.splitParagraph}>
                More than 50 Countries
              </p>
              <p className={styles.splitParagraph}>
                100 National Preliminary Pageants Throughout the World
              </p>
              <p className={styles.splitParagraph}>
                Over Thousand Contestants Each Year and 1 Mister International
                Finals Show
              </p>
              <p className={styles.splitParagraph}>
                All International Show Watched by Millions of People WorldWide
                Annually
              </p>
            </div>
          </div>

          <div className={styles.splitImageColumn}>
            <img
              src="/Copy of IG10.jpg" // <-- Bạn có thể thay đổi ảnh này
              alt="Mister International Stage"
              className={styles.splitImage}
            />
          </div>

        </section>
        {/* ========================================================== */}

        <Section />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;