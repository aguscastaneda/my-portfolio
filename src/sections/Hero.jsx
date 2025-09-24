"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary text-lg"
            >
              Hola, soy...
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight"
            >
              Agustín Castaneda
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-accent-primary font-medium"
            >
              Estudiante Técnico en Computación, apasionado por la tecnología
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-lg leading-relaxed max-w-2xl"
            >
              Descubrí mi vocación por la computación y la tecnología durante el
              secundario, destacándome desde cuarto año por mi carácter
              autodidacta y una curiosidad constante que me impulsó a aprender
              más allá de lo visto en clase. Con disciplina, compromiso y
              pasión, desarrollé la capacidad de ampliar mis conocimientos de
              forma independiente. Hoy me desempeño como desarrollador
              especializado en crear experiencias digitales de calidad, enfocado
              en React y Node.js, con disposición a incorporar nuevas
              tecnologías.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-text-primary font-medium rounded-lg hover:from-accent-hover hover:to-accent-primary transition-all duration-300 shadow-lg hover:shadow-accent-primary/25"
              >
                Ver mis proyectos
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-text-primary text-text-primary font-medium rounded-lg hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
              >
                Contactame
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1">
                <img
                  src="/public/foto_cv.png"
                  alt="Agustín Castaneda"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-accent-primary rounded-full border-t-transparent"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-px h-16 bg-accent-primary relative">
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="w-2 h-2 bg-accent-primary rounded-full absolute -left-0.5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
