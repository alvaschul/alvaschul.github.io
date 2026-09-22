export const site = {
  name: "alvaschul",
  title: "Developer & tinkerer",
  bio: "On-device AI, Termux tooling and CLI apps — built in the terminal, shipped from it.",
  github: "https://github.com/alvaschul",
};

export type Project = {
  name: string;
  description: string;
  language: string;
};

export const repoUrl = (name: string) => `https://github.com/alvaschul/${name}`;

export const projects: Project[] = [
  {
    name: "alvaagent",
    description:
      "On-device AI agent harness for Termux (Android) — Python TUI + Pyodide browser version, zero pip installs",
    language: "Python",
  },
  {
    name: "hermes-backup",
    description: "Hermes Agent backup and configuration repository",
    language: "Python",
  },
  {
    name: "badboy-barber-cloudflare",
    description: "Badboy Barber POS + Reports",
    language: "HTML",
  },
  {
    name: "termux-video-tools",
    description: "Video tooling for Termux / Android command line",
    language: "Python",
  },
  {
    name: "hf-space-crypto-portfolio",
    description: "Crypto portfolio tracker built for Hugging Face Spaces",
    language: "HTML",
  },
];
