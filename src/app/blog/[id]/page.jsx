import React from 'react';
import styles from "./page.module.css"

const BlogPost = () => {
  return (
    <div className={styles.container}>
     <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
        <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo nihil expedita est maiores. Incidunt temporibus architecto nobis velit iure.</p>
        <div className={styles.author}></div>
      </div>
     </div>
    </div>
  );
}

export default BlogPost;
































