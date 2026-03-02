import { motion } from 'framer-motion'
import Badge from '../components/Badge'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const techCategories = [
  {
    title: 'Languages',
    items: ['PHP', 'Golang', 'Java', 'C#'],
    color: 'pink',
  },
  {
    title: 'Frameworks',
    items: ['CakePHP', 'Go Fiber', 'Spring Boot', '.NET', 'Laravel', 'Nuxt'],
    color: 'lavender',
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Redis', 'SQL Server'],
    color: 'blue',
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'GCP', 'GitHub Actions', 'Linux', 'Kong Gateway', 'Cursor'],
    color: 'mint',
  },
  {
    title: 'Others',
    items: ['Agile', 'OOP', 'Unit Testing', 'Git'],
    color: 'peach',
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-8 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader>Tech Stack</SectionHeader>

        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              {...fadeInUp}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-pastel p-6"
            >
              <h3 className="font-display font-semibold text-lg text-gray-700 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} color={category.color}>
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
