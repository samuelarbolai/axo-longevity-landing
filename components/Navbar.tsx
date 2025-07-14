"use client"
import { useEffect, useState } from "react"
import HeroModal from "./HeroModal"
import Image from "next/image"
import JoinWaitlistButton from "./JoinWaitlistButton"
import { useLanguage } from "../context/LanguageContext"

function Navbar({ variant = "b" }) {
  const [scrolled, setScrolled] = useState(false)
  const [justScrolled, setJustScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > (window.innerWidth < 1024 ? 273 : 820))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (scrolled) {
      setJustScrolled(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setJustScrolled(false))
        })
      })
    }
  }, [scrolled])

  return (
    <>
      <div className="lg:hidden">
        <div
          className={`navbar fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
            variant === "b" || scrolled ? "bg-[#fef9ef] text-gray-700" : "bg-transparent text-white"
          }`}
        >
          <div className="flex-none">
            <button
              onClick={() => setDrawerOpen(true)}
              className={`btn btn-ghost btn-circle text-4xl ${
                variant === "b" || scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              ☰
            </button>
          </div>
          <div className="flex-1 flex justify-center text-4xl tracking-wide font-extralight">
            <Image
              src="/placeholder.svg?height=64&width=160"
              alt="Logo"
              width={160}
              height={64}
              className="h-10 aspect-auto"
            />
          </div>
        </div>

        <div
          className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`transform transition-transform duration-300 w-80 bg-[#fef9ef] p-6 text-xl text-gray-800 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col items-center space-y-6`}
          >
            <button
              onClick={() => setDrawerOpen(false)}
              className="btn btn-ghost btn-circle absolute top-4 right-4 text-2xl"
            >
              ×
            </button>
            <a href="#mission" onClick={() => setDrawerOpen(false)} className="block w-full text-center pt-10">
              Mission
            </a>
            <a href="#our-services" onClick={() => setDrawerOpen(false)} className="block w-full text-center">
              Our Services
            </a>
            <a href="#testimonials" onClick={() => setDrawerOpen(false)} className="block w-full text-center">
              Testimonials
            </a>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border border-gray-400 px-2 py-1 rounded"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="de">DE</option>
            </select>
            <JoinWaitlistButton
              onClick={() => {
                setDrawerOpen(false)
                setShowModal(true)
              }}
              fullWidth
            />
          </div>
          <div className="flex-1 bg-black bg-opacity-30" onClick={() => setDrawerOpen(false)}></div>
        </div>
      </div>
      <nav
        className={`hidden lg:flex fixed top-0 left-0 w-full items-center justify-between px-16 py-10 text-xl font-normal z-50 transition-all duration-300 scroll-smooth ${
          variant === "b" || scrolled ? "bg-[#fef9ef] text-gray-700" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto lg:mx-0 text-4xl tracking-wide font-extralight">
          <Image
            src="/placeholder.svg?height=64&width=160"
            alt="Logo"
            width={160}
            height={64}
            className="h-16 aspect-auto"
          />
        </div>
        <div
          className={`hidden lg:flex gap-6 items-center text-lg font-normal ${
            variant === "b" || scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <a href="#mission" className="hover:underline">
            Mission
          </a>
          <a href="#our-services" className="hover:underline">
            Our Services
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-transparent border border-gray-400 px-2 py-1 rounded"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">DE</option>
          </select>
          <JoinWaitlistButton onClick={() => setShowModal(true)} textSize="text-lg" />
        </div>
      </nav>
      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default Navbar
