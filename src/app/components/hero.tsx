"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
        你好！我叫 <span className={styles.highlight}>Chelsea</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.subtitle}
      >
        Bachelor of Informatics who eager to work on my Skills!
        很高兴认识你！
      </motion.p>

      <div className={styles.buttonGroup}>
        <motion.a
          href="#skills"
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          My Skills
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/project_experience" className={styles.buttonSecondary}>
            Project Experiences
          </Link>
        </motion.div>
      </div>
      </section>
  );
}