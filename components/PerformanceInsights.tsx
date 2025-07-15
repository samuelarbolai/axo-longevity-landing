"use client"
import { useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function PerformanceInsights() {
  const [showModal, setShowModal] = useState(false)
  const [showLabels, setShowLabels] = useState(false)

  const athleteProfiles = [
    {
      image: "/placeholder.svg?height=400&width=300&text=Elite+Cyclist",
      sport: "Cycling",
      issues: ["VO2 Plateau", "Recovery Issues"],
      name: "Elite Cyclist",
    },
    {
      image: "/placeholder.svg?height=400&width=300&text=Marathon+Runner",
      sport: "Running",
      issues: ["Iron Deficiency", "Overtraining"],
      name: "Marathon Runner",
    },
    {
      image: "/placeholder.svg?height=400&width=300&text=Swimmer",
      sport: "Swimming",
      issues: ["Hormonal Imbalance", "Inflammation"],
      name: "Elite Swimmer",
    },
    {
      image: "/placeholder.svg?height=400&width=300&text=CrossFit+Athlete",
      sport: "CrossFit",
      issues: ["Metabolic Stress", "Joint Health"],
      name: "CrossFit Athlete",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-neutral-900 mb-8 leading-tight">
            Turn this insight into a<br />
            <span className="font-normal">lifelong advantage.</span>
          </h2>
          <p className="text-xl text-neutral-600 font-light">Monitor and optimize early to perform better, longer.</p>
        </div>

        {/* Athlete Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {athleteProfiles.map((athlete, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setShowLabels(true)}
              onMouseLeave={() => setShowLabels(false)}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src={athlete.image || "/placeholder.svg"}
                  alt={athlete.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Labels */}
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${showLabels ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="absolute bottom-6 left-6 space-y-3">
                    {athlete.issues.map((issue, issueIndex) => (
                      <div
                        key={issueIndex}
                        className="bg-white/90 backdrop-blur-sm text-neutral-800 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {issue}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <JoinWaitlistButton
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-12 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the waitlist
          </JoinWaitlistButton>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
