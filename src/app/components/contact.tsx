"use client";

import { motion } from "framer-motion";
import styles from "../styles/contact.module.css";
import { contactData } from "@/data/contact_me";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Get in Touch</h2>

      <div className={styles.list}>
        {contactData.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={item.icon}
              alt={item.name}
              className={styles.icon}
            />
            <p>{item.name}</p>
          </motion.a>
        ))}
      </div>

      <p className={styles.note}>我等您哦！</p>
    </section>
  );
}