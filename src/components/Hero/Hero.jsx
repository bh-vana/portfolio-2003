import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bhavana</h1>
        <p className={styles.description}>
          I'm a full-stack developer I work with React and Node.js, expertly handling both front-end and back-end technologies to identify and resolve bugs affecting performance and reliability. Let's build something amazing together!


        </p>
        <a href="mailto:bhavanaappikonda2526@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/girl.png")}
         alt="Hero image of me"
         className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
