"use client"
import { useState, useEffect } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"
import PerformanceMetrics from "./PerformanceMetrics"

export default function AthleteHero() {
  const [showModal, setShowModal] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)
  const [scrollY, setScrollY] = useState(0)

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
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate animation values
  const titleOpacity = Math.max(0, 1 - scrollY / 400)
  const titleScale = Math.max(0.8, 1 - scrollY * 0.0003)
  const subtitleOpacity = Math.max(0, 1 - scrollY / 500)
  const metricsOpacity = Math.max(0, 1 - scrollY / 600)
  const buttonOpacity = Math.max(0, 1 - scrollY / 700)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-soft-blue/10 overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 subtle-pattern opacity-30"></div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-sage-green/20 rounded-full blur-xl floating"
          style={{
            transform: `translate(${Math.sin(scrollY * 0.01) * 20}px, ${Math.cos(scrollY * 0.01) * 15}px)`,
            opacity: Math.max(0, 1 - scrollY / 800),
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-soft-blue/20 rounded-full blur-xl floating"
          style={{
            animationDelay: "2s",
            transform: `translate(${Math.cos(scrollY * 0.008) * -25}px, ${Math.sin(scrollY * 0.008) * 20}px)`,
            opacity: Math.max(0, 1 - scrollY / 600),
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-lavender/20 rounded-full blur-xl floating"
          style={{
            animationDelay: "4s",
            transform: `translate(${Math.sin(scrollY * 0.006) * 30}px, ${Math.cos(scrollY * 0.006) * -25}px)`,
            opacity: Math.max(0, 1 - scrollY / 700),
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for navbar */}
        <div className="h-16 md:h-20"></div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center py-8 md:py-12">
          {/* Animated Main Headline */}
          <div className="mb-12 md:mb-16">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-light tracking-tight mb-6 md:mb-8 leading-none"
              style={{
                opacity: titleOpacity,
                transform: `scale(${titleScale}) translateY(${scrollY * 0.3}px)`,
                filter: `blur(${scrollY * 0.015}px)`,
              }}
            >
              <span
                className="text-charcoal block"
                style={{
                  transform: `translateX(${scrollY * 0.1}px)`,
                }}
              >
                ELEVATE
              </span>
              <span
                className="gradient-text font-medium block"
                style={{
                  transform: `translateX(${scrollY * -0.1}px)`,
                }}
              >
                YOUR PEAK
              </span>
            </h1>
            <div
              className="max-w-3xl lg:max-w-5xl mx-auto space-y-3 md:space-y-4"
              style={{
                opacity: subtitleOpacity,
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-charcoal/70 font-source font-light leading-relaxed">
                Sophisticated Performance Analysis for Elite Athletes
              </p>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-soft-blue font-medium">
                Refined biomarker insights trusted by Olympic champions
              </p>
            </div>
          </div>

          {/* Animated Performance Metrics Display */}
          <div
            className="mb-12 md:mb-16"
            style={{
              opacity: metricsOpacity,
              transform: `translateY(${scrollY * 0.15}px) scale(${Math.max(0.9, 1 - scrollY * 0.0002)})`,
            }}
          >
            <PerformanceMetrics stats={performanceStats} currentIndex={currentMetric} />
          </div>

          {/* Animated CTA Section */}
          <div
            className="space-y-8 md:space-y-12"
            style={{
              opacity: buttonOpacity,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <JoinWaitlistButton
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium text-lg md:text-xl px-12 md:px-16 py-4 md:py-6 rounded-2xl elegant-glow hover:scale-105 transition-all duration-500 shadow-lg"
              style={{
                transform: `scale(${Math.max(0.95, 1 - scrollY * 0.0001)})`,
              }}
            >
              Begin Your Journey
            </JoinWaitlistButton>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm md:text-base text-charcoal/60 font-source">
              {[
                { color: "sage-green", text: "100+ Elite Biomarkers", delay: 0 },
                { color: "soft-blue", text: "Olympic-Level Analysis", delay: 1 },
                { color: "warm-coral", text: "Personalized Protocols", delay: 2 },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 md:gap-4"
                  style={{
                    transform: `translateY(${Math.sin(scrollY * 0.01 + item.delay) * 5}px)`,
                    opacity: Math.max(0.6, 1 - scrollY * 0.0008),
                  }}
                >
                  <div
                    className={`w-3 h-3 md:w-4 md:h-4 bg-${item.color}/60 rounded-full gentle-pulse`}
                    style={{ animationDelay: `${item.delay}s` }}
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div
          className="flex justify-center pb-8 md:pb-12"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-soft-blue/40 rounded-full flex justify-center">
            <div
              className="w-1 h-3 md:h-4 bg-soft-blue/60 rounded-full mt-2 md:mt-3 animate-bounce"
              style={{
                animationDuration: `${2 + scrollY * 0.01}s`,
              }}
            />
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
