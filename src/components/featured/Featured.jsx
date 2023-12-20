import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Anna Blake here!</b> Discover my stories and share yours.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Chic Chronicles: Unveiling the Timeless Elegance of Fashion.</h1>
          <p className={styles.postDesc}>
          Step into a world where threads weave tales of timeless elegance and self-expression. In the realm of fashion, each stitch narrates a story, and every ensemble becomes a canvas for personal style.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
