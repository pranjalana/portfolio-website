import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";
import TypedText from "./TypedText";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I'm Pranjal Patel</h1>
                <p className={styles.description}>I am a 4th year B.Tech Student pursuing Computer Science & Engineering at Pandit Deendayal Energy University, Gandhinagar. </p>
                <p className={styles.element}> <TypedText /></p>

                <div className={styles.buttons}>
                    <button class="btn" className={styles.resumeBtn}><a href="hero/Pranjal_Patel_Resume.pdf" download="Pranjal_Patel_Resume.pdf">Download Resume</a></button>
                    <button class="btn" className={styles.contactBtn}><a href="mailto:pranjalpatel0903@gmail.com">Contact me</a></button>
                </div>
            </div>

            <img src={getImageUrl("hero/pranjal.jpeg")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
            
        </section>

    );
};