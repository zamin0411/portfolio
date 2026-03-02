import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

/**
 * Reusable section title — used in About, TechStack, Experience, etc.
 * Avoids repeating the same motion.h2 + className pattern 8 times.
 * @param {string} [className] - Optional extra Tailwind classes (e.g. "mb-4" for compact sections)
 */
export default function SectionHeader({ children, className = '' }) {
  return (
    <motion.h2
      {...fadeInUp}
      className={`font-display font-bold text-4xl md:text-5xl text-gray-800 mb-12 text-center ${className}`}
    >
      {children}
    </motion.h2>
  )
}
