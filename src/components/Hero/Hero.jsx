import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";
import TypedText from "./TypedText";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}><i>Hallo,</i> ich bin Pranjal Patel</h2>
                <p className={styles.description}>A recent B.Tech graduate in CSE from PDEU (Gandhinagar), who is passionately carving a path into the world of cybersecurity. </p>
                <p className={styles.description} >To me, security isn't just about firewalls and encryption; it's about understanding people. My obsession with psychology books and podcasts is actually my secret weapon—it helps me think like both a defender and an attacker, anticipating the human errors and social engineering tricks that break otherwise secure systems.</p>
                <p className={styles.element}> <TypedText /></p>

                <div className={styles.buttons}>
                    <button class="btn" className={styles.resumeBtn}><a href="https://drive.google.com/file/d/1CK07aO6FJeNCjGz_zEBDfgjlGvuRaNJ9/view?usp=drive_link" download="Pranjal_Patel_Resume.pdf">Download Resume</a></button>
                    <button class="btn" className={styles.contactBtn}><a href="mailto:pranjalpatel0903@gmail.com">Contact me</a></button>
                </div>
            </div>

            <img src={getImageUrl("hero/pranjal_patel.jpg")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
            
        </section>

    );
};