import { site } from "@/data/projects";

export default function Hero() {
  return (
    <section className="hero-layout" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span className="availability-dot" aria-hidden="true" /> Independent developer <span className="eyebrow-slash">/</span> tinkerer</p>
        <h1 id="hero-title" className="hero-name">{site.name}<span aria-hidden="true">.</span></h1>
        <p className="hero-role">{site.title}</p>
        <p className="hero-bio">{site.bio}</p>
        <div className="hero-actions">
          <a className="button-primary" href={site.github} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Find me on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
            <span className="sr-only">Opens in new tab</span>
          </a>
          <a className="button-secondary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-topics" aria-label="Areas of interest">
          <span>On-device AI</span>
          <span>Termux</span>
          <span>CLI tools</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-halo visual-halo-one" />
        <div className="visual-halo visual-halo-two" />
        <div className="terminal-window">
          <div className="terminal-chrome">
            <div className="window-dots"><i /><i /><i /></div>
            <span className="terminal-path">~/workbench</span>
            <span className="terminal-menu">•••</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-command"><span>›</span> ls ~/projects</p>
            <div className="terminal-project-row">
              <span className="terminal-project-icon icon-ai">AI</span>
              <span className="terminal-project-name"><strong>alvaagent</strong><small>On-device AI agent</small></span>
              <span className="terminal-language">PY</span>
            </div>
            <div className="terminal-project-row">
              <span className="terminal-project-icon icon-cli">&gt;_</span>
              <span className="terminal-project-name"><strong>termux-video-tools</strong><small>Android command line</small></span>
              <span className="terminal-language">CLI</span>
            </div>
            <div className="terminal-separator" />
            <p className="terminal-note"><span className="terminal-prompt">●</span> built small, shipped from the terminal<span className="terminal-cursor">_</span></p>
          </div>
        </div>
        <div className="floating-chip chip-local"><span aria-hidden="true">✳</span> local-first ideas</div>
        <div className="floating-chip chip-android"><span aria-hidden="true">⌁</span> Android + Termux</div>
        <div className="visual-caption"><span /> A small digital workshop</div>
      </div>
    </section>
  );
}
