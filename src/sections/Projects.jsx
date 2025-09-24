"use client";

import { motion } from "framer-motion";
import { projects } from "../utils/data";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              <span className="text-accent-primary text-2xl font-mono">
                02.
              </span>{" "}
              Proyectos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto"></div>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-32">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <p className="text-accent-primary font-mono text-sm">
                      Proyecto <span><div id="index">#{index + 1}</div></span>
                    </p>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {project.title}
                    </h3>

                    <div className="bg-bg-secondary p-6 rounded-lg shadow-lg">
                      <p className="text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full font-mono border border-accent-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`flex space-x-4 ${
                        index % 2 === 1 ? "lg:justify-end" : ""
                      }`}
                    >
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
                        aria-label="GitHub Repository"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
                          aria-label="Live Demo"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Otros proyectos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -8 }}
                  className="bg-bg-secondary p-6 rounded-lg shadow-lg hover:shadow-accent-primary/10 transition-all duration-300 group border border-accent-primary/10"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-accent-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0a2 2 0 01-2 2H10a2 2 0 01-2-2v0z"
                        />
                      </svg>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>

                  <h4 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-bg-primary text-text-secondary text-xs rounded font-mono border border-accent-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;