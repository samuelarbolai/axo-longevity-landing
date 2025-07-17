"use client"
import React, { useEffect, useState } from "react"
import { useLanguage } from "./LanguageProvider"
import translations from "../lib/translations"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"
import { ScrollingRow } from "./Landing6"

const heroImages = [
  "/hero1b1.webp",
  "/hero1b2.webp",
  "/hero1b3.webp",
  "/hero1b4.webp",
  "/hero1b5.webp",
  "/hero1b6.webp",
  "/hero1b7.webp",
]

export default function Hero1B() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    let accumulatedScroll = 0
    const animationThreshold = 1200 // Total scroll needed to complete animation

    const handleScroll = (e) => {
      if (!animationComplete) {
        e.preventDefault()

        // Accumulate scroll delta
        const delta = e.deltaY || e.detail || -e.wheelDelta
        accumulatedScroll += delta * 0.4 // Slow down the scroll accumulation

        // Clamp between 0 and threshold
        accumulatedScroll = Math.max(0, Math.min(animationThreshold, accumulatedScroll))

        setScrollY(accumulatedScroll)

        // Complete animation when threshold is reached
        if (accumulatedScroll >= animationThreshold) {
          setAnimationComplete(true)
          // Re-enable normal scrolling
          document.body.style.overflow = "auto"
        }
      }
    }

    const handleKeyDown = (e) => {
      if (
        !animationComplete &&
        (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " " || e.key === "PageDown" || e.key === "PageUp")
      ) {
        e.preventDefault()

        const delta = e.key === "ArrowUp" || e.key === "PageUp" ? -60 : 60
        accumulatedScroll += delta
        accumulatedScroll = Math.max(0, Math.min(animationThreshold, accumulatedScroll))

        setScrollY(accumulatedScroll)

        if (accumulatedScroll >= animationThreshold) {
          setAnimationComplete(true)
          document.body.style.overflow = "auto"
        }
      }
    }

    const handleTouchMove = (e) => {
      if (!animationComplete) {
        e.preventDefault()
      }
    }

    if (!animationComplete) {
      // Disable normal scrolling during animation
      document.body.style.overflow = "hidden"

      // Add event listeners
      window.addEventListener("wheel", handleScroll, { passive: false })
      window.addEventListener("keydown", handleKeyDown)
      window.addEventListener("touchmove", handleTouchMove, { passive: false })
    }

    return () => {
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("touchmove", handleTouchMove)
      document.body.style.overflow = "auto"
    }
  }, [animationComplete])

  // Intergalactic zoom effect
  const zoomProgress = Math.min(1, scrollY / 1200)
  const zoomScale = 1 + zoomProgress * 20
  const warpEffect = zoomProgress > 0.6 ? (zoomProgress - 0.6) * 10 : 0

  // Phase-based visibility
  const titleVisible = zoomProgress < 0.4
  const subtitleVisible = zoomProgress >= 0.2 && zoomProgress < 0.6
  const buttonVisible = zoomProgress >= 0.4 && zoomProgress < 0.8
  const carouselVisible = zoomProgress >= 0.7

  return (
    <>
      <section
        className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-center px-4 py-16 md:py-20 overflow-hidden"
        style={{ height: animationComplete ? "auto" : "100vh" }}
      >
        {/* Cosmic Background */}
        <div className="absolute inset-0">
          {/* Stars */}
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.8 + 0.2,
                transform: `scale(${1 + zoomProgress * 3}) translateZ(${scrollY * 0.1}px)`,
                filter: `blur(${warpEffect * 0.3}px)`,
              }}
            />
          ))}

          {/* Nebula effect */}
          <div
            className="absolute inset-0 bg-gradient-radial from-[#b4735a]/20 via-[#3c3d42]/10 to-transparent"
            style={{
              transform: `scale(${zoomScale}) rotate(${scrollY * 0.05}deg)`,
              opacity: Math.max(0, 1 - zoomProgress * 1.2),
            }}
          />

          {/* Warp streaks */}
          {warpEffect > 0 &&
            Array.from({ length: 30 }).map((_, i) => (
              <div
                key={`streak-${i}`}
                className="absolute bg-gradient-to-r from-transparent via-[#b4735a] to-transparent h-px"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${warpEffect * 15 + 5}px`,
                  opacity: warpEffect * 0.6,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
        </div>

        <div className="w-full mx-auto relative z-10">
          <div className="min-h-[85vh] flex flex-col justify-center items-center">
            {/* Phase 1: Title */}
            {titleVisible && (
              <h1
                className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-white font-light leading-tight"
                style={{
                  opacity: Math.max(0, 1 - zoomProgress * 3),
                  transform: `scale(${1 + zoomProgress * 2}) translateZ(${scrollY * 0.3}px)`,
                  textShadow: "0 0 20px rgba(180, 115, 90, 0.5)",
                }}
              >
                {t.title}
                <br />
                <div
                  className="italic text-[#b4735a] pt-2 md:pt-3 animate-pulse"
                  style={{
                    transform: `translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
                  }}
                >
                  {t.emphasis}
                </div>
              </h1>
            )}

            {/* Phase 2: Subtitle */}
            {subtitleVisible && (
              <p
                className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto font-light leading-relaxed"
                style={{
                  opacity: Math.max(0, (zoomProgress - 0.2) * 2.5),
                  transform: `scale(${1 + zoomProgress * 1.5}) translateZ(${scrollY * 0.2}px)`,
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                }}
              >
                {t.subtitle}
              </p>
            )}

            {/* Phase 3: Button */}
            {buttonVisible && (
              <div
                className="mt-8 md:mt-12"
                style={{
                  opacity: Math.max(0, (zoomProgress - 0.4) * 2.5),
                  transform: `scale(${1 + zoomProgress}) translateZ(${scrollY * 0.15}px)`,
                }}
              >
                <div className="relative">
                  {/* Glowing aura */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b4735a] to-[#3c3d42] rounded-full blur-xl opacity-50 animate-pulse scale-150" />

                  <JoinWaitlistButton
                    onClick={() => setIsModalOpen(true)}
                    className="relative bg-gradient-to-r from-[#b4735a] to-[#3c3d42] text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 border-2 border-white/30"
                  >
                    <span className="flex items-center gap-2">🚀 Begin Your Journey</span>
                  </JoinWaitlistButton>
                </div>
              </div>
            )}
          </div>

          {/* Phase 4: Final destination - Carousel */}
          {carouselVisible && (
            <div
              className="overflow-hidden mt-12 md:mt-16"
              style={{
                opacity: Math.max(0, (zoomProgress - 0.7) * 3),
                transform: `scale(${2 - zoomProgress}) translateZ(${scrollY * 0.1}px)`,
              }}
            >
              <div className="min-h-[60vh] md:min-h-[70vh] relative">
                {/* Cosmic glow around carousel */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#b4735a]/20 via-transparent to-[#3c3d42]/20 blur-3xl" />

                <ScrollingRow>
                  {heroImages.map((src, idx) => (
                    <img
                      key={idx}
                      src={src || "/placeholder.svg"}
                      className="h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] mx-2 object-cover border-2 border-white/20 shadow-2xl"
                      alt={`carousel-${idx}`}
                      style={{
                        transform: `scale(${1 + Math.sin(scrollY * 0.01 + idx) * 0.1}) rotate(${Math.sin(scrollY * 0.005 + idx) * 2}deg)`,
                        filter: `brightness(1.2) saturate(1.3) drop-shadow(0 0 20px rgba(180, 115, 90, 0.3))`,
                      }}
                    />
                  ))}
                </ScrollingRow>
              </div>
            </div>
          )}
        </div>

        {/* Warp Speed Indicator */}
        {zoomProgress > 0.1 && (
          <div className="fixed bottom-8 right-8 z-20">
            <div className="bg-black/70 backdrop-blur-md rounded-full p-3 border border-[#b4735a]/30">
              <div className="text-[#b4735a] text-xs font-mono">
                WARP {Math.floor(zoomProgress * 10)}.{Math.floor((zoomProgress * 100) % 10)}
              </div>
              <div className="w-12 h-1 bg-gray-800 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#b4735a] to-[#3c3d42] transition-all duration-100"
                  style={{ width: `${zoomProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Scroll instruction */}
        {!animationComplete && zoomProgress < 0.1 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/70 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white text-sm animate-pulse">
              Scroll to begin your intergalactic journey 🚀
            </div>
          </div>
        )}
      </section>

      {isModalOpen && <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  )
}
