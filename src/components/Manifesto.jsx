"use client"
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n';


function Manifesto() {
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0.4);
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top >= windowHeight || rect.bottom <= 0) return;
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const visibilityRatio = (visibleHeight + 200)/ rect.height;
      const newOpacity = 0.4 + (visibilityRatio) * 0.5;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-24 pb-10 bg-[#fef9f1]">
      <div className="mx-auto lg:px-20 px-6 my-12">
        <div className="rounded-3xl overflow-hidden shadow-[0_15px_40px_-10px_rgba(255,115,0,0.3)]">
          <Image
            src="/ManifestoImage.png"
            alt="Manifesto visual"
            width={1920}
            height={400}
            className="w-full h-[200px] md:h-auto object-cover"
          />
        </div>
        <div
          ref={ref}
          style={{ color: `rgba(255,255,255,${opacity})` }}
          className={`mt-20 max-w-4xl mx-auto text-center text-3xl font-bold transition-colors duration-200 ${expanded ? '' : 'line-clamp-[10] overflow-hidden'}`}
        >
          <p className="mb-4 text-5xl md:text-6xl font-serif4 font-extralight text-[#3c3d42]">{t.manifestoTitle1}</p>
          <p className="mb-4 text-4xl text-[#b4735a] font-serif4 font-extralight">{t.manifestoSubtitle1}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint1}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint2}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint3}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint4}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint5}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint6}</p>
          <p className="mb-4 text-4xl text-[#b4735a] font-serif4 font-extralight">{t.manifestoSubtitle2}</p>
          <p className="mb-4 font-normal leading-relaxed text-neutral-500">{t.manifestoPoint7}</p>
          <p className="mb-4 text-4xl text-[#b4735a] font-serif4 font-extralight">{t.manifestoSubtitle3}</p>
          <p className="font-normal leading-relaxed text-neutral-500">{t.manifestoPoint8}</p>
          <p className="font-normal leading-relaxed text-neutral-500">{t.manifestoPoint9}</p>
        </div>
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 rounded-full bg-[#B8775D] text-white text-base font-medium"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Mostrar menos' : 'Leer más'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;
