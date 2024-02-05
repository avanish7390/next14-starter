import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date} >10.12.2023</span>
        </div>
        <div className={styles.botton}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      
    </div>
  )
}

export default postCard


