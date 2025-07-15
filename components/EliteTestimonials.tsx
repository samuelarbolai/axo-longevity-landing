"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

const athleteTestimonials = [
  {
    quote:
      "My VO2 max increased 12% in 3 months. The biomarker insights showed exactly where I was losing efficiency in my training.",
    athlete: "Marcus Chen",
    sport: "Olympic Cyclist",
    achievement: "2x Gold Medalist",
    metrics: "VO2: 72.3 ml/kg/min",
    image: "/placeholder.svg?height=400&width=400&text=Olympic+Cyclist",
  },
  {
    quote:
      "Axo identified my iron deficiency before it became performance-limiting. My power output increased 18% after optimization.",
    athlete: "Sarah Rodriguez",
    sport: "Professional Triathlete",
    achievement: "Ironman World Champion",
    metrics: "FTP: 285W → 340W",
    image: "/placeholder.svg?height=400&width=400&text=Triathlete",
  },
  {
    quote:
      "The hormonal analysis revealed why my recovery was suffering. Now I'm training harder with 40% less fatigue.",
    athlete: "Jake Thompson",
    sport: "NFL Running Back",
    achievement: "Pro Bowl Selection",
    metrics: "Recovery: 18hrs → 11hrs",
    image: "/placeholder.svg?height=400&width=400&text=NFL+Player",
  },
  {
    quote: "Understanding my lactate threshold changed everything. I can now maintain race pace 25% longer.",
    athlete: "Elena Petrov",
    sport: "Marathon Runner",
    achievement: "Sub-2:20 Marathon",
    metrics: "Lactate: 4.2 → 2.8 mmol/L",
    image: "/placeholder.svg?height=400&width=400&text=Marathon+Runner",
  },
  {
    quote: "The inflammation markers helped me prevent overtraining. My consistency improved dramatically.",
    athlete: "David Kim",
    sport: "CrossFit Athlete",
    achievement: "Games Qualifier",
    metrics: "CRP: 8.2 → 1.1 mg/L",
    image: "/placeholder.svg?height=400&width=400&text=CrossFit+Athlete",
  },
]

export const ScrollingTestimonials = ({ children, reverse = false }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      if (ref.current) {
        const scrollAmount = (elapsed / 50) % (ref.current.scrollWidth / 2)
        ref.current.scrollLeft = reverse ? ref.current.scrollWidth / 2 - scrollAmount : scrollAmount
      }
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [reverse])

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-8 px-8 w-max">
        {children}
        {children}
      </div>
    </div>
  )
}

export default function EliteTestimonials() {
  return (
    <section id="athlete-stories" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-inter font-black mb-6">
            <span className="text-white">ELITE</span>
            <br />
            <span className="gradient-text">ATHLETES</span>
          </h2>
          <p className="text-xl text-gray-300 font-source max-w-3xl mx-auto">
            Join thousands of professional athletes who've unlocked their competitive edge with precision biomarker
            analysis.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="space-y-12">
          <ScrollingTestimonials>
            {athleteTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-8 max-w-[400px] flex-shrink-0 whitespace-normal"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.athlete}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-electric-blue"
                  />
                  <div>
                    <div className="text-white font-inter font-bold">{testimonial.athlete}</div>
                    <div className="text-electric-blue font-source text-sm">{testimonial.sport}</div>
                    <div className="text-gold font-source text-xs">{testimonial.achievement}</div>
                  </div>
                </div>

                <blockquote className="text-gray-300 font-source leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>

                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-neon-green font-mono text-sm font-bold">{testimonial.metrics}</div>
                </div>
              </div>
            ))}
          </ScrollingTestimonials>

          {/* Elite Partnerships */}
          <div className="text-center">
            <div className="text-gray-400 font-source text-lg mb-8">Trusted by Elite Organizations</div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {[
                "Olympic Training Center",
                "Team USA",
                "Formula 1 Teams",
                "NFL Performance Labs",
                "Premier League Clubs",
              ].map((org, index) => (
                <div key={index} className="text-gray-500 font-inter font-bold text-lg">
                  {org}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
