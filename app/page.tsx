"use client"
import { LanguageProvider } from "../context/LanguageContext"
import Navbar from "../components/Navbar"
import Hero1 from "../components/Hero1"
import Landing2 from "../components/Landing2"
import Landing3 from "../components/Landing3"
import Landing4 from "../components/Landing4"
import Landing5 from "../components/Landing5"
import Landing6 from "../components/Landing6"
import Manifesto from "../components/Manifesto"
import Landing7 from "../components/Landing7"
import Landing8 from "../components/Landing8"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <LanguageProvider>
      <main>
        <Navbar variant="b" />
        <Hero1 />
        <Landing2 variant="b" />
        <Landing3 />
        <Landing4 />
        <Landing5 />
        <Landing6 />
        <Manifesto />
        <Landing7 />
        <Landing8 />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
