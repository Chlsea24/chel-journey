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
        The name is Chelsea — a technology enthusiast exploring AI, machine
        learning, Game-AR-VR Dev, and Web technologies. I enjoy building things that look
        clean, work smoothly, and solve real problems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className={styles.text}
      >
        Worked on my undergraduate thesis and currently open to an internship or full-time job! I love blending science, design,
        and engineering into projects that feel meaningful and bring the real impact.
      </motion.p>
    </section>
  );
}