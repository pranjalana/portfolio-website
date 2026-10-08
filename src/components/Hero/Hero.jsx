import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import TypedText from "./TypedText";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <h2 className={styles.title}>
          <i>Hallo,</i> ich bin Pranjal Patel
        </h2>

        <p className={styles.description}>
          MSc Cybersecurity student at Nanyang Technological University (NTU),
          with a background in Computer Science and a growing focus on
          cybersecurity, network security, and security operations.
        </p>

        <p className={styles.description}>
          I enjoy understanding how systems break, how attacks work, and how
          they can be detected and defended. I'm building hands-on experience
          across security monitoring, networking, cryptography, and
          cybersecurity tooling while working toward a career in cybersecurity.
        </p>

        <p className={styles.element}>
          <TypedText />
        </p>

        <div className={styles.buttons}>
          <button className={styles.resumeBtn}>
            <a
              href="https://drive.google.com/file/d/1Md3SIMLuBjx7nn0ehj4rU58QpgB3ifGM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>

          <button className={styles.contactBtn}>
            <a href="mailto:pranjalpatel0903@gmail.com">
              Contact Me
            </a>
          </button>
        </div>

      </div>

      <img
        src={getImageUrl("hero/pranjal_patel.jpg")}
        alt="Pranjal Patel"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};