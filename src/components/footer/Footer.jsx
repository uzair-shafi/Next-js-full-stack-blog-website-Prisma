import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Annablog</h1>
        </div>
        <p className={styles.desc}>
        Welcome to Anna Blog, your online space for self-expression and shared experiences. Dive into a community where voices unite to tell diverse stories, share insights, and explore a myriad of topics. Join us, log in, and let your thoughts take flight. Your story matters here at Anna Blog
        </p>
        <div className={styles.icons}>
          <Image className={styles.yt} src="/facebook.png" alt="" width={18} height={18} />
          <Image className={styles.yt} src="/instagram.png" alt="" width={18} height={18} />
          <Image className={styles.yt} src="/tiktok.png" alt="" width={18} height={18} />
          <Image className={styles.yt} src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
