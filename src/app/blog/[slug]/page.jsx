import Image from "next/image";
import styles from "./singlepost.module.css";
const SinglePostPage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill  
        className={styles.img}/>
      </div>
      <div className={styles.textcontainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>

        <Image className={styles.avatar} src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-woman-behind-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50}/>


        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>avanish</span>
        </div>

        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.04.2024</span>
        </div>



        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil asperiores animi quam minima. Saepe, laboriosam? Odio id quo odit nihil saepe sunt consequuntur quis, exercitationem, praesentium repellendus eveniet? Corrupti, magni?
        </div>
      </div>

    </div>
    );
  };
  
  export default SinglePostPage;