import { motion } from 'framer-motion'
import Card from '../components/Card'
import Badge from '../components/Badge'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const coursework = [
  { subject: 'Database Systems', grade: '9/10' },
  { subject: 'Data Structures and Algorithms', grade: '8.9/10' },
  { subject: 'Programming Fundamentals', grade: '8.6/10' },
  { subject: 'Computer Organization and Architecture', grade: '8.6/10' },
  { subject: 'Object-Oriented Programming with Java', grade: '8.2/10' },
]

export default function Education() {
  return (
    <section id="education" className="py-8 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader>Education</SectionHeader>

        <motion.div {...fadeInUp}>
          <Card>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="font-display font-bold text-2xl text-gray-800">Software Engineering</h3>
              <Badge color="pink">FPT University</Badge>
            </div>
            <p className="text-gray-600 mb-4">FPT Ho Chi Minh City Campus • Jan 2021 – Nov 2023</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge color="lavender">GPA: 7.7/10</Badge>
              <Badge color="blue">100% Scholarship</Badge>
              <Badge color="mint">Semester: 9/9</Badge>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Relevant Coursework</h4>
              <ul className="space-y-2">
                {coursework.map((item) => (
                  <li key={item.subject} className="flex justify-between text-gray-600">
                    <span>{item.subject}</span>
                    <span className="font-medium text-pastel-pink-dark">{item.grade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
