// src/pages/NationalDirectors/NationalDirectors.tsx

import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./NationalDirectors.module.css";
import { useContentful } from "../../hooks/useContentful";
import { NationalDirectorsPageContent } from "../../types";
import { staticNationalDirectorsData } from "../../data/staticNationalDirectorsData";

const NationalDirectorsPage: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: dynamicContent, isLoading, error } = useContentful<NationalDirectorsPageContent>('nationalDirectorsPage', 'national-directors');

  const content = (error || !dynamicContent || Array.isArray(dynamicContent))
    ? staticNationalDirectorsData
    : dynamicContent;

  useEffect(() => {
    if (!isLoading) {
      setIsLoaded(true);
    }
    if (error) {
        console.warn("NationalDirectorsPage: Could not fetch from Contentful, using fallback static data.", error);
    }
  }, [isLoading, error]);

  if (isLoading) {
    return null;
  }
  
  if (!content) {
    return <div>Error: Could not load page content.</div>;
  }

  // Tách các đoạn văn để xử lý riêng đoạn cuối cùng
  const introParagraphs = content.introParagraphs || [];
  const allButLastParagraph = introParagraphs.slice(0, -1);
  const lastParagraph = introParagraphs.slice(-1)[0];

  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>{content.mainTitle}</h1>
          
          {/* Render các đoạn văn bản đầu tiên bình thường */}
          {allButLastParagraph.map((paragraph, index) => (
            <p key={index} className={styles.introText}>
              {paragraph}
            </p>
          ))}
          
          {/* Gộp đoạn văn cuối cùng và email vào chung một thẻ <p> */}
          {lastParagraph && (
            <p className={styles.introText}>
              {lastParagraph}
              <br />
              <a href={`mailto:${content.emailAddress}`}>{content.emailAddress}</a>
            </p>
          )}

          {/* Render phần chữ ký ("Thank you") như một đoạn văn riêng biệt */}
          <p className={styles.introText}>
            {content.signature}
            <br />
            {content.organizationName}
          </p>

          <div className={styles.directorsGrid}>
            {content.directors && content.directors.map((director) => (
              <div key={director.id} className={styles.directorCard}>
                <img
                  src={director.image}
                  alt={director.title || 'National Director'}
                  className={styles.directorImage}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NationalDirectorsPage;