import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
  
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
    
          <Link
            href="/blog?cat=fashion"
            className={`${styles.category} ${styles.fashion}`}
            
          >
            
              <Image
                src="/fashion.jpg"
                alt=""
                width={42}
                height={42}
                className={styles.image}
              />
            
            Fashion
          </Link>


          <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
          
        >
          
            <Image
              src="/style.jpg"
              alt=""
              width={42}
              height={42}
              className={styles.image}
            />
          
          Style
        </Link>

        <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.culture}`}
        
      >
        
          <Image
            src="/culture.jpg"
            alt=""
            width={42}
            height={42}
            className={styles.image}
          />
        
        Culture
      </Link>

      <Link
      href="/blog?cat=cooking"
      className={`${styles.category} ${styles.cooking}`}
      
    >
      
        <Image
          src="/cooking.jpg"
          alt=""
          width={42}
          height={42}
          className={styles.image}
        />
      
      Cooking
    </Link>

    <Link
    href="/blog?cat=travel"
    className={`${styles.category} ${styles.travel}`}
    
  >
    
      <Image
        src="/travel.jpg"
        alt=""
        width={42}
        height={42}
        className={styles.image}
      />
    
    Travel
  </Link>

  <Link
  href="/blog?cat=food"
  className={`${styles.category} ${styles.food}`}
  
>
  
    <Image
      src="/food.jpg"
      alt=""
      width={42}
      height={42}
      className={styles.image}
    />
  
  Food
</Link>
          
      </div>
    </div>
  );
};

export default CategoryList;
