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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left aligned */}
            <div className="flex items-center">
              <div className="text-3xl font-serif text-neutral-900 tracking-wide">AXO</div>
            </div>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#performance-lab"
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium text-sm"
              >
                Performance Lab
              </a>
              <a
                href="#elite-protocols"
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium text-sm"
              >
                Elite Protocols
              </a>
              <a
                href="#athlete-stories"
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium text-sm"
              >
                Success Stories
              </a>
              <a
                href="#biomarkers"
                className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium text-sm"
              >
                Biomarkers
              </a>

              <JoinWaitlistButton
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 text-sm ml-4"
              >
                Join the waitlist
              </JoinWaitlistButton>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-neutral-900 p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-neutral-900 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-neutral-900 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-neutral-900 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white border-t border-neutral-200`}
        >
          <div className="px-6 py-6 space-y-6">
            <a
              href="#performance-lab"
              className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Performance Lab
            </a>
            <a
              href="#elite-protocols"
              className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Elite Protocols
            </a>
            <a
              href="#athlete-stories"
              className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Success Stories
            </a>
            <a
              href="#biomarkers"
              className="block text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              Biomarkers
            </a>
            <JoinWaitlistButton
              onClick={() => {
                setShowModal(true)
                setMobileMenuOpen(false)
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full"
            >
              Join the waitlist
            </JoinWaitlistButton>
          </div>
        </div>
      </nav>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
