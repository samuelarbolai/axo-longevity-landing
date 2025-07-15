"use client"
import { useState } from "react"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"

export default function PerformanceLab() {
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const athleteTypes = [
    {
      title: "ENDURANCE",
      sports: "Cycling • Running • Triathlon • Swimming",
      biomarkers: ["Iron & Ferritin", "B12 & Folate", "Cortisol", "Lactate Threshold", "VO2 Max Indicators"],
      color: "soft-blue",
    },
    {
      title: "STRENGTH",
      sports: "Powerlifting • CrossFit • Bodybuilding",
      biomarkers: ["Testosterone", "Growth Hormone", "Creatine Kinase", "Protein Synthesis", "Recovery Markers"],
      color: "sage-green",
    },
    {
      title: "TEAM SPORTS",
      sports: "Football • Basketball • Soccer • Hockey",
      biomarkers: ["Inflammation", "Hydration Status", "Energy Systems", "Reaction Time", "Injury Prevention"],
      color: "warm-coral",
    },
    {
      title: "PRECISION",
      sports: "Golf • Tennis • Gymnastics • Archery",
      biomarkers: ["Stress Hormones", "Cognitive Function", "Fine Motor Control", "Focus Markers", "Balance Systems"],
      color: "lavender",
    },
  ]

  const performanceFeatures = [
    {
      icon: "🎯",
      title: "Precision Analysis",
      description: "Biomarkers that reveal your competitive advantages",
      metric: "15% performance gain",
    },
    {
      icon: "🌱",
      title: "Recovery Mastery",
      description: "Optimize recovery with sophisticated data insights",
      metric: "40% faster recovery",
    },
    {
      icon: "📊",
      title: "Peak Performance",
      description: "Train intelligently with personalized feedback",
      metric: "25% training efficiency",
    },
    {
      icon: "✨",
      title: "Elite Standards",
      description: "Olympic Training Center methodologies",
      metric: "100+ biomarkers",
    },
  ]

  return (
    <section id="performance-lab" className="py-24 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-inter font-light mb-8">
            <span className="text-charcoal">Performance</span>
            <br />
            <span className="gradient-text font-medium">Laboratory</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-source max-w-3xl mx-auto leading-relaxed">
            Sophisticated biomarker analysis trusted by Olympic Training Centers and elite performance institutes
            worldwide.
          </p>
        </div>

        {/* Performance Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 soft-border hover:shadow-xl transition-all duration-500 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-inter font-medium text-charcoal mb-3">{feature.title}</h3>
              <p className="text-charcoal/60 font-source mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-sage-green font-mono font-medium text-sm">{feature.metric}</div>
            </div>
          ))}
        </div>

        {/* Sport-Specific Biomarkers */}
        <div className="glass-effect rounded-3xl p-12 soft-border">
          <h3 className="text-3xl font-inter font-medium text-center mb-12">
            <span className="text-charcoal">Sport-Specific</span>
            <span className="gradient-text"> Biomarker Panels</span>
          </h3>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {athleteTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-xl font-inter font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-soft-blue to-sage-green text-white shadow-lg"
                    : "bg-white/50 text-charcoal/70 hover:bg-white/80 border border-charcoal/10"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="text-center">
            <div className="text-lg text-charcoal/60 font-source mb-8">{athleteTypes[activeTab].sports}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {athleteTypes[activeTab].biomarkers.map((biomarker, index) => (
                <div
                  key={index}
                  className="bg-white/60 border border-charcoal/10 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-charcoal font-source font-medium text-sm">{biomarker}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <JoinWaitlistButton
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-soft-blue to-sage-green text-white font-inter font-medium text-xl px-16 py-5 rounded-2xl elegant-glow hover:scale-105 transition-all duration-500 shadow-lg"
          >
            Discover Your Potential
          </JoinWaitlistButton>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
