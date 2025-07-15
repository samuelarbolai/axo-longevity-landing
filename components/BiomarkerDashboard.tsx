"use client"
import { useState, useEffect } from "react"

interface BiomarkerData {
  name: string
  current: number
  optimal: number
  unit: string
  status: "optimal" | "good" | "attention"
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
      { name: "Cortisol", current: 12, optimal: 15, unit: "μg/dL", status: "good", trend: "down" },
      { name: "Growth Hormone", current: 2.8, optimal: 2.0, unit: "ng/mL", status: "optimal", trend: "up" },
      { name: "Insulin", current: 8, optimal: 10, unit: "μIU/mL", status: "good", trend: "stable" },
    ],
    metabolic: [
      { name: "RMR", current: 2100, optimal: 1900, unit: "kcal/day", status: "optimal", trend: "up" },
      { name: "Fat Oxidation", current: 0.65, optimal: 0.5, unit: "g/min", status: "optimal", trend: "up" },
      { name: "Glucose", current: 85, optimal: 90, unit: "mg/dL", status: "good", trend: "stable" },
      { name: "HbA1c", current: 4.8, optimal: 5.0, unit: "%", status: "optimal", trend: "down" },
    ],
  }

  useEffect(() => {
    const currentData = biomarkerCategories[selectedCategory as keyof typeof biomarkerCategories]
    const newAnimatedValues: { [key: string]: number } = {}

    currentData.forEach((biomarker) => {
      let current = 0
      const target = biomarker.current
      const duration = 2000
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

      setTimeout(animate, Math.random() * 800)
    })
  }, [selectedCategory])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "text-sage-green"
      case "good":
        return "text-soft-blue"
      case "attention":
        return "text-warm-coral"
      default:
        return "text-charcoal/60"
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
    <section id="biomarkers" className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-inter font-light mb-8">
            <span className="text-charcoal">Biomarker</span>
            <br />
            <span className="gradient-text font-medium">Dashboard</span>
          </h2>
          <p className="text-xl text-charcoal/70 font-source max-w-3xl mx-auto leading-relaxed">
            Elegant visualization of your performance biomarkers. Track, analyze, and optimize with sophisticated
            precision.
          </p>
        </div>

        {/* Dashboard Interface */}
        <div className="glass-effect rounded-3xl p-12 soft-border">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(biomarkerCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-xl font-inter font-medium transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-soft-blue to-sage-green text-white shadow-lg"
                    : "bg-white/50 text-charcoal/70 hover:bg-white/80 border border-charcoal/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Biomarker Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biomarkerCategories[selectedCategory as keyof typeof biomarkerCategories].map((biomarker, index) => (
              <div
                key={index}
                className="bg-white/60 border border-charcoal/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-charcoal font-inter font-medium text-lg">{biomarker.name}</h3>
                  <div className={`text-2xl ${getStatusColor(biomarker.status)}`}>{getTrendIcon(biomarker.trend)}</div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-mono font-light gradient-text mb-2">
                    {(animatedValues[biomarker.name] || 0).toFixed(1)}
                    <span className="text-lg text-charcoal/60 ml-2">{biomarker.unit}</span>
                  </div>
                  <div className="text-sm text-charcoal/50 font-source">
                    Optimal: {biomarker.optimal} {biomarker.unit}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-charcoal/10 rounded-full h-3 mb-4">
                  <div
                    className={`h-3 rounded-full transition-all duration-2000 ${
                      biomarker.status === "optimal"
                        ? "bg-gradient-to-r from-sage-green to-sage-green/80"
                        : biomarker.status === "good"
                          ? "bg-gradient-to-r from-soft-blue to-soft-blue/80"
                          : "bg-gradient-to-r from-warm-coral to-warm-coral/80"
                    }`}
                    style={{
                      width: `${Math.min(((animatedValues[biomarker.name] || 0) / biomarker.optimal) * 100, 100)}%`,
                    }}
                  ></div>
                </div>

                <div
                  className={`text-xs font-source font-medium uppercase tracking-wide ${getStatusColor(biomarker.status)}`}
                >
                  {biomarker.status}
                </div>
              </div>
            ))}
          </div>

          {/* Performance Summary */}
          <div className="mt-12 bg-white/40 rounded-2xl p-8 text-center">
            <div className="text-2xl font-inter font-medium text-charcoal mb-3">Performance Score</div>
            <div className="text-6xl font-mono font-light gradient-text mb-3">94.2</div>
            <div className="text-sm text-charcoal/60 font-source">Elite Athlete Range: 90-100</div>
          </div>
        </div>
      </div>
    </section>
  )
}
