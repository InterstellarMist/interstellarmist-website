import Link from "next/link";
import { ProjectsPortfolio, Project } from "app/components/projects";

const projects: Project[] = [
  {
    title: "Lyrics Player",
    description:
      "LyricsPlayer is a desktop application built with Electron that displays the lyrics of the currently playing song on Spotify. It features real-time lyric fetching and a modern, user-friendly interface.",
    image: "/blog/assets/projects/lyricsplayer-main.png",
    links: {
      github: "https://github.com/InterstellarMist/Javascript-LyricsPlayer",
      demo: "https://yourportfolio.example.com",
    },
  },
  {
    title: "The Home Node",
    description:
      "A home server automation project using Ansible, Docker, and Grafana for monitoring.",
    image: "/blog/assets/Architecture overview v1.png",
    links: {
      github: "https://github.com/yourusername/home-node-automation",
    },
  },
  {
    title: "Obsidian Sync Tool",
    description:
      "A tool to sync Obsidian notes across devices using Nextcloud and custom scripts.",
    image: "/blog/assets/obsidian livesync plugin.png",
    links: {
      github: "https://github.com/yourusername/obsidian-sync-tool",
      demo: "https://yourdemo.example.com",
    },
  },
  {
    title: "Personal Blog",
    description:
      "A statically generated blog built with Next.js and MDX, featuring dark mode and RSS support.",
    image: "/blog/assets/nextjs-website.png",
    links: {
      github: "https://github.com/yourusername/personal-blog",
      demo: "https://yourblog.example.com",
    },
  }
];

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Projects
      </h1>
      <p className="mb-4">
        {`This section showcases some of the projects I've worked on, ranging from personal tools to larger automation systems. Each project reflects my passion for building and exploring systems, whether they are physical, digital, or conceptual.`}
      </p>
      <div className="my-8">
        <ProjectsPortfolio projects={projects} />
      </div>
    </section>
  );
}
