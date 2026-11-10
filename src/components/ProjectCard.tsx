import { repoUrl } from "@/data/projects";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  language: string;
};

const LANGUAGE_DOTS: Record<string, string> = {
  Python: "python",
  HTML: "html",
};

export default function ProjectCard({ index, name, description, language }: ProjectCardProps) {
  const languageClass = LANGUAGE_DOTS[language] ?? "other";

  return (
    <a
      href={repoUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-top">
        <span className="project-index">{String(index).padStart(2, "0")}</span>
        <span className="project-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg></span>
      </div>
      <h3>{name}</h3>
      <p className="project-description">{description}</p>
      <div className="project-card-bottom">
        <span className={`language-dot ${languageClass}`} aria-hidden="true" />
        <span className="language-label">{language}</span>
        <span className="project-link-label">View repository <span aria-hidden="true">→</span></span>
      </div>
      <span className="sr-only">Opens in new tab</span>
    </a>
  );
}
