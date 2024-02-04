import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";
const postCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date} >10.12.2023</span>
        </div>
        <div className={styles.botton}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque similique laboriosam quos impedit blanditiis ad voluptatibus aperiam? Reiciendis porro dolorem debitis sunt. Nulla veritatis quas tempore recusandae unde ullam.</p>
            <Link className={styles.link} href="/blog/post">READ MORE</Link>
        </div>
      
    </div>
  )
}

export default postCard


