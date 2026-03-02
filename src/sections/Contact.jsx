import { motion } from 'framer-motion'
import Card from '../components/Card'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import { fadeInUp } from '../utils/animations'

const links = [
  { label: 'Email', href: 'mailto:giamanho37@gmail.com', value: 'giamanho37@gmail.com', icon: '✉️', external: false },
  { label: 'GitHub', href: 'https://github.com/zamin0411', value: 'github.com/zamin0411', icon: '🐙', external: true },
  { label: 'Location', value: 'Ho Chi Minh City, Vietnam', icon: '📍' },
  { label: 'Phone', href: 'tel:0943854956', value: '0943 854 956', icon: '📱', external: false },
]

/** Renders a single contact link — either <a> or <div> for non-link items (e.g. Location) */
function ContactLink({ link }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-pastel-pink-light/30 transition-colors group">
      <span className="text-2xl">{link.icon}</span>
      <div>
        <p className="text-sm text-gray-500">{link.label}</p>
        <p className="font-medium text-gray-800 group-hover:text-pastel-pink-dark transition-colors">
          {link.value}
        </p>
      </div>
    </div>
  )
  if (!link.href) return <div>{content}</div>
  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="block"
    >
      {content}
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-8 relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader className="mb-4">Get in Touch</SectionHeader>
        <motion.p {...fadeInUp} transition={{ delay: 0.05 }} className="text-gray-600 text-center mb-12">
          I'd love to hear from you. Let's build something great together!
        </motion.p>

        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Card>
            <div className="space-y-4">
              {links.map((link) => (
                <ContactLink key={link.label} link={link} />
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-pastel-pink/20 flex flex-wrap gap-4 justify-center">
              <Button href="mailto:giamanho37@gmail.com" variant="pink">
                Send Email
              </Button>
              <Button href="https://github.com/zamin0411" variant="lavender" target="_blank" rel="noopener noreferrer">
                View GitHub
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
