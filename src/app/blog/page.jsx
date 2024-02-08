import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCH DATA WITH API

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {

  //FETCH DATA WITH API
  const posts = await getData();

  //FETCH DATA WITHOUT API
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>

      ))}
    </div>
  );
};

export default BlogPage;
