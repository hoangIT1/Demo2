// src/pages/MarkAnthony/MarkAnthony.tsx

import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./MarkAnthony.module.css";
import { useContentful } from "../../hooks/useContentful";
import { MarkAnthonyPageContent } from "../../types";
import { staticMarkAnthonyData } from "../../data/staticMarkAnthonyData";

const MarkAnthonyPage: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: dynamicContent, isLoading, error } = useContentful<MarkAnthonyPageContent>('markAnthonyPage', 'mark-anthony');

  // Quyết định dữ liệu nào sẽ được hiển thị
  // Ưu tiên dynamicContent, nếu có lỗi hoặc không có dữ liệu thì dùng staticMarkAnthonyData
  const content = (error || !dynamicContent || Array.isArray(dynamicContent)) 
    ? staticMarkAnthonyData 
    : dynamicContent;

  useEffect(() => {
    if (error) {
        console.warn("MarkAnthonyPage: Could not fetch from Contentful, using fallback static data.");
    }
    
    // Khi component được mount, bắt đầu hiệu ứng fade-in
    // Điều này mô phỏng chính xác logic của code cũ
    setIsLoaded(true);

  }, []); // <-- QUAN TRỌNG: Dependency rỗng để chỉ chạy một lần khi component mount
  
  // SỬA LỖI: Không return div trống nữa.
  // Component sẽ render ngay lập tức với dữ liệu fallback (nếu có)
  // và bắt đầu hiệu ứng fade-in.
  // Khi `dynamicContent` tải xong, component sẽ tự re-render với dữ liệu mới.
  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
            <h2 className={styles.title}>{content.mainTitle}</h2>
            <h3 className={styles.subtitle}>{content.subtitle}</h3>
        </div>

        {/* Luôn đảm bảo contentRows là một mảng trước khi map */}
        {content && content.contentRows && content.contentRows.map((item, index) => (
          <section key={item.id} className={styles.contentRow}>
            <div className={styles.textColumn}>
              {index === 0 && content.mainContentTitle && (
                <h4 className={styles.mainContentTitle}>{content.mainContentTitle}</h4>
              )}
              <h5 className={styles.sectionTitle}>{item.sectionTitle}</h5>
              {item.miniSectionTitle && (
                <h6 className={styles.miniSectionTitle}>{item.miniSectionTitle}</h6>
              )}
              <p dangerouslySetInnerHTML={{ __html: item.text.replace(/\n/g, '<br />') }} />
            </div>
            {item.image && (
              <div className={styles.imageColumn}>
                <img src={item.image.image} alt={item.image.title} />
              </div>
            )}
          </section>
        ))}

        <section className={styles.bottomGallery}>
          {content && content.bottomGallery && content.bottomGallery.map((img) => (
            <img
              key={img.id}
              src={img.image}
              alt={img.title}
              className={styles.galleryImage}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarkAnthonyPage;