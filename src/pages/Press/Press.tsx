import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Press.module.css";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard"; // Import component thẻ
import { blogPosts } from "../../data/blogPosts"; // Import dữ liệu

const PressPage: FunctionComponent = () => {
  return (
    <div className={styles.pageContainer}>
      <Header sticky={false} />
      <main>
        {/* --- Phần Banner Đen --- */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerContent}>
            
            {/* Cột trái - Tiêu đề lớn */}
            <div className={styles.leftColumn}>
              <h1 className={styles.title}>
                Mister King
                <br />
                International
                <br />
                Organization
                <br />
                Press Site
              </h1>
            </div>

            {/* Cột phải - Văn bản */}
            <div className={styles.rightColumn}>
              <p className={styles.paragraph}>
                Welcome to the Mister King International Organization Press Site. This
                site is intended for members of the press covering Mister King
                International. We have information for those who are planning to
                be on-location at our competition and for those who will be
                covering us remotely.
              </p>
              <p className={styles.paragraph}>
                On this site you will find press releases to aid you in your
                coverage.
              </p>
              <p className={styles.paragraph}>
                To get started, click on the press releases below to see the
                news feed.
              </p>
              <hr className={styles.divider} />
            </div>
          </div>
        </section>

        {/* --- Các phần khác của trang Press sẽ được thêm vào đây --- */}
        +        {/* --- Thanh điều hướng phụ --- */}
        <nav className={styles.subNav}>
          <div className={styles.subNavContent}>
            <a href="/press" className={styles.allPostsLink}>
              All Posts
            </a>
            {/* <div className={styles.searchContainer}>
              <div className={styles.searchIcon} />
            </div> */}
          </div>
        </nav>

        <section className={styles.blogSection}>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default PressPage;