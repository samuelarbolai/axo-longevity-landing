"use client"
import { useEffect } from "react"
import Hero1B from "../src/components/Hero1B"
import Landing2 from "../src/components/Landing2"
import Landing3 from "../src/components/Landing3"
import Landing4 from "../src/components/Landing4"
import Landing5 from "../src/components/Landing5"
import Landing6 from "../src/components/Landing6"
import Landing7 from "../src/components/Landing7"
import Landing8 from "../src/components/Landing8"
import Manifesto from "../src/components/Manifesto"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import { LanguageProvider } from "../src/context/LanguageContext"

export default function LandingPage() {
  const variant = "b"

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", handleLinkClick))

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((a) => a.removeEventListener("click", handleLinkClick))
    }
  }, [])

  return (
    <LanguageProvider>
      <main className="font-montserrat">
        <Navbar variant={variant} />
        <Hero1B />
        <Landing2 variant={variant} />
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
