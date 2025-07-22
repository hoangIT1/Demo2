// src/pages/BlogPostDetail/BlogPostDetail.tsx

import { FunctionComponent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient, Entry } from "contentful";
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogPostDetail.module.css";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

const BlogPostDetail: FunctionComponent = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Entry<any> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (postId) {
      client.getEntry(postId, { include: 2 })
        .then((entry) => {
          setPost(entry);
        })
        .catch(console.error)
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [postId]);

  if (isLoading) {
    return <div></div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  const postFields = post.fields;
  
  // TÙY CHỌN RENDER CHO HÌNH ẢNH
  const renderOptions: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        // *** THAY ĐỔI QUAN TRỌNG: Bọc ảnh trong một div để có thể style ***
        return (
          <div className={styles.embeddedAssetWrapper}>
            <img src={`https:${file.url}`} alt={title || ''} />
          </div>
        );
      },
    },
  };

  return (
    <div className={styles.pageContainer}>
      <Header sticky={false} />
      <main>
        <nav className={styles.subNav}>
          <div className={styles.subNavContent}>
            <a href="/press" className={styles.allPostsLink}>All Posts</a>
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
          
          <h1 className={styles.title}>{String(postFields.title)}</h1>
          {/* <img src={`https:${postFields.image.fields.file.url}`} alt={postFields.title} className={styles.mainImage} /> */}

          <div className={styles.contentBody}>
            {documentToReactComponents(postFields.content as Document, renderOptions)}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostDetail;
