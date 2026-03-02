import { motion } from 'framer-motion'
import Button from '../components/Button'
import { fadeInUpHero } from '../utils/animations'

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center relative overflow-hidden pt-40">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pastel-pink/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-pastel-lavender/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pastel-blue/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div {...fadeInUpHero} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-2xl bg-white/70 backdrop-blur border border-pastel-pink/30 text-pastel-pink-dark text-sm font-medium">
            🌸 Fullstack Developer
          </span>
        </motion.div>

        <motion.h1 {...fadeInUpHero} transition={{ duration: 0.6, delay: 0.1 }} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-gray-800 mb-4">
          Hồ Gia Mẫn
        </motion.h1>

        <motion.p {...fadeInUpHero} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl text-gray-600 mb-2 font-medium">
          Cute pastel engineer with a passion for scalable systems
        </motion.p>

        <motion.p {...fadeInUpHero} transition={{ duration: 0.6, delay: 0.25 }} className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Building robust recruitment platforms with CakePHP, Go & modern DevOps
        </motion.p>

        <motion.div {...fadeInUpHero} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-wrap gap-4 justify-center">
          <Button href="#contact" variant="pink">
            Get in Touch
          </Button>
          <Button href="#projects" variant="outline">
            View Projects
          </Button>
          <Button href="https://github.com/zamin0411" variant="lavender" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
