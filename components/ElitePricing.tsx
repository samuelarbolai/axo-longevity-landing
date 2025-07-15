"use client"
import { useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function ElitePricing() {
  const [showModal, setShowModal] = useState(false)

  const pricingTiers = [
    {
      name: "FOUNDATION",
      price: "$499",
      period: "/year",
      description: "For dedicated fitness enthusiasts",
      features: [
        "100+ Essential Biomarkers",
        "Quarterly Analysis",
        "Performance Insights",
        "Email Support",
        "Mobile Dashboard",
      ],
      popular: false,
      gradient: "from-charcoal/10 to-charcoal/5",
    },
    {
      name: "PERFORMANCE",
      price: "$799",
      period: "/year",
      description: "For serious competitive athletes",
      features: [
        "150+ Advanced Biomarkers",
        "Monthly Analysis Available",
        "Sport-Specific Insights",
        "Recovery Optimization",
        "Priority Support",
        "Personalized Protocols",
        "Nutrition Guidance",
      ],
      popular: true,
      gradient: "from-soft-blue to-sage-green",
    },
    {
      name: "ELITE",
      price: "$1,299",
      period: "/year",
      description: "Olympic-level analysis for professionals",
      features: [
        "200+ Elite Biomarkers",
        "Bi-weekly Analysis",
        "Real-time Monitoring",
        "Personal Performance Coach",
        "24/7 Elite Support",
        "Custom Protocols",
        "Competition Preparation",
        "Team Integration",
      ],
      popular: false,
      gradient: "from-lavender/20 to-warm-coral/20",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-inter font-light mb-8">
            <span className="text-charcoal">Elite</span>
            <br />
            <span className="gradient-text font-medium">Performance Tiers</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-source max-w-3xl mx-auto leading-relaxed">
            Choose your level of excellence. Every tier includes sophisticated biomarker analysis trusted by
            professional athletes worldwide.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative glass-effect rounded-3xl p-10 transition-all duration-500 hover:scale-105 ${
                tier.popular ? "soft-border elegant-glow" : "border border-charcoal/10 hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium px-8 py-3 rounded-full text-sm shadow-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h3 className="text-2xl font-inter font-medium text-charcoal mb-3">{tier.name}</h3>
                <p className="text-charcoal/60 font-source text-sm mb-8">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-mono font-light gradient-text">{tier.price}</span>
                  <span className="text-charcoal/60 font-source ml-2">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-charcoal/70 font-source">
                    <div className="w-5 h-5 rounded-full bg-sage-green/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-sage-green"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <JoinWaitlistButton
                onClick={() => setShowModal(true)}
                className={`w-full py-4 rounded-xl font-inter font-medium transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-soft-blue to-sage-green text-white hover:scale-105 shadow-lg"
                    : "bg-white/60 text-charcoal hover:bg-white/80 border border-charcoal/20"
                }`}
              >
                {tier.popular ? "Begin Your Journey" : "Get Started"}
              </JoinWaitlistButton>
            </div>
          ))}
        </div>

        {/* Comparison Features */}
        <div className="glass-effect rounded-3xl p-12 soft-border">
          <h3 className="text-3xl font-inter font-medium text-center mb-12">
            <span className="text-charcoal">What Makes Us</span>
            <span className="gradient-text"> Exceptional</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🏆</div>
              <h4 className="text-xl font-inter font-medium text-charcoal mb-4">Olympic Standards</h4>
              <p className="text-charcoal/60 font-source leading-relaxed">
                Sophisticated protocols used by Olympic Training Centers and elite performance institutes
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">⚡</div>
              <h4 className="text-xl font-inter font-medium text-charcoal mb-4">Precision Analysis</h4>
              <p className="text-charcoal/60 font-source leading-relaxed">
                Advanced biomarker insights delivered faster than any other platform in the industry
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">🎯</div>
              <h4 className="text-xl font-inter font-medium text-charcoal mb-4">Personalized Excellence</h4>
              <p className="text-charcoal/60 font-source leading-relaxed">
                Customized biomarker panels tailored to your specific sport and performance objectives
              </p>
            </div>
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
