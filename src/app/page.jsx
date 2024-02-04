import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
    return (
    <div className={styles.container}>
     <div className={styles.textcontainer}>
        <h1 className={styles.title}>Creative Thoughs Agency.</h1>
        <p className={styles.desc}>
            Lorem, ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc et dolore magna aliqua. Ut enim ad minim ven quis nostrud ex ea commodo consequat.
        </p>

        <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
         <Image src="/brands.png" alt="" fill className={styles.brandImg}/>

     </div>

     </div>

     <div className={styles.imgcontainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>

     </div>
     
    </div>
    );
    
};

export default Home;