"use client"
import { useEffect, useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function AthleteNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-electric-blue/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-inter font-black">
                <span className="text-white">AXO</span>
                <span className="gradient-text">ELITE</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#performance-lab"
                className="text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
              >
                Performance Lab
              </a>
              <a
                href="#elite-protocols"
                className="text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
              >
                Elite Protocols
              </a>
              <a
                href="#athlete-stories"
                className="text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
              >
                Athlete Stories
              </a>
              <a
                href="#biomarkers"
                className="text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
              >
                Biomarkers
              </a>

              <JoinWaitlistButton
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
              >
                GET YOUR EDGE
              </JoinWaitlistButton>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-electric-blue transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-electric-blue transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-electric-blue transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-black/95 backdrop-blur-md border-t border-electric-blue/20`}
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#performance-lab"
              className="block text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
            >
              Performance Lab
            </a>
            <a
              href="#elite-protocols"
              className="block text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
            >
              Elite Protocols
            </a>
            <a
              href="#athlete-stories"
              className="block text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
            >
              Athlete Stories
            </a>
            <a
              href="#biomarkers"
              className="block text-gray-300 hover:text-electric-blue transition-colors font-source font-medium"
            >
              Biomarkers
            </a>
            <JoinWaitlistButton
              onClick={() => {
                setShowModal(true)
                setMobileMenuOpen(false)
              }}
              className="w-full bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold px-6 py-3 rounded-lg"
            >
              GET YOUR EDGE
            </JoinWaitlistButton>
          </div>
        </div>
      </nav>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
