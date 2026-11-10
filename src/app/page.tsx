import { site } from "@/data/projects";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#main" aria-label={`${site.name}, home`}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 7-5 5 5 5" />
                <path d="m16 7 5 5-5 5" />
                <path d="m14 4-4 16" />
              </svg>
            </span>
            <span className="brand-name">{site.name}</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-caption">Personal site</span>
          </a>
          <nav className="header-actions" aria-label="Main navigation">
            <a className="nav-projects" href="#projects">Projects</a>
            <ThemeToggle />
            <a className="header-github" href={site.github} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
              <span className="sr-only">Opens in new tab</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="content-shell">
        <ScrollReveal className="hero-wrap">
          <Hero />
        </ScrollReveal>

        <section id="projects" className="projects-section" aria-labelledby="projects-heading">
          <ScrollReveal className="section-heading">
            <div>
              <p className="section-kicker"><span aria-hidden="true">{"//"}</span> A few things I&apos;ve made</p>
              <h2 id="projects-heading">Selected projects</h2>
            </div>
          </ScrollReveal>
          <ProjectGrid />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p><span aria-hidden="true">©</span> {new Date().getFullYear()} {site.name}</p>
          <p>Built in the terminal. Shared on GitHub.</p>
        </div>
      </footer>
    </div>
  );
}
