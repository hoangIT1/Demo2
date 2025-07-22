// src/pages/BlogPostDetail/BlogPostDetail.tsx

import { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogPostDetail.module.css";

// --- Cấu hình client ---
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
// ----------------------

const BlogPostDetail: FunctionComponent = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (postId) {
      client.getEntry(postId)
        .then((entry) => {
          setPost(entry);
        })
        .catch(console.error);
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const postFields = post.fields;

  return (
    <div className={styles.pageContainer}>
      <Header sticky={false} />
      <main>
        <nav className={styles.subNav}>
          <div className={styles.subNavContent}>
            <a href="/press" className={styles.allPostsLink}>
              All Posts
            </a>
          </div>
        </nav>
        
        <article className={styles.article}>
          <div className={styles.authorInfo}>
            <div className={styles.avatar}>{postFields.avatar}</div>
            <div className={styles.meta}>
              <span>{postFields.author}</span>
              <small>{`${new Date(postFields.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} · ${postFields.readTime}`}</small>
            </div>
          </div>
          
          <h1 className={styles.title}>{postFields.title}</h1>

          <img src={`https:${postFields.image.fields.file.url}`} alt={postFields.title} className={styles.mainImage} />

          <div
            className={styles.contentBody}
            dangerouslySetInnerHTML={{ __html: documentToHtmlString(postFields.content) }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;