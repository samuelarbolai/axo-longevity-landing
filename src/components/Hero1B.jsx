"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n';
import JoinWaitlistButton from './JoinWaitlistButton';
import HeroModal from './HeroModal';
import { ScrollingRow } from './Landing6';

const heroImages = [
  "/hero1b1.webp",
  "/hero1b2.webp",
  "/hero1b3.webp",
  "/hero1b4.webp",
  "/hero1b5.webp",
  "/hero1b6.webp",
  "/hero1b7.webp",
];

export default function Hero1B({ 
  onJoinWaitlist }) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
    <section className="bg-[#fef9f1] text-center pb-20 px-4 ">
      <div className="w-full mx-auto">
        <div className='min-h-screen flex flex-col justify-center'>
          <h1 className="text-8xl 2xl:text-9xl font-serif4 text-[#3c3d42] font-light">
            {t.title}<br />
            <div className="italic text-[#b4735a] pt-3">{t.emphasis}</div>
          </h1>
          <p className="mt-10 text-3xl 2xl:text-4xl text-[#7a7a7a] max-w-3xl 2xl:max-w-7xl mx-auto font-light">
            {t.subtitle}
          </p>
          <div className="mt-15">
            <JoinWaitlistButton onClick={() => setIsModalOpen(true)} />
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="min-h-[70vh]">
            <ScrollingRow>
              {heroImages.map((src, idx) => (
                <img key={idx} src={src} className="h-[70vh] rounded-[3rem] mx-2" alt={`carousel-${idx}`} />
              ))}
            </ScrollingRow>
          </div>
        </div>
      </div>
    </section>
    {isModalOpen && <HeroModal isOpen={isModalOpen} setShowModal={setIsModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
