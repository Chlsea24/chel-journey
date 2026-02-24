"use client";

import { useState } from "react";
import { timelines } from "@/data/data_timeline";
import styles from "./all_timelines.module.css";

/* Helper: ambil tahun awal dari string */
function extractStartYear(year: string): number {
  const match = year.match(/\d{4}/);
  return match ? parseInt(match[0]) : 0;
}

/* Mapping ID ke Judul */
const sectionTitles: Record<string, string> = {
  JO: "🏢 Leadership & Job",
  tech: "💻 Tech Journey",
  competition: "🏆 Competition",
};

export default function AllTimelinesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className={styles.container}>

      {/* HEADER */}
      <section className={styles.headerSection}>
        <h1 className={styles.title}>All Timelines</h1>
        <p className={styles.subtitle}>
          Here’s a brief overview of my journeys — academic, creative, and technical.
        </p>
      </section>

      {/* TOC 
      <section className={styles.tocSection}>
        <h2 className={styles.sectionTitle}>Daftar Isi</h2>

        <div className={styles.tocGrid}>
          {timelines.map(group => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className={styles.tocCard}
            >
              {sectionTitles[group.id] || group.name}
            </a>
          ))}
        </div>
      </section> */}

      {/* DYNAMIC SECTIONS */}
      {timelines.map(group => {
        const sortedItems = [...group.items].sort(
          (a, b) => extractStartYear(a.year) - extractStartYear(b.year)
        );

        const isOpen = openSection === group.id;

        return (
          <section
            key={group.id}
            id={group.id}
            className={styles.timelineSection}
          >
            {/* SECTION TITLE (CLICKABLE) */}
            <h2
              className={styles.sectionTitle}
              onClick={() => toggleSection(group.id)}
            >
              {sectionTitles[group.id] || group.name}
            </h2>
            {/* ZIG-ZAG TIMELINE */}
            {isOpen && (
              <div className={styles.timeline}>
                <div className={styles.timelineContainer}>
                  {sortedItems.map((item, index) => (
                    <div key={index} className={styles.item}>
                      <div className={styles.circle}></div>

                      <div className={styles.content}>
                        <h3>{item.year}</h3>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}