import React from "react";

import styles from "./Qualifications.module.css";
import { getImageUrl } from "../../utils";

export const Qualifications = () => {
  return (
    <section className={styles.container} id="qualifications">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>

          {/* Master's */}
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Education icon"
            />
            <div className={styles.aboutItemText}>
              <h1>
                <a
                  className={styles.uniname}
                  href="https://www.ntu.edu.sg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nanyang Technological University, Singapore
                </a>
              </h1>
              <h3>Master of Science in Cybersecurity (2026-Present)</h3>
              <p>College of Computing and Data Science (CCDS)</p>
            </div>
          </li>

          {/* Bachelor's */}
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Education icon"
            />
            <div className={styles.aboutItemText}>
              <h1>
                <a
                  className={styles.uniname}
                  href="https://www.pdeu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pandit Deendayal Energy University, Gandhinagar
                </a>
              </h1>
              <h3>B.Tech in Computer Science & Engineering (2022-2025)</h3>
              <p>CGPA: 8.72</p>
            </div>
          </li>

          {/* Diploma */}
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Education icon"
            />
            <div className={styles.aboutItemText}>
              <h2>
                <a
                  className={styles.uniname}
                  href="http://www.gpahmedabad.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Government Polytechnic, Ahmedabad
                </a>
              </h2>
              <h3>Diploma in Computer Engineering (2019-2022)</h3>
              <p>CGPA: 9.46</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};