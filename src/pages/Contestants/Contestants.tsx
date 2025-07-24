// src/pages/Contestants/Contestants.tsx

import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Contestants.module.css";
import { useContentful } from "../../hooks/useContentful";
import { ContestantsPageContent } from "../../types"; // Giả sử bạn sẽ thêm type này
import { staticContestantsData } from "../../data/staticContestantsData"; // Giả sử bạn sẽ thêm file này

const ContestantsPage: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Lấy dữ liệu từ Contentful
  const { data: dynamicContent, isLoading, error } = useContentful<ContestantsPageContent>('contestantsPage', 'contestants');

  // Ưu tiên dữ liệu động, fallback về dữ liệu tĩnh nếu có lỗi
  const content = (error || !dynamicContent || Array.isArray(dynamicContent))
    ? staticContestantsData
    : dynamicContent;

  useEffect(() => {
    if (!isLoading) {
      setIsLoaded(true);
    }
    if (error) {
      console.warn("ContestantsPage: Could not fetch from Contentful, using fallback static data.", error);
    }
  }, [isLoading, error]);
  
  // Hiển thị màn hình trắng khi đang tải để đảm bảo hiệu ứng fade-in mượt mà
  if (isLoading) {
    return null;
  }
  
  if (!content) {
    return <div>Error: Could not load page content.</div>;
  }

  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header sticky={false} />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>{content.pageTitle}</h1>
          <p className={styles.paragraph}>
            {content.paragraph}
          </p>
          <p className={styles.comingSoon}>{content.comingSoonText}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContestantsPage;