import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img}/>
            </div>}
            <span className={styles.date} >10.12.2023</span>
        </div>
        <div className={styles.botton}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
        </div>
      
    </div>
  )
}

export default postCard


