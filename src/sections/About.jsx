"use client";

import { motion } from "framer-motion";
import { technologies } from "../utils/data";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              <span className="text-accent-primary text-2xl font-mono">
                01.
              </span>{" "}
              Sobre mí
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-text-secondary text-lg leading-relaxed">
                ¡Hola! Soy Agustín, un estudiante técnico en computación de 18
                años apasionado por crear cosas que viven en internet. Mi
                interés en el desarrollo comenzó en 2022 cuando elegí la
                especialidad en mi escuela técnica.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed">
                Tuve el privilegio de trabajar en proyectos personales,
                colaborar en equipos de desarrollo y crear aplicaciones web
                modernas. Mi enfoque principal es poder sumar experiencias
                digitales y desarrollar proyectos nuevos.
              </p>

              <div>
                <p className="text-text-primary text-lg font-medium mb-4">
                  Algunas tecnologías con las que estuve trabajando
                  recientemente:
                </p>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-2"
                >
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      variants={itemVariants}
                      className="flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4 text-accent-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-text-secondary text-sm font-mono">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
