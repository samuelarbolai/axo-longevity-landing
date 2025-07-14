"use client"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import translations from "../i18n"
import JoinWaitlistButton from "./JoinWaitlistButton"
import Image from "next/image"
import HeroModal from "./HeroModal"

export default function Landing3() {
  const [showModal, setShowModal] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="bg-[#fef9ef] flex flex-col md:flex-row items-center justify-between mx-auto px-6 md:px-20 py-24 space-y-10 md:space-y-0 md:space-x-10">
      <div className="max-w-xl space-y-6">
        <h2 className="text-5xl md:text-6xl font-serif4 font-light text-[#3c3d42]">{t.title}</h2>
        <p className="text-lg font-extralight text-[#7a7a7a]">{t.subtitle}</p>
        <JoinWaitlistButton onClick={() => setShowModal(true)} />
        <div className="flex flex-wrap gap-4 text-[#3c3d42] text-sm pt-2">
          <div className="flex items-center space-x-2">
            <span>✓</span>
            <span>{t.point1}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✓</span>
            <span>{t.point2}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✓</span>
            <span>{t.point3}</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/biomarkers.png"
          alt="Live 100 Healthy Years"
          width={600}
          height={800}
          className="h-auto max-h-[80vh] w-auto max-w-full"
        />
      </div>
      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
