"use client"
import { useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function ElitePricing() {
  const [showModal, setShowModal] = useState(false)
  const [selectedTier, setSelectedTier] = useState(1)

  const pricingTiers = [
    {
      name: "RECREATIONAL",
      price: "$499",
      period: "/year",
      description: "For dedicated fitness enthusiasts",
      features: [
        "100+ Essential Biomarkers",
        "Quarterly Testing",
        "Basic Performance Analytics",
        "Email Support",
        "Mobile App Access",
      ],
      popular: false,
      color: "gray",
    },
    {
      name: "COMPETITIVE",
      price: "$799",
      period: "/year",
      description: "For serious competitive athletes",
      features: [
        "150+ Advanced Biomarkers",
        "Monthly Testing Available",
        "Sport-Specific Analysis",
        "Performance Optimization",
        "Priority Support",
        "Recovery Protocols",
        "Nutrition Guidance",
      ],
      popular: true,
      color: "electric-blue",
    },
    {
      name: "ELITE/PRO",
      price: "$1,299",
      period: "/year",
      description: "Olympic-level analysis for pros",
      features: [
        "200+ Elite Biomarkers",
        "Bi-weekly Testing",
        "Real-time Monitoring",
        "Personal Performance Coach",
        "24/7 Support Hotline",
        "Custom Protocols",
        "Competition Prep",
        "Team Integration",
      ],
      popular: false,
      color: "neon-green",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-inter font-black mb-6">
            <span className="text-white">ELITE</span>
            <br />
            <span className="gradient-text">PERFORMANCE TIERS</span>
          </h2>
          <p className="text-xl text-gray-300 font-source max-w-3xl mx-auto">
            Choose your performance level. Every tier includes cutting-edge biomarker analysis used by professional
            athletes worldwide.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-black/50 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? "border-2 border-electric-blue performance-glow"
                  : "border border-gray-700 hover:border-electric-blue/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold px-6 py-2 rounded-full text-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-inter font-black text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 font-source text-sm mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-mono font-black gradient-text">{tier.price}</span>
                  <span className="text-gray-400 font-source ml-2">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 font-source">
                    <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-neon-green"></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <JoinWaitlistButton
                onClick={() => setShowModal(true)}
                className={`w-full py-4 rounded-xl font-inter font-bold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-electric-blue to-neon-green text-black hover:scale-105"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {tier.popular ? "TRAIN LIKE A PRO" : "GET STARTED"}
              </JoinWaitlistButton>
            </div>
          ))}
        </div>

        {/* Comparison Features */}
        <div className="bg-black/30 backdrop-blur-sm border border-electric-blue/20 rounded-3xl p-8">
          <h3 className="text-3xl font-inter font-bold text-center mb-8">
            <span className="text-white">What Makes Us</span>
            <span className="gradient-text"> Elite</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-inter font-bold text-white mb-2">Olympic Standards</h4>
              <p className="text-gray-400 font-source">
                Same protocols used by Olympic Training Centers and professional sports teams
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-inter font-bold text-white mb-2">Real-Time Data</h4>
              <p className="text-gray-400 font-source">
                Get results faster than any other platform with our advanced lab network
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-inter font-bold text-white mb-2">Sport-Specific</h4>
              <p className="text-gray-400 font-source">
                Customized biomarker panels for your specific sport and performance goals
              </p>
            </div>
          </div>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
