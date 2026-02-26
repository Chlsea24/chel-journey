import styles from "@/app/project_experience/project_experience.module.css";
import { Project } from "@/data/project_detail";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.projectTitle}>{project.title}</h3>

      <div className={styles.meta}>
        {project.year} • {project.semester} <br />
        Role: {project.role} • Team of {project.teamSize}
      </div>

      <p>{project.overview}</p>

      <div className={styles.techStack}>
        {project.techStack.join(" • ")}
      </div>
    </div>
  );
}