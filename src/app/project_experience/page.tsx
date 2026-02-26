"use client";

import { useState } from "react";
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
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.tabButton} ${
              activeCategory === cat ? styles.activeTab : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className={styles.grid}>
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}