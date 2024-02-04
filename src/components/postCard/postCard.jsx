import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="/post.png" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date} >10.12.2023</span>
        </div>
        <div className={styles.botton}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Desc</p>
            <Link href="/blog/post">READ MORE</Link>
        </div>
      
    </div>
  )
}

export default postCard
