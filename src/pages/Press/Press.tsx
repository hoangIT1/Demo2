// src/pages/Press/Press.tsx

import { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Press.module.css";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";
import { BlogPost } from "../../types";
import { useContentful } from "../../hooks/useContentful";
import { blogPosts as fallbackPosts } from "../../data/blogPosts";

const PressPage: FunctionComponent = () => {
  const { data: dynamicPosts, isLoading, error } = useContentful<BlogPost>('blogPost');

  const postsToRender = error || !dynamicPosts ? fallbackPosts : dynamicPosts;

  if (error || !dynamicPosts) {
      console.log("Using fallback (static) data for Press page.");
  } else {
      console.log("Using dynamic data from Contentful for Press page.");
  }

  return (
    // THÊM LOGIC CLASS VÀO ĐÂY:
    <div className={`${styles.pageContainer} page-transition-container ${isLoading ? 'is-loading' : ''}`}>
      <Header sticky={false} />
      <main>
        {/* --- Phần Banner Đen --- */}
        <section className={styles.bannerSection}>
          <div className={styles.bannerContent}>
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

        {/* --- Thanh điều hướng phụ --- */}
        <nav className={styles.subNav}>
          <div className={styles.subNavContent}>
            <a href="/press" className={styles.allPostsLink}>
              All Posts
            </a>
          </div>
        </nav>

        {/* --- Phần hiển thị Blog --- */}
        <section className={styles.blogSection}>
          <div className={styles.blogGrid}>
            {/* Logic render bài viết giữ nguyên */}
            {postsToRender.map((post) => (
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