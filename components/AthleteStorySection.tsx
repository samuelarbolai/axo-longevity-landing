"use client"
import { useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function AthleteStorySection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 h-96 md:h-[500px]">
          <img
            src="/placeholder.svg?height=500&width=1200&text=Elite+Athletes+Training+Together"
            alt="Elite athletes training together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">"It runs in the team."</h2>
              <p className="text-xl md:text-2xl font-light opacity-90">
                For those of us with championship aspirations, the best time for
                <br />
                performance optimization is now.
              </p>
            </div>
          </div>
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
