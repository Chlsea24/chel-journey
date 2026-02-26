"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Category } from "@/data/project_detail";
import ProjectCard from "@/app/components/projectcard";
import styles from "./project_experience.module.css";

const categories: (Category | "All")[] = [
  "All",
  "Computer Vision",
  "Machine Learning",
  "Game Development",
  "UI/UX",
  "Web Development",
  "Translation",
  "Multimedia"
];

export default function ProjectExperiencePage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Featured first logic
  const sortedProjects = [...filteredProjects].sort((a, b) =>
    (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  const getCount = (category: Category | "All") => {
    if (category === "All") return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Project Experience</h1>
        <p className={styles.subtitle}>
          Selected works across machine learning, game development, design, and multimedia.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {categories.map((cat) => {
          const count = getCount(cat);

          return (
            <button
              key={cat}
              className={`${styles.tabButton} ${
                activeCategory === cat ? styles.activeTab : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} <span className={styles.counter}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className={styles.grid}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}