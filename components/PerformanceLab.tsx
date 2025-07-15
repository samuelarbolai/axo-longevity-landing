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
      color: "electric-blue",
    },
    {
      title: "STRENGTH",
      sports: "Powerlifting • CrossFit • Bodybuilding",
      biomarkers: ["Testosterone", "Growth Hormone", "Creatine Kinase", "Protein Synthesis", "Recovery Markers"],
      color: "neon-green",
    },
    {
      title: "TEAM SPORTS",
      sports: "Football • Basketball • Soccer • Hockey",
      biomarkers: ["Inflammation", "Hydration Status", "Energy Systems", "Reaction Time", "Injury Prevention"],
      color: "gold",
    },
    {
      title: "COMBAT",
      sports: "MMA • Boxing • Wrestling • Martial Arts",
      biomarkers: ["Stress Hormones", "Bone Density", "Neurological", "Weight Cut Safety", "Impact Recovery"],
      color: "electric-blue",
    },
  ]

  const performanceFeatures = [
    {
      icon: "🏆",
      title: "Competition Edge",
      description: "Biomarkers that separate winners from participants",
      metric: "15% performance gain",
    },
    {
      icon: "⚡",
      title: "Recovery Optimization",
      description: "Cut recovery time with precision data",
      metric: "40% faster recovery",
    },
    {
      icon: "🎯",
      title: "Peak Performance",
      description: "Train smarter with real-time feedback",
      metric: "25% training efficiency",
    },
    {
      icon: "📊",
      title: "Elite Analytics",
      description: "Olympic Training Center protocols",
      metric: "100+ biomarkers",
    },
  ]

  return (
    <section id="performance-lab" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-inter font-black mb-6">
            <span className="text-white">PERFORMANCE</span>
            <br />
            <span className="gradient-text">LABORATORY</span>
          </h2>
          <p className="text-xl text-gray-300 font-source max-w-3xl mx-auto">
            The same advanced biomarker analysis trusted by Olympic Training Centers, Formula 1 teams, and professional
            sports organizations worldwide.
          </p>
        </div>

        {/* Performance Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {performanceFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-electric-blue/20 rounded-2xl p-6 hover:border-electric-blue/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-inter font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-source mb-4">{feature.description}</p>
              <div className="text-neon-green font-mono font-bold text-sm">{feature.metric}</div>
            </div>
          ))}
        </div>

        {/* Sport-Specific Biomarkers */}
        <div className="bg-black/30 backdrop-blur-sm border border-electric-blue/20 rounded-3xl p-8">
          <h3 className="text-3xl font-inter font-bold text-center mb-8">
            <span className="text-white">Sport-Specific</span>
            <span className="gradient-text"> Biomarker Panels</span>
          </h3>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {athleteTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-inter font-bold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-electric-blue to-neon-green text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="text-center">
            <div className="text-lg text-gray-400 font-source mb-6">{athleteTypes[activeTab].sports}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {athleteTypes[activeTab].biomarkers.map((biomarker, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-white font-source font-medium text-sm">{biomarker}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <JoinWaitlistButton
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-electric-blue to-neon-green text-black font-inter font-bold text-xl px-12 py-4 rounded-lg performance-glow hover:scale-105 transition-all duration-300"
          >
            UNLOCK YOUR POTENTIAL
          </JoinWaitlistButton>
        </div>
      </div>

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
