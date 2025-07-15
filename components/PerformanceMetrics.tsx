"use client"
import { useEffect, useState } from "react"

interface MetricProps {
  stats: Array<{
    label: string
    value: string
    unit: string
    change: string
  }>
  currentIndex: number
}

export default function PerformanceMetrics({ stats, currentIndex }: MetricProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const currentStat = stats[currentIndex]

  useEffect(() => {
    // Animate number counting
    const target = Number.parseFloat(currentStat.value)
    const duration = 1000
    const steps = 30
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      current += increment
      step++

      if (step >= steps) {
        setDisplayValue(currentStat.value)
        clearInterval(timer)
      } else {
        setDisplayValue(current.toFixed(1))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [currentIndex, currentStat.value])

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-electric-blue/30 rounded-2xl p-8 neon-border">
      <div className="text-center">
        <div className="text-sm font-mono text-gray-400 mb-2 tracking-wider">{currentStat.label}</div>
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className="text-5xl md:text-6xl font-mono font-bold gradient-text">{displayValue}</span>
          <span className="text-xl text-gray-300 font-mono">{currentStat.unit}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className={`text-sm font-mono px-3 py-1 rounded-full ${
              currentStat.change.startsWith("+")
                ? "bg-neon-green/20 text-neon-green"
                : "bg-electric-blue/20 text-electric-blue"
            }`}
          >
            {currentStat.change}
          </div>
          <span className="text-xs text-gray-500">vs baseline</span>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {stats.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-electric-blue w-8" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
