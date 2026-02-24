"use client"

import styles from "../styles/timeline.module.css";
import { motion } from "framer-motion";
import { timelines } from "@/data/data_timeline";

/* sorting */
function extractStartYear(year: string): number {
  const match = year.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
}

export default function Timeline() {
  const techItems =
    timelines
      .find(group => group.id === "tech")
      ?.items.sort(
        (a, b) => extractStartYear(a.year) - extractStartYear(b.year)
      ) || [];

  return (
    <section id="timeline" className={styles.timeline}>
      <h2 className={styles.title}>My Tech Journey</h2>

      <div className={styles.headerRow}>
        <a href="/all_timelines" className={styles.moreLink}>
          See other journey →
        </a>
      </div>

      <div className={styles.container}>
        {techItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={styles.item}
          >
            <div className={styles.circle}></div>

            <div className={styles.content}>
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}