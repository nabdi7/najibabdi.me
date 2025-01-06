"use client";
import React, { useState } from "react";
import { projects } from "./projectData";
import Image from "next/image";

const ProjectsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = [
    "All",
    "Web development",
    "App development",
    "Machine learning",
  ];

  return (
    <section className="">
      <div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="title no-underline text-foreground">Projects</h1>
          <p className="mt-3 font-light text-muted-foreground">
            Here are some of the projects I have worked on
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-4 flex flex-wrap gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors
                ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <div className="mt-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="mb-8 mt-2 border-b border-border pb-8 last:border-0 last:pb-0"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 font-light text-muted-foreground">
                  {project.description}
                </p>

                {/* Links */}
                <div className="mt-2 flex items-center space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    View site
                  </a>
                  <div className="h-4 w-px bg-border" />
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    Source code
                  </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tag.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg"
                    >
                      <Image
                        src={tag.icon}
                        alt={`${tag.name} icon`}
                        width="14"
                        height="14"
                        className="mr-2"
                      />
                      <span className="text-sm">{tag.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
