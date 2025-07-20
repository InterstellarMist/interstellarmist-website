import React from "react";
import ImageCarousel from "./image-carousel";
import { FaGithub } from 'react-icons/fa';

export type Project = {
  title: string;
  description: string;
  images: string[]; // URL or path to image
  links?: {
    github?: string;
    demo?: string;
    [key: string]: string | undefined;
  };
  tags?: string[]; // Optional tags for categorization
};

function renderLinks(links: Project['links']) {
  return (
    links ? (
      <>
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline mx-1 my-0" />
          </a>
        )}
        {links.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Live Demo
          </a>
        )}
      </>
    ) : null
  );
}

function renderTags(tags: string[]) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectsPortfolio({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 grid-cols-1">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="border-1 border-neutral-300 rounded-2xl p-4 shadow-md bg-white dark:bg-zinc-900"
        >
          <ImageCarousel images={project.images} />
          <h2 className="text-xl font-bold mb-2">
            {project.title} {project.links && renderLinks(project?.links)}
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            {project.description}
          </p>
          {project.tags && renderTags(project.tags)}
        </div>
      ))}
    </div>
  );
}
