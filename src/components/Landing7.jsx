"use client"
import { useState, useEffect } from 'react';
import HeroModal from './HeroModal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n';

export default function Landing7() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const faqs = [
    {
      question: t.faq1,
      answer: (
        <p>
          {t.faq1a}{' '}
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-hero-modal'))} className="text-[#b4735a] underline">Just click here.</button>
        </p>
      )
    },
    {
      question: t.faq2,
      answer: (
        <div>
          <p>{t.faq2a}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>{t.faq2b1}</li>
            <li>{t.faq2b2}</li>
            <li>{t.faq2b3}</li>
            <li>{t.faq2b4}</li>
            <li>{t.faq2b5}</li>
            <li>{t.faq2b6}</li>
            <li>{t.faq2b7}</li>
          </ul>
        </div>
      )
    },
    {
      question: t.faq3,
      answer: (
        <p>
          {t.faq3a}
        </p>
      )
    },
    {
      question: t.faq4,
      answer: (
        <p>
          {t.faq4a} <span className="text-[#b4735a]">Read our Privacy Statement.</span>
        </p>
      )
    },
    {
      question: t.faq5,
      answer: (
        <p>
          {t.faq5a}
        </p>
      )
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setShowModal(true);
    window.addEventListener('open-hero-modal', handleOpenModal);
    return () => window.removeEventListener('open-hero-modal', handleOpenModal);
  }, []);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-[#fef9f1] px-6 md:px-24 py-28">
      <h2 className="text-5xl md:text-6xl font-serif4 font-extralight text-center text-[#3c3d42]">
        <span className="text-[#3c3d42]">{t.faqTitle1} </span>
        <span className="italic text-[#b4735a]">{t.faqTitle2}</span>
      </h2>
      <div className="mt-16 divide-y divide-[#ded8cd] border-t border-b border-[#ded8cd]">
        {faqs.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-8 text-left"
            >
              <span className="text-lg font-semibold text-[#3c3d42]">{item.question}</span>
              <span className="text-2xl text-[#3c3d42]">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="pb-8 text-[#3c3d42] text-base font-extralight leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {showModal && <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />}
    </section>
  );
}
