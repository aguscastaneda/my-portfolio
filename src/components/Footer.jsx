"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-bg-primary py-12 px-4 sm:px-6 lg:px-8 border-t border-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center text-text-primary font-bold text-lg hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300"
            aria-label="Scroll to top"
          >
            AC
          </motion.button>

          {/* Copyright */}
          <p className="text-text-secondary text-sm text-center">
            © 2025 Agustín Castaneda
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
