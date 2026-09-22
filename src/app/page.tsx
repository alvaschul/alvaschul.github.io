import { projects, site } from "@/data/projects";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[720px] items-center px-5 sm:h-16 sm:px-6">
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main id="main" className="flex-1">
        <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-24">
            <Hero />
          </div>
          <section aria-label="Projects" className="mb-20 sm:mb-28">
            <div className="mb-5 flex items-center gap-2">
              <span aria-hidden="true" className="font-mono text-accent">
                {"//"}
              </span>
              <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-text-muted">
                Projects
              </h2>
              <span aria-hidden="true" className="ml-3 h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  language={project.language}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="mt-20 border-t border-border py-8 sm:mt-28">
        <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6">
          <p className="text-center font-mono text-xs text-text-muted">
            {"// ©"} {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
