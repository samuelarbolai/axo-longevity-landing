"use client"
export default function EliteTestingSection() {
  const testingAreas = [
    "VO2 Max Analysis",
    "Lactate Threshold",
    "Hormonal Balance",
    "Recovery Markers",
    "Inflammation",
    "Metabolic Health",
    "Iron Status",
    "Vitamin D",
    "Testosterone",
    "Cortisol Patterns",
    "Sleep Quality",
    "Hydration Status",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-16 leading-tight">
          World-class performance testing,
          <br />
          <span className="font-normal">from anywhere.</span>
        </h2>

        {/* Testing Areas Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {testingAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
