import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
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
      <div className={styles.imgcontainer}>
        <Image src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill  
        className={styles.img}/>
      </div>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>

        <Image className={styles.avatar} src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50}/>

         {post && (

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
          </Suspense>
          )}

        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.04.2024</span>
        </div>



        </div>
        <div className={styles.content}>
          {post?.body}
        </div>
      </div>

    </div>
    );
  };
  
  export default SinglePostPage;