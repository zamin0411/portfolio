import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white/50 backdrop-blur border-t border-pastel-pink/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-display font-semibold text-gray-700">
            Hồ Gia Mẫn
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:giamanho37@gmail.com"
              className="text-gray-600 hover:text-pastel-pink-dark transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/zamin0411"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pastel-pink-dark transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          © {currentYear} Hồ Gia Mẫn. Built with React, Tailwind & Framer Motion 🌸
        </motion.p>
      </div>
    </footer>
  )
}
