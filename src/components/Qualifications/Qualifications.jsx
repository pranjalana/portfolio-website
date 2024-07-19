import React from "react";

import styles from "./Qualifications.module.css";
import { getImageUrl } from "../../utils";

export const Qualifications = () => {
  return (
    <section className={styles.container} id="qualifications">
      <h2 className={styles.title}>Qualifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}> 
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h1><a className={styles.uniname} href="https://www.pdpu.ac.in/">Pandit Deendayal Energy University, Gandhinagar</a></h1>
              <h3>B. Tech in Computer Science & Engineering (2007-2019)</h3>
              <p>CGPA: 8.63</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h2><a className={styles.uniname} href="http://www.gpah.cteguj.in/">Government Polytechnic, Ahmedabad</a></h2>
              <h3>Diploma in Computer Engineering (2019-2022)</h3>
              <p>CGPA: 9.46</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h2><a className={styles.uniname} href="https://www.thenewtulipinternationalschool.com/">The New Tulip Insternational School</a></h2>
              <h3>Central Board of Secondary Education (2022-2025)</h3>
              <p>Percentage: 85%</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};