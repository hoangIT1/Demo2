import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Dùng để điều hướng
import { Post } from "../../data/blogPosts"; // Import kiểu dữ liệu
import styles from "./BlogPostCard.module.css";

type BlogPostCardProps = {
  post: Post;
};

const BlogPostCard: FunctionComponent<BlogPostCardProps> = ({ post }) => {
  return (
    <Link to={`/press/${post.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={post.image} alt={post.title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          <div className={styles.authorInfo}>
            <div className={styles.avatar}>{post.avatar}</div>
            <div className={styles.meta}>
              <span>{post.author}</span>
              <small>{`${post.date} · ${post.readTime}`}</small>
            </div>
          </div>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardSnippet}>{post.snippet}</p>
        </div>
        <hr className={styles.cardDivider} />
      </div>
    </Link>
  );
};

export default BlogPostCard;