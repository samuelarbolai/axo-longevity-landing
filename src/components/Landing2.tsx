"use client"
import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import translations from "../i18n"
import HeroModal from "./HeroModal"
import JoinWaitlistButton from "./JoinWaitlistButton"

export default function Landing2({ variant }) {
  const [showModal, setShowModal] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      id="mission"
      className={`bg-[#fef9ef] min-h-[50vh] flex flex-col items-center justify-center text-center px-6 space-y-10 `}
    >
      <h2 className="text-6xl font-serif4 font-extralight text-[#2c2c2c] relative z-10">{t.longLiveYou}</h2>
      <p className="text-6xl font-qwitcher font-extralight text-[#2c2c2c] max-w-5xl leading-relaxed">
        {t.paragraph1} <span className="whitespace-nowrap">{t.paragraph2}</span>
        <br />
        {t.paragraph3}
      </p>
      <JoinWaitlistButton onClick={() => setShowModal(true)} />
      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
