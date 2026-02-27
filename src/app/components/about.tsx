"use client";

import { motion } from "framer-motion";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.text}
      >
        The name is Chelsea — a technology enthusiast exploring AI,
        machine learning, Game&AR Dev, and Web technologies.
        I enjoy building solutions that are clean, intuitive, and impactful.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className={styles.text}
      >
        I have completed my undergraduate thesis and am currently
        open to internship or full-time opportunities.
        I’m passionate about blending science, design, and engineering
        to create technology that truly makes a difference.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className={styles.text}
      >
        UI/UX Design? I’m in. | 
        Game Development? Let’s build it. | 
        Machine Learning & Computer Vision? Absolutely.
      </motion.p>
    </section>
  );
}