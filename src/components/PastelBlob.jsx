import { motion } from 'framer-motion'

export default function PastelBlob({ className = '', delay = 0, size = 'md', color = 'pink' }) {
  const sizes = {
    sm: 'w-32 h-32 md:w-48 md:h-48',
    md: 'w-48 h-48 md:w-64 md:h-64',
    lg: 'w-64 h-64 md:w-96 md:h-96',
  }

  const colors = {
    pink: 'bg-pastel-pink/40',
    lavender: 'bg-pastel-lavender/40',
    blue: 'bg-pastel-blue/40',
    mint: 'bg-pastel-mint/30',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 20, -10, 0],
        y: [0, -15, 10, 0],
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        x: { duration: 8, repeat: Infinity, delay },
        y: { duration: 8, repeat: Infinity, delay },
      }}
      className={`absolute rounded-full blur-3xl filter ${sizes[size]} ${colors[color]} ${className}`}
      aria-hidden
    />
  )
}
