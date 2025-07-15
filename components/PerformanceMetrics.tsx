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
    const target = Number.parseFloat(currentStat.value)
    const duration = 1500
    const steps = 40
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
    <div className="glass-effect rounded-3xl p-12 soft-border max-w-lg mx-auto">
      <div className="text-center">
        <div className="text-sm font-source text-charcoal/60 mb-4 tracking-wider uppercase font-medium">
          {currentStat.label}
        </div>
        <div className="flex items-baseline justify-center gap-4 mb-6">
          <span className="text-6xl md:text-7xl font-mono font-light gradient-text">{displayValue}</span>
          <span className="text-2xl text-charcoal/70 font-source">{currentStat.unit}</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div
            className={`text-base font-mono px-6 py-3 rounded-full font-medium ${
              currentStat.change.startsWith("+")
                ? "bg-sage-green/20 text-sage-green border border-sage-green/30"
                : "bg-soft-blue/20 text-soft-blue border border-soft-blue/30"
            }`}
          >
            {currentStat.change}
          </div>
          <span className="text-sm text-charcoal/50 font-source">vs baseline</span>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-4 mt-10">
        {stats.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-soft-blue w-16" : "bg-charcoal/20 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
