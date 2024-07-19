import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json"
import tools from "../../data/tools.json"
import clouds from "../../data/clouds.json"
import { getImageUrl } from "../../utils";

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills Set</h2>
            
            <div className={styles.content}>

            <div className={styles.section}> 
                <h2 className={styles.subhead}>Languages</h2>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.subhead}>Tools</h2>
                <div className={styles.tools}>
                    {tools.map((tool, id) => {
                        return (
                            <div key={id} className={styles.tool}>
                                <div className={styles.toolImageContainer}><img src={getImageUrl(tool.imageSrc)} alt={tool.title} /></div>
                                <p>{tool.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.subhead}>Cloud/Databases</h2>
                <div className={styles.clouds}>
                    {clouds.map((cloud, id) => {
                        return (
                            <div key={id} className={styles.cloud}>
                                <div className={styles.cloudImageContainer}><img src={getImageUrl(cloud.imageSrc)} alt={cloud.title} /></div>
                                <p>{cloud.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            </div>
        </section>
        
    );
};