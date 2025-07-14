"use client";
import { useState, useEffect, useRef } from 'react';
import HeroModal from './HeroModal';
import Image from 'next/image';

function Hero1() {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const cieloRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState('100vh');
  const [cieloHeight, setCieloHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [isLandscapeSmMd, setIsLandscapeSmMd] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isSmMd = width < 1024;
      const isLandscape = width > height;
      setIsLandscapeSmMd(isSmMd && isLandscape);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (cieloRef.current) {
        const rect = cieloRef.current.getBoundingClientRect();
        const isVisible = rect.bottom > (viewportHeight*0.97) / 2;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewportHeight]);

  const handleImageLoad = () => {
    if (cieloRef.current) {
      
      setCieloHeight(cieloRef.current.naturalHeight);
      setSectionHeight(`${cieloRef.current.naturalHeight*0.67}px`);
    }
  };

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const threshold = Math.max(cieloHeight - viewportHeight, 0);

  return (
    <>
      <section id="hero" style={{ height: sectionHeight, color: '#fef9ef' }} className="hidden lg:flex w-full flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden " >
        <Image
          ref={cieloRef}
          src="/cielo.png"
          alt="Cielo"
          width={1920}
          height={1080}
          onLoad={handleImageLoad}
          className="absolute inset-0 w-full object-cover z-0"
        />
        <div
          className="fixed top-[45%] left-1/2 transform -translate-x-1/2 z-5 pointer-events-none"
          style={{
            transform: `translateY(${scrollY <= threshold * 0.55? 0 : -(scrollY - threshold * 0.55)}px)`
          }}
        >
          <h2 className="text-9xl font-serif4 whitespace-nowrap text-[#fef9ef]">Long Live.</h2>
        </div>
        <Image
          src="/MujerSaltando.webp"
          alt="Mujer"
          width={600}
          height={800}
          className="absolute top-[6%] left-1/2 transform -translate-x-1/2 h-[32%] object-contain z-10"
          style={{ transform: `translateY(${scrollY *0.52}px)` }}
        />
        
        <div className="absolute bottom-0 w-full text-center pb-16 z-10">
          <p className="text-6xl text-white font-qwitcher">Long live jumping <br /> off the dock</p>
        </div>
      </section>

      <section className="block lg:hidden w-full h-screen flex flex-col justify-center items-center text-white text-center px-4 relative overflow-hidden bg-[#fef9ef]">
        <Image
          src="/cielo.png"
          alt="Cielo"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full object-cover z-0"
        />
        <div className="fixed top-[45%] left-1/2 transform -translate-x-1/2 z-5 pointer-events-none">
          {scrollY <= 273 && (
            <h2 className="text-6xl font-serif4" style={{ color: '#fef9ef' }}>Long Live.</h2>
          )}
        </div>
        {scrollY <= 450 && (
          <Image
            src="/MujerSaltando.webp"
            alt="Mujer"
            width={600}
            height={800}
            className="absolute top-[6%] inset-x-0 mx-auto h-[32%] object-contain z-10"
            style={{ transform: `translateY(${scrollY * 0.52}px)` }}
          />
        )}
        <div className="absolute bottom-0 w-full text-center pb-28 z-10">
          <p className="text-4xl text-black font-qwitcher">Long live jumping <br /> off the dock</p>
        </div>
      </section>

      {isLandscapeSmMd && (
        <div className="fixed inset-0 bg-black bg-opacity-80 text-white flex items-center justify-center z-[9999] text-center px-4">
          <p className="text-xl font-semibold">Please rotate your device to use it in portrait orientation.</p>
        </div>
      )}

      <HeroModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
export default Hero1;
