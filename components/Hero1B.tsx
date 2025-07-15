"use client"
import React from "react"
import { useLanguage } from "./LanguageProvider"
import translations from "../lib/translations"
import JoinWaitlistButton from "./JoinWaitlistButton"
import HeroModal from "./HeroModal"
import { ScrollingRow } from "./Landing6"

const heroImages = [
  "/hero1b1.webp",
  "/hero1b2.webp",
  "/hero1b3.webp",
  "/hero1b4.webp",
  "/hero1b5.webp",
  "/hero1b6.webp",
  "/hero1b7.webp",
]

export default function Hero1B() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <>
      <section className="bg-[#fef9f1] text-center px-4 py-16 md:py-24">
        <div className="w-full mx-auto">
          <div className="min-h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-[#3c3d42] font-light leading-tight">
              {t.title}
              <br />
              <div className="italic text-[#b4735a] pt-2 md:pt-3">{t.emphasis}</div>
            </h1>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#7a7a7a] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto font-light leading-relaxed">
              {t.subtitle}
            </p>
            <div className="mt-8 md:mt-12">
              <JoinWaitlistButton onClick={() => setIsModalOpen(true)} />
            </div>
          </div>

          <div className="overflow-hidden mt-16 md:mt-24">
            <div className="min-h-[60vh] md:min-h-[70vh]">
              <ScrollingRow>
                {heroImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src || "/placeholder.svg"}
                    className="h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] mx-2 object-cover"
                    alt={`carousel-${idx}`}
                  />
                ))}
              </ScrollingRow>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
