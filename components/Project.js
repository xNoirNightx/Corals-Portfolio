import React from "react";
import {FaGithub,} from 'react-icons/fa';


const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-md">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-auto cursor-pointer"
              />
            </a>
            <div className="mt-2">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
