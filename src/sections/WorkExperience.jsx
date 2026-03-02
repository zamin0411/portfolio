import { motion } from 'framer-motion'
import Card from '../components/Card'
import Badge from '../components/Badge'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const experiences = [
  {
    company: 'ZIGExN VeNtura',
    role: 'Fullstack Developer',
    period: 'Apr 2024 – Present',
    description: 'Maintaining and improving the Dorapita truck driver recruitment platform — a large-scale system serving real users.',
    highlights: [
      'Optimize MySQL & PostgreSQL performance for high-traffic scenarios',
      'Develop new features and improve legacy CakePHP codebase',
      'Deploy and manage applications in GCP using Docker',
      'Implement CI/CD pipelines with GitHub Actions',
    ],
    tech: ['CakePHP', 'MySQL', 'PostgreSQL', 'Docker', 'GCP', 'GitHub Actions'],
    color: 'pink',
  },
  {
    company: 'HT3DPrint',
    role: 'Backend Developer',
    period: 'Jun 2022 – Nov 2023',
    description: 'Built robust backend systems and APIs for cross-functional product teams.',
    highlights: [
      'Develop backend APIs using Go Fiber',
      'Manage MariaDB and design scalable data models',
      'Deploy applications with Docker on Linux',
      'Setup CI/CD with GitHub Actions and Kong Gateway',
    ],
    tech: ['Go Fiber', 'MariaDB', 'Docker', 'Kong Gateway', 'GitHub'],
    color: 'lavender',
  },
  {
    company: 'FSOFT Academy',
    role: 'Backend Intern',
    period: 'Sep 2022 – Dec 2022',
    description: 'Gained hands-on experience in large-scale software development within a structured team environment.',
    highlights: [
      'Develop applications with Spring Boot',
      'Work with SQL Server for data persistence',
      'Collaborate in large project teams using Agile practices',
    ],
    tech: ['Spring Boot', 'SQL Server', 'GitLab'],
    color: 'blue',
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-8 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader>Work Experience</SectionHeader>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={exp.company} {...fadeInUp} transition={{ delay: index * 0.1 }}>
              <Card>
                <div className="text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-xl text-gray-800">{exp.role}</h3>
                    <span className="text-pastel-pink-dark font-medium">@ {exp.company}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4 text-gray-600 text-sm">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-pastel-pink">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <Badge key={t} color={exp.color}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
