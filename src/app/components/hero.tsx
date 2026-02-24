"use client";

import { motion } from "framer-motion";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        你好！我叫 <span className={styles.highlight}>Solveig</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.subtitle}
      >
        Building things with AI, Computer Vision, and clean design.
        很高兴认识你！
      </motion.p>

      <motion.a
        href="#contact"
        className={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </section>
  );
}