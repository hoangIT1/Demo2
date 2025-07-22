import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./MarkAnthony.module.css";

// TODO: Thay thế nội dung văn bản và đường dẫn ảnh của bạn vào đây.
const contentData = [
  {
    id: 1,
    // Thêm tiêu đề chung và tiêu đề của đoạn văn đầu tiên
    mainContentTitle: "Mark Anthony Backstory: A Journey of Strength, Resilience, and Global Ambition.",
    sectionTitle: "Early Life and Background:",
    text: "Mark Anthony was born into a modest family in the bustling city of Makati, Philippines. These parents gave him a rich of cultures from a very young age. Growing up, Mark was exposed to the best of both parents; he immersed himself in the bustling city life of Makati while adopting the traditions and values ​​of his Filipino heritage. This unique upbringing instilled in him a strong sense of identity, resilience and a deep appreciation of cultural diversity. Graduate in business administration major in human resources development management, currently working as a Human Resources Manager.",
    image: "/Copy of IG12.jpg", 
  },
  {
    id: 2,
    sectionTitle: "Stepping into the World of Fashion and Entertainment:", // Tiêu đề đoạn 2
    text: "Mark's striking looks, a perfect blend of his Filipino background, caught the attention of local modeling agencies in his late teens. He started his modeling career in 2017. His first national pageant was Mister Globe Philippines; he won the pageant as an ambassador of Mister Globe. Given the performances appreciated by his modeling agency, he joined Mister King International 2021 as the second national delegate of the Philippines. His greatest ambition will be to make happy these parents who sacrificed everything for him to be what he has become today, and to return to them all the love they have concentrated on him. The tragic and painful moments of his life were seeing his parents suffer from the coronavirus pandemic when he was in the middle of the Mister King International global competitions.",
    image: "/Copy of IG13.jpg",
  },
  {
    id: 3,
    sectionTitle: "Mister King International Journey:", // Tiêu đề đoạn 3
    miniSectionTitle: "Mark Joins MISTER KING INTERNATIONAL in the midst of a global health crisis, repression and confinement.",
    text: "Mark's varied background and experiences made him the ideal candidate for the Mister King International competition. When he was selected to represent the Philippines, it was not only an honor for him, but the culmination of his journey. He saw this competition as much more than just a beauty contest; for Mark, it was an opportunity to inspire others to embrace their identity and celebrate their uniqueness. Throughout the competition, Mark's story resonated with many people: his journey from a young boy wondering what his place was in the world to a man confident in his identity and assignment. His presence on the international stage has been a testament to the strength that can be gained from accepting one's heritage and using it to build bridges between cultures.",
    image: "/Copy of IG14.jpg",
  },
  {
    id: 4,
    sectionTitle: "Beyond Mister King International:", // Tiêu đề đoạn 4
    text: "After the competition, Kim continued to use her platform to defend social causes that are close to her heart, such as raising awareness of physical well-being which involves the practice of regular physical activity, a source of good health and the preservation of culture. He also became an ambassador for various branded companies, using his image to make a positive impact in communities across the Philippines and beyond. Mark Anthony's story is one of resilience, cultural pride and global ambition. It embodies the spirit of a modern, multicultural world, where diversity is celebrated and identity is a source of strength. As he continues his journey, Mark remains committed to inspiring others to accept themselves as they are and to make a difference in the world around them. Mark Anthony files his Mister King International World titles on September 25, 2025, to continue his professional journey and explore other countries. At the end of his mandate, he will sign his first professional contract with VLTV INDUSTRIE INTERNATIONAL COMPAGNIE SARL, the company in charge of managing the international beauty pageant industry of Mister King International in order to represent the company to engrave the world as first Ambassador of the company. Eager to start his career as a photo model, Mark Anthony thanks to the Mister King international competition to his own line of cosmetic products after being elected during the preliminaries, The perfect man of Mister King international, the company VLTV INDUSTRIE these committed to invest in develop with its skin care department the “Bio Cosmetics Laboratories” the launch of the very first MEN'S PERFECT cosmetic line with Mark Anthony Paz as its muse and ambassador.",
    image: "/Copy of IG15.jpg",
  },
];

// TODO: Thay thế đường dẫn 4 ảnh sẽ hiển thị ở cuối trang
const galleryImages = [
  "/Copy of IG16.jpg",
  "/Copy of IG17.jpg",
  "/Copy of IG18.jpg",
  "/Copy of IG19.jpg",
];

const MarkAnthonyPage: FunctionComponent = () => {
  // Thêm 2 dòng code này
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className={`${styles.pageContainer} page-transition-container ${!isLoaded ? 'is-loading' : ''}`}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
            <h2 className={styles.title}>MARK ANTHONY JULIAN PAZ</h2>
            <h3 className={styles.subtitle}>MISTER KING INTERNATIONAL 2021</h3>
        </div>

        {/* Render 4 cặp nội dung và ảnh */}
        {contentData.map((item) => (
          <section key={item.id} className={styles.contentRow}>
            <div className={styles.textColumn}>
              {/* === HIỂN THỊ TIÊU ĐỀ MỚI === */}
              {/* Chỉ hiển thị tiêu đề chung ở item đầu tiên */}
              {item.mainContentTitle && (
                <h4 className={styles.mainContentTitle}>{item.mainContentTitle}</h4>
              )}
              {/* Hiển thị tiêu đề riêng của mỗi đoạn văn */}
              <h5 className={styles.sectionTitle}>{item.sectionTitle}</h5>
              <h6 className={styles.miniSectionTitle}>{item.miniSectionTitle}</h6>
              <p>{item.text}</p>
            </div>
            <div className={styles.imageColumn}>
              <img src={item.image} alt={`Content ${item.id}`} />
            </div>
          </section>
        ))}

        <section className={styles.bottomGallery}>
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery image ${index + 1}`}
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