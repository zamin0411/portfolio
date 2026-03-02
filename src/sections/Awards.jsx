import { motion } from 'framer-motion'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const awards = [
  { year: 'Spring 2022', title: 'Honorable Student of the Semester', org: 'FPT University' },
  { year: 'Fall 2021', title: 'Honorable Student of the Semester', org: 'FPT University' },
  { year: '2017', title: 'Second Prize', org: 'Cà Mau Provincial Excellent Student Contest in English' },
  { year: '2015', title: 'Second Prize', org: 'Phú Tân District Merit Informatics Competition for Youth' },
]

export default function Awards() {
  return (
    <section id="awards" className="py-8 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader>Honors & Awards</SectionHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={`${award.year}-${award.title}`}
              {...fadeInUp}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <p className="text-pastel-pink-dark font-semibold mb-1">{award.year}</p>
                <h3 className="font-display font-bold text-lg text-gray-800 mb-1">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.org}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
