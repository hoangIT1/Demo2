// src/pages/HomePage/HomePage.tsx
import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.css";

// Import hook và kiểu dữ liệu
import { useContentful } from "../../hooks/useContentful";
import { HomepageContent } from "../../types";

const HomePage: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sử dụng hook chung: fetch content type 'homepage' với slug là 'home'
  // Ép kiểu `content` thành HomepageContent
  const { data: content, isLoading, error } = useContentful<HomepageContent>('homepage', 'home');

  useEffect(() => {
    if (!isLoading) {
      setIsLoaded(true);
    }
  }, [isLoading]);

  if (isLoading) {
    return <div></div>; // Giữ màn hình trắng khi tải
  }

  if (error || !content || Array.isArray(content)) {
    return <div>Error: Could not load page content.</div>;
  }

  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header />

      <main className={styles.mainContent}>
        {/* === Hero Section === */}
        <section className={`${styles.heroSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            {/* Thay thế \n bằng <br> */}
            <h1 className={styles.mainTitle} dangerouslySetInnerHTML={{ __html: content.heroTitle.replace(/\n/g, '<br />') }} />
            <h2 className={styles.subTitle}>{content.heroSubtitle}</h2>
          </div>
        </section>

        {/* === SLIDER === */}
        <ImageSlider slides={content.imageSliderSlides} />

        {/* === Who We Are & Initiatives Section === */}
        <section className={`${styles.infoSection} ${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>{content.whoWeAreTitle}</h2>
            <p className={styles.paragraph}>{content.whoWeAreParagraph}</p>
            <h2 className={styles.sectionTitle}>{content.ourInitiativesTitle}</h2>
            <p className={styles.paragraph}>{content.ourInitiativesParagraph}</p>
          </div>
        </section>

        {/* Full width image Section */}
        {content.fullWidthImage && (
          <section className={styles.infoSection}>
            <img
              className={styles.fullWidthImage}
              alt={content.fullWidthImage.title}
              src={content.fullWidthImage.image}
            />
          </section>
        )}

        {/* === What Drives Us Section === */}
        <section className={`${styles.sectionPadding}`}>
          <div className={styles.centeredContent}>
            <h2 className={styles.sectionTitle}>{content.whatDrivesUsTitle}</h2>
            <p className={styles.paragraph}>{content.whatDrivesUsParagraph}</p>
          </div>
          <div className={styles.twoColumns}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{content.runForMenTitle}</h3>
              <p className={styles.paragraph}>{content.runForMenParagraph}</p>
              <div className={styles.imageRow}>
                {content.runForMenImages.map(img => (
                  <img key={img.id} className={styles.columnImage} alt={img.title} src={img.image} />
                ))}
              </div>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>{content.creatingOpportunitiesTitle}</h3>
              <p className={styles.paragraph}>{content.creatingOpportunitiesParagraph}</p>
              {content.creatingOpportunitiesImage && (
                <img className={styles.columnImage} alt={content.creatingOpportunitiesImage.title} src={content.creatingOpportunitiesImage.image} />
              )}
            </div>
          </div>
        </section>

        {/* === Split Section === */}
        <section className={styles.splitSection}>
          <div className={styles.splitTextColumn}>
            <div className={styles.splitTextContent}>
              <h3 className={styles.splitTitle}>{content.splitSectionTitle}</h3>
              {content.splitSectionParagraphs.map((p, index) => (
                <p key={index} className={styles.splitParagraph}>{p}</p>
              ))}
            </div>
          </div>
          {content.splitSectionImage && (
            <div className={styles.splitImageColumn}>
              <img src={content.splitSectionImage.image} alt={content.splitSectionImage.title} className={styles.splitImage} />
            </div>
          )}
        </section>

        {/* === GIỮ LẠI SUBSCRIBE FORM === */}
        <Section />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;