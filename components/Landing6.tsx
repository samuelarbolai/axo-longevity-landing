"use client"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useLanguage } from "./LanguageProvider"
import translations from "../lib/translations"

const testimonials = [
  '"Using Axo has helped me optimize my training and recovery with real biomarkers, not just guesses. I\'m training for my next Ironman, and seeing my inflammation markers drop has been game-changing." — Erik, 38, Stockholm',
  '"I\'ve tried everything from supplements to saunas, but Axo was the first to give me clear, personalized insights. I cut my ApoB by 30% and feel the difference every morning." — Lara, 33, Berlin',
  '"Between fundraising and travel, my energy crashed midweek. With Axo, I discovered I was overtraining and deficient in key nutrients. Now my recovery and focus are better than ever." — Tomás, 41, Madrid',
  '"As a wellness content creator, I\'ve tested dozens of programs. Axo stood out with its depth and simplicity. My biological age dropped by 4 years in 3 months." — Freya, 36, London',
]

const mediaLogos = [
  "/placeholder.svg?height=64&width=100",
  "/placeholder.svg?height=64&width=100",
  "/placeholder.svg?height=64&width=100",
  "/placeholder.svg?height=64&width=100",
  "/placeholder.svg?height=64&width=100",
  "/placeholder.svg?height=64&width=100",
]

export const ScrollingRow = ({ children, reverse = false }) => {
  const ref = useRef()
  useEffect(() => {
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      if (ref.current) {
        const scrollAmount = (elapsed / 25) % (ref.current.scrollWidth / 2)
        ref.current.scrollLeft = reverse ? ref.current.scrollWidth / 2 - scrollAmount : scrollAmount
      }
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [reverse])

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-8 px-8 w-max">
        {children}
        {children}
      </div>
    </div>
  )
}

export default function Landing6() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="testimonials" className="pt-10 lg:pt-28 pb-16 bg-[#fef9f1] text-center">
      <h2 className="text-7xl font-serif font-extralight text-gray-500">{t.testimonialTitle}</h2>
      <h3 className="italic text-7xl text-[#b4735a] font-serif font-extralight mt-2">{t.testimonialEmphasis}</h3>

      <div className="mt-20 space-y-20">
        <ScrollingRow reverse>
          {testimonials.map((text, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 max-w-[360px] flex-shrink-0 text-left font-extralight text-sm leading-relaxed whitespace-normal"
            >
              {text
                .split(/(\*{2}.*?\*{2})/g)
                .map((part, j) =>
                  part.startsWith("**") ? (
                    <strong key={j}>{part.replace(/\*/g, "")}</strong>
                  ) : (
                    <span key={j}>{part}</span>
                  ),
                )}
            </div>
          ))}
        </ScrollingRow>

        <ScrollingRow>
          {mediaLogos.map((logo, i) => (
            <Image key={i} src={logo || "/placeholder.svg"} alt="media logo" width={100} height={64} className="h-16" />
          ))}
        </ScrollingRow>
      </div>
    </section>
  )
}
