"use client"
import React, { useEffect, useState } from "react"
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
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate animation values based on scroll
  const titleOpacity = Math.max(0, 1 - scrollY / 300)
  const titleTransform = scrollY * 0.5
  const subtitleOpacity = Math.max(0, 1 - scrollY / 400)
  const subtitleTransform = scrollY * 0.3
  const buttonOpacity = Math.max(0, 1 - scrollY / 500)
  const buttonTransform = scrollY * 0.2
  const carouselTransform = Math.max(0, scrollY - 200) * 0.1

  return (
    <>
      <section className="bg-[#fef9f1] text-center px-4 py-16 md:py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-[#b4735a]/10 rounded-full blur-xl"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.2}deg)`,
              opacity: Math.max(0, 1 - scrollY / 600),
            }}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-[#3c3d42]/10 rounded-full blur-xl"
            style={{
              transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.3}deg)`,
              opacity: Math.max(0, 1 - scrollY / 500),
            }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-40 h-40 bg-[#b4735a]/5 rounded-full blur-2xl"
            style={{
              transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.001})`,
              opacity: Math.max(0, 1 - scrollY / 700),
            }}
          />
        </div>

        <div className="w-full mx-auto relative z-10">
          <div className="min-h-[85vh] flex flex-col justify-center items-center">
            {/* Animated Title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-[#3c3d42] font-light leading-tight"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${titleTransform}px) scale(${1 + scrollY * 0.0005})`,
                filter: `blur(${scrollY * 0.02}px)`,
              }}
            >
              {t.title}
              <br />
              <div
                className="italic text-[#b4735a] pt-2 md:pt-3"
                style={{
                  transform: `translateX(${scrollY * 0.1}px)`,
                  opacity: Math.max(0, titleOpacity - 0.2),
                }}
              >
                {t.emphasis}
              </div>
            </h1>

            {/* Animated Subtitle */}
            <p
              className="mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#7a7a7a] max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto font-light leading-relaxed"
              style={{
                opacity: subtitleOpacity,
                transform: `translateY(${subtitleTransform}px)`,
                filter: `blur(${scrollY * 0.01}px)`,
              }}
            >
              {t.subtitle}
            </p>

            {/* Animated Button */}
            <div
              className="mt-8 md:mt-12"
              style={{
                opacity: buttonOpacity,
                transform: `translateY(${buttonTransform}px) scale(${Math.max(0.8, 1 - scrollY * 0.0003)})`,
              }}
            >
              <JoinWaitlistButton onClick={() => setIsModalOpen(true)} />
            </div>
          </div>

          {/* Animated Carousel */}
          <div
            className="overflow-hidden mt-12 md:mt-16"
            style={{
              opacity: Math.max(0, 1 - scrollY / 800),
              transform: `translateY(${carouselTransform}px) perspective(1000px) rotateX(${scrollY * 0.02}deg)`,
            }}
          >
            <div className="min-h-[60vh] md:min-h-[70vh]">
              <ScrollingRow>
                {heroImages.map((src, idx) => (
                  <img
                    key={idx}
                    src={src || "/placeholder.svg"}
                    className="h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] mx-2 object-cover transition-all duration-300"
                    alt={`carousel-${idx}`}
                    style={{
                      transform: `scale(${Math.max(0.9, 1 - scrollY * 0.0002)}) rotate(${Math.sin(scrollY * 0.01 + idx) * 2}deg)`,
                      filter: `brightness(${Math.max(0.7, 1 - scrollY * 0.0005)}) saturate(${Math.max(0.5, 1 - scrollY * 0.0003)})`,
                    }}
                  />
                ))}
              </ScrollingRow>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed bottom-8 right-8 z-20">
          <div className="w-12 h-12 rounded-full border-2 border-[#b4735a]/30 flex items-center justify-center">
            <div
              className="w-8 h-8 rounded-full bg-[#b4735a]"
              style={{
                transform: `scale(${Math.min(1, scrollY / 500)})`,
                opacity: Math.min(1, scrollY / 200),
              }}
            />
          </div>
        </div>
      </section>
      {isModalOpen && <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
