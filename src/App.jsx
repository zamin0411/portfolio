import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import TechStack from './sections/TechStack'
import WorkExperience from './sections/WorkExperience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Awards from './sections/Awards'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-pastel">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Education />
        <Awards />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
