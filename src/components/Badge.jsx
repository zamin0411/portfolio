import { motion } from 'framer-motion'

/** Badge color variants — fallback to pink if invalid color passed */
const colorMap = {
  pink: 'bg-pastel-pink/40 text-pastel-pink-dark border-pastel-pink/60',
  lavender: 'bg-pastel-lavender/40 text-pastel-lavender-dark border-pastel-lavender/60',
  blue: 'bg-pastel-blue/40 text-pastel-blue-dark border-pastel-blue/60',
  mint: 'bg-pastel-mint/40 text-emerald-700 border-pastel-mint/60',
  peach: 'bg-pastel-peach/40 text-orange-700 border-pastel-peach/60',
}

export default function Badge({ children, color = 'pink', className = '' }) {
  const colorClass = colorMap[color] ?? colorMap.pink

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`inline-block px-3 py-1 rounded-xl text-sm font-medium border ${colorClass} ${className}`}
    >
      {children}
    </motion.span>
  )
}
