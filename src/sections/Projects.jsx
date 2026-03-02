import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'
import Badge from '../components/Badge'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const projects = [
  {
    name: 'Dorapita',
    tagline: 'Truck Driver Recruitment Platform',
    description: 'Large-scale recruitment web application for truck drivers. Built and maintained responsive, user-friendly interfaces. Designed and optimized backend services with MySQL and PostgreSQL for scalability. Deployed in GCP using Docker with automated CI/CD via GitHub Actions.',
    tech: ['CakePHP', 'JavaScript', 'MySQL', 'PostgreSQL', 'Docker', 'GCP', 'Cursor'],
    url: 'https://dorapita.com',
    color: 'pink',
  },
  {
    name: 'Bizkomi',
    tagline: 'Multi-industry Recruitment Platform',
    description: 'Improved website load time and PageSpeed score through caching, image optimization, and code refactoring. Multi-industry recruitment solution serving diverse client needs.',
    tech: ['Laravel', 'MySQL', 'Nuxt', 'Docker'],
    url: 'https://bizcomm.net/',
    color: 'lavender',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-8 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader>Projects</SectionHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div key={project.name} {...fadeInUp} transition={{ delay: index * 0.1 }}>
              <Card>
                <h3 className="font-display font-bold text-2xl text-gray-800 mb-1">{project.name}</h3>
                <p className="text-pastel-pink-dark font-medium mb-4">{project.tagline}</p>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} color={project.color}>
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button href={project.url} variant="outline" target="_blank" rel="noopener noreferrer">
                  Visit Site →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
