"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

const athleteTestimonials = [
  {
    quote:
      "The sophisticated analysis revealed optimization opportunities I never knew existed. My VO2 max improved 12% in just three months.",
    athlete: "Marcus Chen",
    sport: "Olympic Cyclist",
    achievement: "2x Gold Medalist",
    metrics: "VO2: 72.3 ml/kg/min",
    image: "/placeholder.svg?height=400&width=400&text=Olympic+Cyclist",
  },
  {
    quote:
      "Axo's elegant approach to biomarker analysis identified subtle deficiencies before they impacted performance. Truly revolutionary.",
    athlete: "Sarah Rodriguez",
    sport: "Professional Triathlete",
    achievement: "Ironman World Champion",
    metrics: "FTP: 285W → 340W",
    image: "/placeholder.svg?height=400&width=400&text=Triathlete",
  },
  {
    quote:
      "The personalized insights transformed my recovery protocol. I'm training at higher intensities with significantly less fatigue.",
    athlete: "Jake Thompson",
    sport: "NFL Running Back",
    achievement: "Pro Bowl Selection",
    metrics: "Recovery: 18hrs → 11hrs",
    image: "/placeholder.svg?height=400&width=400&text=NFL+Player",
  },
  {
    quote:
      "Understanding my lactate dynamics changed everything. I can now sustain race pace 25% longer with confidence.",
    athlete: "Elena Petrov",
    sport: "Marathon Runner",
    achievement: "Sub-2:20 Marathon",
    metrics: "Lactate: 4.2 → 2.8 mmol/L",
    image: "/placeholder.svg?height=400&width=400&text=Marathon+Runner",
  },
  {
    quote: "The precision of their analysis helped me prevent overtraining. My consistency has improved dramatically.",
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
        const scrollAmount = (elapsed / 80) % (ref.current.scrollWidth / 2)
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
    <section id="athlete-stories" className="py-24 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-inter font-light mb-8">
            <span className="text-charcoal">Elite</span>
            <br />
            <span className="gradient-text font-medium">Success Stories</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-source max-w-3xl mx-auto leading-relaxed">
            Join thousands of professional athletes who've elevated their performance with sophisticated biomarker
            analysis.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="space-y-16">
          <ScrollingTestimonials>
            {athleteTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 max-w-[400px] flex-shrink-0 whitespace-normal soft-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.athlete}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-soft-blue/30"
                  />
                  <div>
                    <div className="text-charcoal font-inter font-medium">{testimonial.athlete}</div>
                    <div className="text-soft-blue font-source text-sm">{testimonial.sport}</div>
                    <div className="text-warm-coral font-source text-xs">{testimonial.achievement}</div>
                  </div>
                </div>

                <blockquote className="text-charcoal/70 font-source leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="bg-sage-green/10 border border-sage-green/20 rounded-lg p-4">
                  <div className="text-sage-green font-mono text-sm font-medium">{testimonial.metrics}</div>
                </div>
              </div>
            ))}
          </ScrollingTestimonials>

          {/* Elite Partnerships */}
          <div className="text-center">
            <div className="text-charcoal/60 font-source text-lg mb-8">Trusted by Elite Organizations</div>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
              {[
                "Olympic Training Center",
                "Team USA",
                "Formula 1 Teams",
                "NFL Performance Labs",
                "Premier League Clubs",
              ].map((org, index) => (
                <div key={index} className="text-charcoal/50 font-inter font-medium text-lg">
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
