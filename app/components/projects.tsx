"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
        {/* Render any other links */}
        {Object.entries(links)
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
          <div className="mx-auto">
            <Carousel opts={{ loop: true }} className="mx-12">
              <CarouselContent>
                {project.images && (
                  project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={project.title}
                        className="h-80 mx-auto object-contain rounded-md mb-4"
                      />
                    </CarouselItem>
                  )))
                }
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
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
