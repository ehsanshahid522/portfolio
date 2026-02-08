import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section
      id="projects-page"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-8 bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">Projects</h1>
        <p className="text-center text-[#374151] dark:text-[#9ca3af] mb-10">
          Here are some of my recent projects showcasing my skills and experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-load animate-fade-in delay-${(index + 1) * 200}`}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden group">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2ea043] to-[#000000] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{project.title}</span>
                  </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#2ea043] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {project.category || "Project"}
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">{project.category}</p>
                    <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#000000] dark:text-white">
                  {project.title}
                </h3>

                <p className="text-[#374151] dark:text-[#9ca3af] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#000000] dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#f3f4f6] dark:bg-[#374151] text-[#374151] dark:text-[#9ca3af] text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#000000] dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-[#374151] dark:text-[#9ca3af] text-sm flex items-center"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#000000] hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-lg text-center transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#f3f4f6] dark:bg-[#374151] hover:bg-gray-200 dark:hover:bg-gray-600 text-[#000000] dark:text-white font-medium px-4 py-2 rounded-lg text-center transition-colors duration-200"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow p-6">
          <div className="text-center">
            <a
              href="https://github.com/ehsanshahid522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#000000] text-white font-medium px-6 py-3 rounded-xl shadow hover:opacity-90"
            >
              View GitHub Profile
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="bg-[#facc15] hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow"
            >
              Contact Me
            </a>
            <a
              href="mailto:ehsanshahid522@gmail.com"
              className="bg-[#000000] hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-lg shadow"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;



