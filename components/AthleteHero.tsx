"use client"
import { useState, useEffect } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"
import PerformanceMetrics from "./PerformanceMetrics"

export default function AthleteHero() {
  const [showModal, setShowModal] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)

  const performanceStats = [
    { label: "VO2 MAX", value: "65.2", unit: "ml/kg/min", change: "+12%" },
    { label: "RECOVERY", value: "18", unit: "hours", change: "-40%" },
    { label: "LACTATE", value: "2.1", unit: "mmol/L", change: "-25%" },
    { label: "POWER", value: "420", unit: "watts", change: "+18%" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % performanceStats.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let accumulatedScroll = 0
    const animationThreshold = 1000 // Total scroll needed to complete animation

    const handleScroll = (e) => {
      if (!animationComplete) {
        e.preventDefault()

        // Accumulate scroll delta
        const delta = e.deltaY || e.detail || -e.wheelDelta
        accumulatedScroll += delta * 0.5 // Slow down the scroll accumulation

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

        const delta = e.key === "ArrowUp" || e.key === "PageUp" ? -50 : 50
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

  // Intergalactic zoom calculations
  const zoomProgress = Math.min(1, scrollY / 1000)
  const zoomScale = 1 + zoomProgress * 15 // Zoom from 1x to 16x
  const starSpeed = zoomProgress * 100
  const warpEffect = zoomProgress > 0.7 ? (zoomProgress - 0.7) * 10 : 0

  // Element visibility based on zoom progress
  const titleVisible = zoomProgress < 0.3
  const subtitleVisible = zoomProgress >= 0.2 && zoomProgress < 0.5
  const metricsVisible = zoomProgress >= 0.4 && zoomProgress < 0.7
  const buttonVisible = zoomProgress >= 0.6

  return (
    <section
      className="relative min-h-screen bg-black overflow-hidden"
      style={{ height: animationComplete ? "auto" : "100vh" }}
    >
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {/* Static stars */}
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `scale(${1 + zoomProgress * 2}) translateZ(${scrollY * 0.1}px)`,
              filter: `blur(${warpEffect * 0.5}px)`,
            }}
          />
        ))}

        {/* Moving star streaks during warp */}
        {warpEffect > 0 &&
          Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`streak-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-white to-transparent h-px"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${warpEffect * 20 + 10}px`,
                opacity: warpEffect * 0.8,
                transform: `rotate(${Math.random() * 360}deg) translateX(${starSpeed}px)`,
                animation: `streak 0.5s linear infinite`,
              }}
            />
          ))}
      </div>

      {/* Nebula/Galaxy Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-blue-900/20 to-transparent"
          style={{
            transform: `scale(${zoomScale}) rotate(${scrollY * 0.1}deg)`,
            opacity: Math.max(0, 1 - zoomProgress * 1.5),
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent"
          style={{
            transform: `scale(${zoomScale * 0.8}) rotate(${-scrollY * 0.15}deg)`,
            opacity: Math.max(0, 0.8 - zoomProgress),
          }}
        />
      </div>

      {/* Floating cosmic particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              transform: `
                scale(${1 + zoomProgress * 3}) 
                translateZ(${scrollY * 0.2}px)
                translateX(${Math.sin(scrollY * 0.01 + i) * 50}px)
                translateY(${Math.cos(scrollY * 0.01 + i) * 30}px)
              `,
              opacity: Math.max(0, 1 - zoomProgress * 1.2),
              filter: `blur(${warpEffect}px)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for navbar */}
        <div className="h-16 md:h-20"></div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center py-8 md:py-12">
          {/* Phase 1: Title appears first */}
          {titleVisible && (
            <div
              className="mb-12 md:mb-16"
              style={{
                opacity: Math.max(0, 1 - zoomProgress * 4),
                transform: `scale(${1 + zoomProgress * 2}) translateZ(${scrollY * 0.3}px)`,
              }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-light tracking-tight mb-6 md:mb-8 leading-none text-white">
                <span className="block animate-pulse">ELEVATE</span>
                <span className="block text-cyan-400 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  YOUR PEAK
                </span>
              </h1>
            </div>
          )}

          {/* Phase 2: Subtitle fades in */}
          {subtitleVisible && (
            <div
              className="max-w-3xl lg:max-w-5xl mx-auto space-y-3 md:space-y-4 mb-12 md:mb-16"
              style={{
                opacity: Math.max(0, (zoomProgress - 0.2) * 3),
                transform: `scale(${1 + zoomProgress * 1.5}) translateZ(${scrollY * 0.2}px)`,
              }}
            >
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-source font-light leading-relaxed">
                Sophisticated Performance Analysis for Elite Athletes
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-cyan-400 font-medium">
                Refined biomarker insights trusted by Olympic champions
              </p>
            </div>
          )}

          {/* Phase 3: Performance Metrics */}
          {metricsVisible && (
            <div
              className="mb-12 md:mb-16"
              style={{
                opacity: Math.max(0, (zoomProgress - 0.4) * 3),
                transform: `scale(${1 + zoomProgress}) translateZ(${scrollY * 0.15}px)`,
              }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <PerformanceMetrics stats={performanceStats} currentIndex={currentMetric} />
              </div>
            </div>
          )}

          {/* Phase 4: Final destination - CTA Button */}
          {buttonVisible && (
            <div
              className="space-y-8 md:space-y-12"
              style={{
                opacity: Math.max(0, (zoomProgress - 0.6) * 2.5),
                transform: `scale(${Math.max(0.8, 2 - zoomProgress)}) translateZ(${scrollY * 0.1}px)`,
              }}
            >
              <div className="relative">
                {/* Glowing ring around button */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse scale-150" />

                <JoinWaitlistButton
                  onClick={() => setShowModal(true)}
                  className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-inter font-bold text-xl md:text-2xl px-16 md:px-20 py-6 md:py-8 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 border-2 border-white/30"
                >
                  <span className="relative z-10 flex items-center gap-3">🚀 Begin Your Journey</span>
                </JoinWaitlistButton>
              </div>

              {/* Final phase indicators */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base text-gray-300 font-source">
                {[
                  { icon: "🧬", text: "100+ Elite Biomarkers" },
                  { icon: "🏆", text: "Olympic-Level Analysis" },
                  { icon: "⚡", text: "Personalized Protocols" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 md:gap-4 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                    style={{
                      animationDelay: `${idx * 0.2}s`,
                    }}
                  >
                    <span className="text-lg animate-bounce" style={{ animationDelay: `${idx * 0.3}s` }}>
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Warp speed indicator */}
        {zoomProgress > 0.1 && (
          <div className="fixed bottom-8 right-8 z-20">
            <div className="bg-black/50 backdrop-blur-md rounded-full p-4 border border-cyan-500/30">
              <div className="text-cyan-400 text-sm font-mono">
                WARP {Math.floor(zoomProgress * 10)}.{Math.floor((zoomProgress * 100) % 10)}
              </div>
              <div className="w-16 h-2 bg-gray-800 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-100"
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
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <style jsx>{`
        @keyframes streak {
          0% { transform: translateX(-100px) rotate(var(--rotation)); }
          100% { transform: translateX(100px) rotate(var(--rotation)); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
