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
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Performance Lines Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-30 animate-pulse"></div>
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-inter font-black tracking-tight mb-4">
            <span className="text-white">OPTIMIZE</span>
            <br />
            <span className="gradient-text">YOUR EDGE</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-source font-light max-w-4xl mx-auto leading-relaxed">
            Elite Performance Starts With Elite Data
            <br />
            <span className="text-electric-blue font-medium">
              The same biomarker analysis used by Olympic champions
            </span>
          </p>
        </div>

        {/* Performance Metrics Display */}
        <div className="mb-12">
          <PerformanceMetrics stats={performanceStats} currentIndex={currentMetric} />
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <JoinWaitlistButton
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold text-xl px-12 py-4 rounded-lg performance-glow hover:scale-105 transition-all duration-300"
          >
            JOIN THE ELITE
          </JoinWaitlistButton>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full heartbeat"></div>
              <span>100+ Elite Biomarkers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-blue rounded-full heartbeat" style={{ animationDelay: "0.5s" }}></div>
              <span>Olympic-Level Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full heartbeat" style={{ animationDelay: "1s" }}></div>
              <span>Pro Athlete Protocols</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
