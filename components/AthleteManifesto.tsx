"use client"
import { useState } from "react"

export default function AthleteManifesto() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden elegant-glow">
            <div className="bg-gradient-to-r from-soft-blue/20 to-sage-green/20 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">✨</div>
                <div className="text-2xl font-inter font-medium gradient-text">ELITE PERFORMANCE PHILOSOPHY</div>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Content */}
        <div
          className={`space-y-10 text-center transition-all duration-500 ${expanded ? "" : "max-h-96 overflow-hidden"}`}
        >
          <h2 className="text-5xl md:text-6xl font-inter font-light text-charcoal mb-12">
            ELEVATE. REFINE. <span className="gradient-text font-medium">EXCEL.</span>
          </h2>

          <div className="text-2xl text-soft-blue font-inter font-medium mb-8">Our Philosophy</div>

          <div className="space-y-8 text-lg text-charcoal/70 font-source leading-relaxed">
            <p>
              <strong className="text-charcoal">Precision Through Data.</strong> Every measurement tells a story of
              potential. We transform numbers into insights, insights into excellence. Your biomarkers become your
              roadmap to peak performance.
            </p>

            <p>
              <strong className="text-charcoal">Elegance in Excellence.</strong> True performance isn't about force—it's
              about finesse. We bring Olympic-level protocols to your fingertips with sophisticated simplicity.
            </p>

            <p>
              <strong className="text-charcoal">Thoughtful Optimization.</strong> Growth requires intention, not just
              intensity. We measure, refine, and elevate—creating sustainable excellence, not fleeting gains.
            </p>

            <p>
              <strong className="text-charcoal">Recovery as Mastery.</strong> Rest is not retreat—it's strategic
              advancement. We optimize your restoration so your performance soars higher.
            </p>

            <p>
              <strong className="text-charcoal">Incremental Brilliance.</strong> One percent better sleep quality. A
              fraction lower inflammation. Small improvements compound into extraordinary results.
            </p>

            <p>
              <strong className="text-charcoal">Privacy with Purpose.</strong> Your performance data is
              sacred—protected, private, and used solely for your advancement.
            </p>

            <div className="text-2xl text-sage-green font-inter font-medium my-10">Our Commitment</div>

            <p>
              <strong className="text-charcoal">Sustained Excellence.</strong> Longer careers, higher peaks, performance
              that endures. We build athletes who thrive across decades, not just seasons.
            </p>

            <div className="text-2xl text-warm-coral font-inter font-medium my-10">Your Journey</div>

            <p>
              <strong className="text-charcoal">Champions Choose Refinement.</strong> If you seek morning training
              sessions filled with purpose and careers defined by longevity, join us. Bring your dedication, your
              curiosity, your commitment to excellence.
            </p>

            <p className="text-xl font-inter font-medium gradient-text">
              We provide the insights, the community, the sophisticated edge.
            </p>

            <p className="text-2xl font-inter font-medium text-charcoal">
              Elevate your performance or remain where you are.
            </p>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium px-12 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {expanded ? "Show Less" : "Read Full Philosophy"}
          </button>
        </div>
      </div>
    </section>
  )
}
