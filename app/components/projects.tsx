import React from "react";

export type Project = {
  title: string;
  description: string;
  image?: string; // URL or path to image
  links?: {
    github?: string;
    demo?: string;
    [key: string]: string | undefined;
  };
};

export function ProjectsPortfolio({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 grid-cols-1">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="border rounded-lg p-4 shadow-sm bg-white dark:bg-zinc-900"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-50 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            {project.description}
          </p>
          {project.links && (
            <div className="flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
              {/* Render any other links */}
              {Object.entries(project.links)
                .filter(([key]) => key !== "github" && key !== "demo")
                .map(([key, url]) =>
                  url ? (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:underline"
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </a>
                  ) : null
                )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
