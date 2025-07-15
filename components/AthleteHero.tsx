"use client"
import { useState, useEffect } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

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
    <section className="relative min-h-screen bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Spacer for navbar */}
        <div className="h-20"></div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 leading-tight">
              <span className="text-neutral-400 block mb-4">Stay ahead of your</span>
              <span className="text-neutral-900 font-normal block">performance limits</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed">
                Meet AXO Elite. Your performance companion for the rest of your career.
              </p>
              <p className="text-lg md:text-xl text-neutral-500">From the comfort of your training environment.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-20">
            <JoinWaitlistButton
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join the waitlist
            </JoinWaitlistButton>
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
