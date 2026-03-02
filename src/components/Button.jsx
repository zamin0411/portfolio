import { motion } from 'framer-motion'

/** Button variant styles — lookup by key for O(1) access */
const variants = {
  pink: 'bg-gradient-to-r from-pastel-pink to-pastel-pink-dark hover:from-pastel-pink-dark hover:to-pastel-pink text-white shadow-pastel hover:shadow-pastel-hover',
  lavender: 'bg-gradient-to-r from-pastel-lavender to-pastel-lavender-dark hover:from-pastel-lavender-dark hover:to-pastel-lavender text-gray-800 shadow-pastel hover:shadow-pastel-hover',
  blue: 'bg-gradient-to-r from-pastel-blue to-pastel-blue-dark hover:from-pastel-blue-dark hover:to-pastel-blue text-gray-800 shadow-pastel hover:shadow-pastel-hover',
  outline: 'bg-white/80 backdrop-blur border-2 border-pastel-pink/50 hover:bg-pastel-pink-light/50 text-pastel-pink-dark',
}

/**
 * Polymorphic Button — renders <a> when href provided, <button> otherwise.
 * Only passes href to <a> to avoid invalid HTML on <button>.
 */
export default function Button({ children, variant = 'pink', href, className = '', ...props }) {
  const Component = href ? 'a' : 'button'
  const linkProps = href ? { href } : {}

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        {...linkProps}
        className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
