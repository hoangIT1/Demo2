import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogPostDetail.module.css";

const BlogPostDetail: FunctionComponent = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === Number(postId));

  if (!post) {
    return <div>Bài viết không tồn tại!</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <Header sticky={false} />
      <main className={styles.mainContent}>
        {/* --- Thanh điều hướng phụ --- */}
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
        
        {/* --- Nội dung bài viết --- */}
        <article className={styles.article}>
          {/* Thông tin tác giả được đưa lên trên */}
          <div className={styles.authorInfo}>
            <div className={styles.avatar}>{post.avatar}</div>
            <div className={styles.meta}>
              <span>{post.author}</span>
              <small>{`${post.date} · ${post.readTime}`}</small>
            </div>
          </div>
          
          {/* Tiêu đề */}
          <h1 className={styles.title}>{post.title}</h1>

          {/* Ảnh chính */}
          <img src={post.image} alt={post.title} className={styles.mainImage} />

          {/* Thân bài viết */}
          <div
            className={styles.contentBody}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;