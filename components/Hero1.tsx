"use client"
import { useState, useEffect, useRef } from "react"
import HeroModal from "./HeroModal"
import Image from "next/image"

function Hero1() {
  const [showModal, setShowModal] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const cieloRef = useRef(null)
  const [sectionHeight, setSectionHeight] = useState("100vh")
  const [cieloHeight, setCieloHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0)
  const [isLandscapeSmMd, setIsLandscapeSmMd] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isSmMd = width < 1024
      const isLandscape = width > height
      setIsLandscapeSmMd(isSmMd && isLandscape)
    }
    checkOrientation()
    window.addEventListener("resize", checkOrientation)
    return () => window.removeEventListener("resize", checkOrientation)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [viewportHeight])

  const handleImageLoad = () => {
    if (cieloRef.current) {
      setCieloHeight(cieloRef.current.naturalHeight)
      setSectionHeight(`${cieloRef.current.naturalHeight * 0.67}px`)
    }
  }

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const threshold = Math.max(cieloHeight - viewportHeight, 0)

  return (
    <>
      <section
        id="hero"
        style={{ height: sectionHeight, color: "#fef9ef" }}
        className="hidden lg:flex w-full flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden"
      >
        <Image
          ref={cieloRef}
          src="/cielo.png"
          alt="Cielo"
          width={1920}
          height={1080}
          onLoad={handleImageLoad}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          className="fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY <= threshold * 0.55 ? 0 : -(scrollY - threshold * 0.55)}px)`,
          }}
        >
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-serif whitespace-nowrap text-[#fef9ef]">Long Live.</h2>
        </div>
        <Image
          src="/Mujer.png"
          alt="Mujer"
          width={600}
          height={800}
          className="absolute top-[6%] left-1/2 transform -translate-x-1/2 h-[32%] object-contain z-10"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.52}px)` }}
        />

        <div className="absolute bottom-0 w-full text-center pb-12 md:pb-16 z-10">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white font-cursive leading-tight">
            Long live jumping <br /> off the dock
          </p>
        </div>
      </section>

      <section className="block lg:hidden w-full min-h-screen flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden bg-[#fef9ef]">
        <Image
          src="/cielo.png"
          alt="Cielo"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 pointer-events-none">
          {scrollY <= 273 && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif" style={{ color: "#fef9ef" }}>
              Long Live.
            </h2>
          )}
        </div>
        {scrollY <= 450 && (
          <Image
            src="/Mujer.png"
            alt="Mujer"
            width={600}
            height={800}
            className="absolute top-[6%] left-1/2 transform -translate-x-1/2 h-[32%] object-contain z-10"
            style={{ transform: `translateX(-50%) translateY(${scrollY * 0.52}px)` }}
          />
        )}
        <div className="absolute bottom-0 w-full text-center pb-20 md:pb-28 z-10">
          <p className="text-2xl md:text-3xl lg:text-4xl text-black font-cursive leading-tight">
            Long live jumping <br /> off the dock
          </p>
        </div>
      </section>

      {isLandscapeSmMd && (
        <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center z-[9999] text-center px-4">
          <p className="text-lg md:text-xl font-semibold">
            Please rotate your device to use it in portrait orientation.
          </p>
        </div>
      )}

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default Hero1
