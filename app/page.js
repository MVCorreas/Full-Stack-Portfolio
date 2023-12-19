import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Navbar />
      <HeroSection/>
    </main>
  )
}
