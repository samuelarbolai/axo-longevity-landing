"use client"
import { useState, useEffect } from "react"

interface BiomarkerData {
  name: string
  current: number
  optimal: number
  unit: string
  status: "optimal" | "warning" | "critical"
  trend: "up" | "down" | "stable"
}

export default function BiomarkerDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("performance")
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})

  const biomarkerCategories = {
    performance: [
      { name: "VO2 Max", current: 65.2, optimal: 60, unit: "ml/kg/min", status: "optimal", trend: "up" },
      { name: "Lactate Threshold", current: 2.1, optimal: 4.0, unit: "mmol/L", status: "optimal", trend: "down" },
      { name: "Power Output", current: 420, optimal: 380, unit: "watts", status: "optimal", trend: "up" },
      { name: "Recovery Rate", current: 18, optimal: 24, unit: "hours", status: "optimal", trend: "down" },
    ],
    hormonal: [
      { name: "Testosterone", current: 850, optimal: 600, unit: "ng/dL", status: "optimal", trend: "up" },
      { name: "Cortisol", current: 12, optimal: 15, unit: "μg/dL", status: "optimal", trend: "down" },
      { name: "Growth Hormone", current: 2.8, optimal: 2.0, unit: "ng/mL", status: "optimal", trend: "up" },
      { name: "Insulin", current: 8, optimal: 10, unit: "μIU/mL", status: "optimal", trend: "stable" },
    ],
    metabolic: [
      { name: "RMR", current: 2100, optimal: 1900, unit: "kcal/day", status: "optimal", trend: "up" },
      { name: "Fat Oxidation", current: 0.65, optimal: 0.5, unit: "g/min", status: "optimal", trend: "up" },
      { name: "Glucose", current: 85, optimal: 90, unit: "mg/dL", status: "optimal", trend: "stable" },
      { name: "HbA1c", current: 4.8, optimal: 5.0, unit: "%", status: "optimal", trend: "down" },
    ],
  }

  useEffect(() => {
    const currentData = biomarkerCategories[selectedCategory as keyof typeof biomarkerCategories]
    const newAnimatedValues: { [key: string]: number } = {}

    currentData.forEach((biomarker) => {
      let current = 0
      const target = biomarker.current
      const duration = 1500
      const steps = 60
      const increment = target / steps

      const animate = () => {
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            newAnimatedValues[biomarker.name] = target
            clearInterval(timer)
          } else {
            newAnimatedValues[biomarker.name] = current
          }
          setAnimatedValues({ ...newAnimatedValues })
        }, duration / steps)
      }

      setTimeout(animate, Math.random() * 500)
    })
  }, [selectedCategory])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "text-neon-green"
      case "warning":
        return "text-yellow-400"
      case "critical":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return "↗"
      case "down":
        return "↘"
      case "stable":
        return "→"
      default:
        return "→"
    }
  }

  return (
    <section id="biomarkers" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-inter font-black mb-6">
            <span className="text-white">BIOMARKER</span>
            <br />
            <span className="gradient-text">DASHBOARD</span>
          </h2>
          <p className="text-xl text-gray-300 font-source max-w-3xl mx-auto">
            Real-time visualization of your performance biomarkers. Track, analyze, and optimize like a professional
            athlete.
          </p>
        </div>

        {/* Dashboard Interface */}
        <div className="bg-black/50 backdrop-blur-sm border border-electric-blue/20 rounded-3xl p-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(biomarkerCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-inter font-bold transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-electric-blue to-neon-green text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Biomarker Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {biomarkerCategories[selectedCategory as keyof typeof biomarkerCategories].map((biomarker, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-inter font-bold text-lg">{biomarker.name}</h3>
                  <div className={`text-2xl ${getStatusColor(biomarker.status)}`}>{getTrendIcon(biomarker.trend)}</div>
                </div>

                <div className="mb-4">
                  <div className="text-3xl font-mono font-bold gradient-text mb-1">
                    {(animatedValues[biomarker.name] || 0).toFixed(1)}
                    <span className="text-lg text-gray-400 ml-1">{biomarker.unit}</span>
                  </div>
                  <div className="text-sm text-gray-400 font-source">
                    Optimal: {biomarker.optimal} {biomarker.unit}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      biomarker.status === "optimal"
                        ? "bg-neon-green"
                        : biomarker.status === "warning"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                    }`}
                    style={{
                      width: `${Math.min(((animatedValues[biomarker.name] || 0) / biomarker.optimal) * 100, 100)}%`,
                    }}
                  ></div>
                </div>

                <div className={`text-xs font-mono font-bold ${getStatusColor(biomarker.status)}`}>
                  {biomarker.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Summary */}
          <div className="mt-8 bg-gray-900/30 rounded-xl p-6">
            <div className="text-center">
              <div className="text-2xl font-inter font-bold text-white mb-2">Performance Score</div>
              <div className="text-5xl font-mono font-black gradient-text mb-2">94.2</div>
              <div className="text-sm text-gray-400 font-source">Elite Athlete Range: 90-100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
