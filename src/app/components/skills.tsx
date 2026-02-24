"use client";

import styles from "../styles/skills.module.css";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skill_list";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <h3 className={styles.text}>Wish this section would full of cards!</h3>

      <div className={styles.wrapper}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={styles.category}
          >
            <h3 className={styles.catTitle}>{cat.title}</h3>

            <div className={styles.grid}>
              {cat.items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.icon}
                  />
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}