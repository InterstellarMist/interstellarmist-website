import { BlogPosts } from "app/components/posts";
import { ProjectsPortfolio, Project } from "app/components/projects";

export default function Page() {
  const projects: Project[] = [
    {
      title: "Personal Blog",
      description:
        "A statically generated blog built with Next.js and MDX, featuring dark mode and RSS support.",
      image: "/blog/assets/nextjs-website.png",
      links: {
        github: "https://github.com/yourusername/personal-blog",
        demo: "https://yourblog.example.com",
      },
    },
    {
      title: "Home Node Automation",
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
  ];

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <ProjectsPortfolio projects={projects} />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
