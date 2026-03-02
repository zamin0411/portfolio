import { motion } from 'framer-motion'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="py-8 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader>About Me</SectionHeader>

        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Card>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! I'm Mẫn — a Fullstack Developer based in Ho Chi Minh City, Vietnam. I specialize in building
                scalable recruitment platforms that handle real-world traffic with care.
              </p>
              <p>
                My strength lies in the backend: I love designing databases, optimizing queries, and deploying
                systems that stay reliable under load. I work with <strong className="text-pastel-pink-dark">CakePHP</strong>,{' '}
                <strong className="text-pastel-lavender-dark">Go</strong>, <strong className="text-pastel-blue-dark">MySQL</strong>, and{' '}
                <strong className="text-pastel-blue-dark">PostgreSQL</strong>, and I'm comfortable with Docker, GCP, and CI/CD pipelines.
              </p>
              <p>
                When I'm not coding, you'll find me solving puzzles, playing with Rubik's cubes, or building Lego sets.
                I bring the same attention to detail from my hobbies into my work — clean code, thoughtful architecture,
                and systems that scale.
              </p>
              <div className="pt-4">
                <p className="font-medium text-gray-700">📍 Ho Chi Minh City, Vietnam</p>
                <p className="text-pastel-pink-dark"> Seeking opportunities to develop robust and secure software systems using the latest technologies.</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
