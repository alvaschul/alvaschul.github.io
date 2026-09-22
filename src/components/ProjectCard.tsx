import { repoUrl } from "@/data/projects";

type ProjectCardProps = {
  name: string;
  description: string;
  language: string;
};

const LANGUAGE_DOTS: Record<string, string> = {
  Python: "bg-[#3572A5] dark:bg-[#4d8fd4]",
  HTML: "bg-[#e34c26] dark:bg-[#f0652e]",
};

export default function ProjectCard({ name, description, language }: ProjectCardProps) {
  const dotClass = LANGUAGE_DOTS[language] ?? "bg-text-muted";

  return (
    <a
      href={repoUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2.5 rounded-xl border border-border-strong bg-surface p-5 outline-none transition-all duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-accent/45 hover:bg-surface-hover hover:shadow-[0_8px_30px_-12px_rgba(34,211,238,0.25),0_12px_32px_-16px_rgba(0,0,0,0.55)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-hover">
          {name}
        </h3>
        <svg
          className="h-4 w-4 shrink-0 -translate-x-1 text-text-primary opacity-0 transition-all duration-[180ms] ease-out group-hover:translate-x-0 group-hover:text-accent-hover group-hover:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
      <p className="line-clamp-2 text-sm text-text-muted">{description}</p>
      <div className="mt-auto flex items-center gap-2">
        <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${dotClass}`} />
        <span className="font-mono text-xs text-text-muted">{language}</span>
      </div>
      <span className="sr-only">Opens in new tab</span>
    </a>
  );
}
