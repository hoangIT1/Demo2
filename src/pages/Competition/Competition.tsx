// src/pages/Competition/Competition.tsx

import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Competition.module.css";
import { useContentful } from "../../hooks/useContentful";
import { CompetitionPageContent } from "../../types";
import { staticCompetitionData } from "../../data/staticCompetitionData";

const CompetitionPage: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: dynamicContent, isLoading, error } = useContentful<CompetitionPageContent>('competitionPage', 'competition');

  const content = (error || !dynamicContent || Array.isArray(dynamicContent))
    ? staticCompetitionData
    : dynamicContent;

  useEffect(() => {
    if (error) {
        console.warn("CompetitionPage: Could not fetch from Contentful, using fallback static data.");
    }
    
    // SỬA LỖI Ở ĐÂY:
    // Logic này mô phỏng chính xác code cũ để kích hoạt hiệu ứng fade-in khi component được mount.
    setIsLoaded(true);
  }, []); // <-- QUAN TRỌNG: Dependency rỗng để chỉ chạy một lần.

  // SỬA LỖI: Không return div trống nữa. Component sẽ render ngay lập tức.
  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          
          <h1 className={styles.mainTitle}>{content.mainTitle}</h1>
          <h2 className={styles.subTitle}>{content.subTitle}</h2>

          <p className={styles.paragraph}>{content.introParagraph}</p>
          <p className={styles.date}>{content.eventDate}</p>

          <hr className={styles.divider} />

          <p className={styles.highlightText}>{content.highlightText1}</p>
          <p className={styles.highlightText}>{content.highlightText2}</p>

          {content.presentedByImage && (
            <img
              src={content.presentedByImage.image}
              alt={content.presentedByImage.title}
              className={styles.image}
            />
          )}
          
          <h3 className={styles.sectionTitle}>{content.eventsTitle1}</h3>
          <h3 className={styles.sectionTitle}>{content.eventsTitle2}</h3>
          
          <p className={styles.miniSubtitle}>{content.eventsSubtitle}</p>

          {content.image1 && (
            <img
              src={content.image1.image}
              alt={content.image1.title}
              className={styles.image}
            />
          )}
          {content.image2 && (
            <img
              src={content.image2.image}
              alt={content.image2.title}
              className={styles.image}
            />
          )}

          <div className={styles.sponsorSection}>
            <h3 className={styles.sectionTitle}>{content.sponsorsTitle}</h3>
            <div className={styles.finalImageContainer}>
              {content.sponsorImages && content.sponsorImages.map(img => (
                <img 
                  key={img.id}
                  src={img.image}
                  alt={img.title} 
                  className={styles.finalImage} 
                />
              ))}
            </div>
          </div>

          <div className={styles.sponsorSection}>
            <h3 className={styles.sectionTitle}>{content.supportByTitle}</h3>
            <div className={styles.supportByContainer}>
              {content.supportByImages && content.supportByImages.map(img => (
                <img 
                  key={img.id}
                  src={img.image} 
                  alt={img.title} 
                  className={styles.supportByImage} 
                />
              ))}
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