"use client"
import { useState, useEffect } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"
import PerformanceMetrics from "./PerformanceMetrics"

export default function AthleteHero() {
  const [showModal, setShowModal] = useState(false)
  const [currentMetric, setCurrentMetric] = useState(0)

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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-soft-blue/10 overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 subtle-pattern opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sage-green/20 rounded-full blur-xl floating"></div>
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-soft-blue/20 rounded-full blur-xl floating"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-lavender/20 rounded-full blur-xl floating"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-inter font-light tracking-tight mb-6">
            <span className="text-charcoal">ELEVATE</span>
            <br />
            <span className="gradient-text font-medium">YOUR PEAK</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/70 font-source font-light max-w-4xl mx-auto leading-relaxed">
            Sophisticated Performance Analysis for Elite Athletes
            <br />
            <span className="text-soft-blue font-medium">Refined biomarker insights trusted by Olympic champions</span>
          </p>
        </div>

        {/* Performance Metrics Display */}
        <div className="mb-16">
          <PerformanceMetrics stats={performanceStats} currentIndex={currentMetric} />
        </div>

        {/* CTA Section */}
        <div className="space-y-8">
          <JoinWaitlistButton
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium text-xl px-16 py-5 rounded-2xl elegant-glow hover:scale-105 transition-all duration-500 shadow-lg"
          >
            Begin Your Journey
          </JoinWaitlistButton>

          <div className="flex flex-wrap justify-center gap-12 text-sm text-charcoal/60 font-source">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-sage-green/60 rounded-full gentle-pulse"></div>
              <span>100+ Elite Biomarkers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-soft-blue/60 rounded-full gentle-pulse" style={{ animationDelay: "1s" }}></div>
              <span>Olympic-Level Analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 bg-warm-coral/60 rounded-full gentle-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <span>Personalized Protocols</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-soft-blue/40 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-soft-blue/60 rounded-full mt-3 animate-bounce"></div>
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
