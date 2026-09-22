import { site } from "@/data/projects";

export default function Hero() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-accent)_12%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-accent)_12%,transparent)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black_0%,transparent_100%)]"
      />
      <div className="flex flex-wrap items-baseline gap-3">
        <span
          aria-hidden="true"
          className="font-mono font-bold leading-[1.05] text-accent text-[clamp(2.75rem,6vw,4rem)]"
        >
          {">"}
        </span>
        <h1 className="font-sans font-extrabold leading-[1.05] tracking-[-0.045em] text-text-primary text-[clamp(2.75rem,6vw,4rem)]">
          {site.name}
        </h1>
        <span
          aria-hidden="true"
          className="inline-block h-[0.85em] w-[2px] animate-pulse rounded-full bg-accent text-[clamp(2.75rem,6vw,4rem)] motion-reduce:animate-none"
        />
      </div>
      <p className="mt-4 font-medium text-[20px] text-text-secondary sm:text-[22px]">
        {site.title}
      </p>
      <p className="mt-3 max-w-[56ch] text-base text-text-muted">{site.bio}</p>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg border border-border-strong px-4 text-[14px] font-medium text-text-primary outline-none transition-colors duration-[180ms] ease-out hover:border-accent/45 hover:bg-surface hover:text-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
        GitHub
        <span className="sr-only">Opens in new tab</span>
      </a>
    </section>
  );
}
