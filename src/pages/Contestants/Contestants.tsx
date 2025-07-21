import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Contestants.module.css";

const ContestantsPage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header sticky={false} />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>Let Meet the 2023 Contestants</h1>
          <p className={styles.paragraph}>
            2023’s highly-anticipated event will feature 40 men from around 
            the globe vying for the job of Mister King International, selected via events including personal statements, 
            in-depth interviews, evening wear, and swimwear. 
            The evening will culminate with the 1st Mister King International, Mark Anthony, crowning his successor.
          </p>
          <p className={styles.comingSoon}>COMING SOON</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContestantsPage;