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
        I'm Solveig — a computer vision enthusiast exploring AI, machine
        learning, and modern web technologies. I enjoy building things that look
        clean, work smoothly, and solve real problems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className={styles.text}
      >
        Currently working on a thesis about stroke vs Bell’s palsy
        differentiation using facial landmarks. I love blending science, design,
        and engineering into projects that feel meaningful.
      </motion.p>
    </section>
  );
}