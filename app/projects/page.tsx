import Link from "next/link";
import { ProjectsPortfolio, Project } from "app/components/projects";

const projects: Project[] = [
  {
    title: "Lyrics Player",
    description:
      "LyricsPlayer is a desktop application built with Electron that displays the lyrics of the currently playing song on Spotify. It features real-time lyric fetching and a modern, user-friendly interface.",
    images: ["/blog/assets/projects/lyricsplayer-main.png", "blog/assets/projects/lyricsplayer-lyrics.png"],
    links: {
      github: "https://github.com/InterstellarMist/Javascript-LyricsPlayer",
      // demo: "https://yourportfolio.example.com",
    },
    tags: ["Electron", "JavaScript", "Spotify API", "Web Scraping", "Websockets"],
  },
  {
    title: "ProgressDay",
    description:
      "ProgressDay is a modern productivity app focused on helping users build habits and track their progress over time. While its core is a habit tracker, ProgressDay is designed to grow into a comprehensive productivity suite, with planned features such as analytics, achievements, and social interaction with friends.",
    images: ["/blog/assets/projects/progressday-landing.png", "/blog/assets/projects/progressday-homepage.png"],
    links: {
      github: "https://github.com/InterstellarMist/ProgressDay-App",
      // demo: "https://yourportfolio.example.com",
    },
    tags: ["React", "Electron", "JavaScript", "TypeScript", "MongoDB", "ExpressJS", "Node.js"],
  },
  {
    title: "Korean Dictionary",
    description:
      "Korean Dictionary is a minimal, neumorphic desktop app for searching English and Korean words in a simple, fast, and visually appealing interface. Built with Electron, Vite, and React, it features Framer Motion animations, Zustand state management, modular Sass styling, custom keyboard navigation, debounced search, and a REST API backend with MongoDB for instant, distraction-free results.",
    images: ["/blog/assets/projects/korean-dictionary-main.png", "/blog/assets/projects/korean-dictionary-result.png"],
    links: {
      github: "https://github.com/InterstellarMist/Korean-Dictionary-App",
      // demo: "https://yourportfolio.example.com",
    },
    tags: ["Electron", "React", "TypeScript", "MongoDB", "ExpressJS", "Node.js", "Framer Motion"],
  },
  {
    title: "The Home Node",
    description:
      "A self-hosted homelab where I experiment with Linux servers, automation, and networking. I’ve set up apps like Nextcloud, a media server, and Home Assistant—all running in Docker containers behind a mesh VPN. With tools like Ansible and Grafana, I’ve built a fully remote-accessible, automated environment to learn and play with infrastructure hands-on.",
    images: [
      "/blog/assets/projects/the-home-node-dashboard.png",
      "/blog/assets/projects/the-home-node-rpi.jpg",
      "/blog/assets/projects/the-home-node-hpserver.jpg",
    ],
    tags: ["Linux", "Docker", "Ansible", "Home Assistant", "Nextcloud", "Networking", "Self-Hosted"],
  },
  {
    title: "Personal Blog",
    description:
      "A statically generated blog built with Next.js and MDX, featuring dark mode and RSS support. This site is both a living lab and a personal gateway—showcasing tools I’m building, concepts I’m exploring, and reflections on life, systems, and their harmony. Built with modern React, Tailwind CSS, and automated content workflows.",
    images: ["/blog/assets/projects/project-stargate-homepage.png"],
    links: {
      github: "https://github.com/InterstellarMist/interstellarmist-website",
    },
    tags: ["Next.js", "MDX", "React", "Tailwind CSS", "Static Site Generation", "TypeScript", "JavaScript"],
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
