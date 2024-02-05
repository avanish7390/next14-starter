"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./contact.module.css";



const ContactPage = () => {
  const[isClient, setIsclient] = useState(false)

  
  useEffect(()=>{
    setIsclient(true);
    
  },[])
  
  const a = Math.random();
  console.log(a)
  
  console.log("it works here!")
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {isClient && a}
        
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button onClick={()=>console.log("clicked")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
