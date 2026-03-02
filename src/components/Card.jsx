import { motion } from 'framer-motion'

/**
 * Reusable card with optional hover lift effect.
 * Pass hover={false} for static cards (e.g. in grids where lift feels odd).
 */
export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-pastel p-6 transition-shadow duration-300 hover:shadow-pastel-hover ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
