import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./post-card.module.css";

interface Props {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      cover_image: string;
    };
    content: string;
  };
}

const PostCard: React.FC<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <article
      className={styles.card}
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <div className={styles.image}>
        <Image
          src={post.frontmatter.cover_image}
          alt="post"
          layout="responsive"
          objectFit="cover"
          width={800}
          height={1100}
        />
      </div>
      <p className={styles.date}>{post.frontmatter.date}</p>
      <h3 className={styles.title}>{post.frontmatter.title}</h3>
    </article>
  );
};

export default PostCard;