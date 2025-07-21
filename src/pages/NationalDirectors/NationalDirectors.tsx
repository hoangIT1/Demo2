import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./NationalDirectors.module.css";

const NationalDirectorsPage: FunctionComponent = () => {
  // Dữ liệu mẫu cho các giám đốc. Bạn có thể thêm nhiều giám đốc vào mảng này.
  const directors = [
    {
      name: "Sergio Meso",
      image: "/Copy of IG23.jpg", 
    },
    // Thêm các giám đốc khác vào đây nếu muốn
    // {
    //   name: "Anthony Santana",
    //   image: "/director-sample-2.png",
    // }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>Our National Directors.</h1>
          <p className={styles.introText}>
            We are delighted to announce our official National Directors for the 2nd Mister King International Competition.
          </p>
          <p className={styles.introText}>
            To compete for your home country, please visit the corresponding website below to learn how to apply and the application deadlines.
          </p>
          <p className={styles.introText}>
            If you are interested in becoming a National Director and would like to send a candidate from your home country for the 2023 / 2nd Mister King International Competition, please send your company profile to 
            <br />
            <a href="mailto:ceo@misterkinginternational.com">ceo@misterkinginternational.com</a>.
          </p>
          <p className={styles.introText}>
            Thank you,
            <br />
            Mister International Organization
          </p>

          <div className={styles.directorsGrid}>
            {/* Lặp qua mảng dữ liệu để tạo các thẻ giám đốc */}
            {directors.map((director, index) => (
              <div key={index} className={styles.directorCard}>
                <img
                  src={director.image}
                  alt={`National Director ${director.name}`}
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