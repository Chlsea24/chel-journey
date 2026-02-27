"use client";

import { useState } from "react";
import styles from "@/app/styles/projectcard.module.css";
import { Project } from "@/data/project_detail";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.projectCard} ${expanded ? styles.expanded : ""}`}>
    {project.featured && <span className={styles.badge}>Featured</span>}

    <div className={styles.header}>
      <h3>{project.title}</h3>
      <p className={styles.meta}>
        {project.year} • {project.semester}
      </p>
    </div>

    <p className={styles.role}>
      {project.role} • Team of {project.teamSize}
    </p>

    <p className={styles.overview}>
      {expanded
        ? project.overview
        : `${project.overview.slice(0, 120)}...`}
    </p>

    <div className={styles.techStack}>
      {project.techStack.slice(0, 4).map((tech) => (
        <span key={tech} className={styles.chip}>
          {tech}
        </span>
      ))}
      {project.techStack.length > 4 && (
        <span className={styles.moreTech}>
          +{project.techStack.length - 4}
        </span>
      )}
    </div>

    {expanded && (
      <div className={styles.expandedContent}>
        {project.contributions.length > 0 && (
          <div className={styles.section}>
            <h4>Key Contributions</h4>
            <ul>
              {project.contributions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.impact && (
          <div className={styles.section}>
            <h4>Impact</h4>
            <ul>
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* HYPERLINKs */}
        {project.links && (
        <div className={styles.links}>
          {Object.entries(project.links)
            .filter(([, url]) => url)
            .map(([label, url], index, array) => (
              <span key={label}>
                <a href={url} target="_blank">
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </a>
                {index < array.length - 1 && " | "}
              </span>
            ))}
        </div>
      )}
      </div>
    )}

    <button
      className={styles.toggleButton}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? "Show Less ↑" : "Show Details ↓"}
    </button>
  </div>
  );
}