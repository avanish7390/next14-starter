import { getPost } from "@/lib/data";
// import { Post } from "@/lib/models";
import PostUser from "@/components/postUser/postUser";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./singlepost.module.css";



// FETCH DATA WITH AN API

// const getData = async (slug)=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if(!res.ok){
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }





const SinglePostPage = async ({params}) => {
  
    const {slug} = params;
     // FETCH DATA WITH AN API
    // const post = await getData(slug);
        
    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);

    console.log(post);
    
    return (
      <div className={styles.container}>
       {post.img &&  <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt=""
            fill
            className={styles.img}
          />
        </div>}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            
            {post && (<Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
            </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
            </div>
          </div>
          <div className={styles.content}>
          {post.desc}
          </div>
        </div>
      </div>
    );
  };
  
  
  export default SinglePostPage;