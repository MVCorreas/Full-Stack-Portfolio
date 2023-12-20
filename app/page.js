import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/NavBar'
import AboutSection from './Components/AboutSection'
import Skills from './Components/Skills'
import { skills } from './Editable/Config'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200">
       <Navbar />
       <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection />
      <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        /> 
      </div>
    </main>
  )
}
