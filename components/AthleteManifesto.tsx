"use client"
import { useState } from "react"

export default function AthleteManifesto() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden performance-glow">
            <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <div className="text-2xl font-inter font-bold gradient-text">ELITE PERFORMANCE MANIFESTO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Content */}
        <div
          className={`space-y-8 text-center transition-all duration-500 ${expanded ? "" : "max-h-96 overflow-hidden"}`}
        >
          <h2 className="text-5xl md:text-6xl font-inter font-black text-white mb-8">
            PERFORM. RECOVER. <span className="gradient-text">DOMINATE.</span>
          </h2>

          <div className="text-2xl text-electric-blue font-inter font-bold mb-6">Our Code</div>

          <div className="space-y-6 text-lg text-gray-300 font-source leading-relaxed">
            <p>
              <strong className="text-white">Data is Power.</strong> Numbers don't lie, excuses do. We measure what
              matters—VO2 max, lactate threshold, hormonal optimization. Every biomarker tells a story of potential
              unleashed or wasted.
            </p>

            <p>
              <strong className="text-white">Elite Standards, No Compromise.</strong> The protocols that built Olympic
              champions now live in your pocket. Access isn't given—it's earned through dedication to excellence.
            </p>

            <p>
              <strong className="text-white">Pressure Forges Champions.</strong> We don't just track—we push. Share your
              metrics, compare with elites, iterate relentlessly. Heat that creates diamonds, not comfort zones.
            </p>

            <p>
              <strong className="text-white">Recovery is Victory.</strong> Rest isn't weakness—it's strategic dominance.
              We optimize your downtime so your uptime destroys competition.
            </p>

            <p>
              <strong className="text-white">Marginal Gains, Massive Results.</strong> One beat lower resting heart
              rate. One percent better oxygen efficiency. Stack the inches, own the podium.
            </p>

            <p>
              <strong className="text-white">Your Data, Your Edge.</strong> Your biomarkers are classified
              intel—encrypted, protected, never sold. Your competitive advantage stays yours.
            </p>

            <div className="text-2xl text-neon-green font-inter font-bold my-8">Our Promise</div>

            <p>
              <strong className="text-white">Peak Performance, Extended.</strong> Longer careers, higher peaks, lives
              lived at maximum signal. No settling for average.
            </p>

            <div className="text-2xl text-gold font-inter font-bold my-8">Your Choice</div>

            <p>
              <strong className="text-white">Champions Choose Differently.</strong> If you crave 5 AM training sessions
              and decade-long dominance, step up. Bring your hunger, your discipline, your refusal to quit.
            </p>

            <p className="text-xl font-inter font-bold gradient-text">
              We supply the data, the community, the relentless edge.
            </p>

            <p className="text-2xl font-inter font-black text-white">
              Perform at your peak or watch others claim your podium.
            </p>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            {expanded ? "Show Less" : "Read Full Manifesto"}
          </button>
        </div>
      </div>
    </section>
  )
}
