"use client"
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n';

import Image from 'next/image';

export default function Landing5() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="bg-[#fef9ef] px-6 md:px-20 py-10 lg:py-24 text-[#3c3d42] text-center">
      <h2 className="text-5xl md:text-6xl font-serif4 font-extralight">
        {t.testingTitle} <span className="italic text-[#b4735a]">{t.testingEmphasis}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {[{img: '/Testing1.webp', label: t.testingStep1, title: t.testingStep1Title, desc: t.testingStep1Desc},
          {img: '/Testing2.webp', label: t.testingStep2, title: t.testingStep2Title, desc: t.testingStep2Desc},
          {img: '/Testing3.webp', label: t.testingStep3, title: t.testingStep3Title, desc: t.testingStep3Desc}
        ].map(({img, label, title, desc}, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-full">
              <Image src={img} alt={label} width={600} height={400} className="w-full rounded-[2rem]" />
            </div>
            <div className="mt-6 text-4xl text-[#b4735a] font-serif4 font-extralight">{label}</div>
            <div className="mt-6 text-2xl font-medium">{title}</div>
            <div className="mt-1 text-lg text-gray-500">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
