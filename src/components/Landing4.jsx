"use client"
import React, { useState } from 'react'
import HeroModal from './HeroModal'
import JoinWaitlistButton from './JoinWaitlistButton';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n';

export default function Landing4() {
  const [showModal, setShowModal] = useState(false)
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="our-services" className="bg-[#fef9ef] px-6 md:px-20 py-10 lg:py-24 text-[#3c3d42]">
      <h2 className="text-5xl md:text-6xl font-serif4 font-extralight text-center mx-auto">
        <span className="text-gray-500">{t.membershipPrefix} </span><span className="italic text-[#b4735a]">{t.membershipSuffix}</span>
      </h2>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 mt-16 text-[#3c3d42] text-base w-full max-w-4xl">
          <div className="md:max-w-sm px-2">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="font-semibold align-top">✓</div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{t.labTitle}</span>
                <p className="font-extralight text-gray-500 mt-1">{t.labDesc}</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-sm px-2">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="font-semibold align-top">✓</div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{t.bodyTitle}</span>
                <p className="font-extralight text-gray-500 mt-1">{t.bodyDesc}</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-sm px-2">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="font-semibold align-top">✓</div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{t.insightTitle}</span>
                <p className="font-extralight text-gray-500 mt-1">{t.insightDesc}</p>
              </div>
            </div>
          </div>
          <div className="md:max-w-sm px-2">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="font-semibold align-top">✓</div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{t.trackedTitle}</span>
                <p className="font-extralight text-gray-500 mt-1">{t.trackedDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <JoinWaitlistButton onClick={() => setShowModal(true)} />
      </div>
      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
