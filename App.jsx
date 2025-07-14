import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LanguageProvider } from './src/context/LanguageContext';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      multiplier: 12,
    });

    // Add scroll snapping to body and sections
    document.body.style.scrollSnapType = 'y proximity';
    Array.from(document.querySelectorAll('section')).forEach(sec => {
      sec.style.scrollSnapAlign = 'start';
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleLinkClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = target.getBoundingClientRect().top + window.scrollY - 100;
          lenis.scrollTo(offset);
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', handleLinkClick)
    );

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener('click', handleLinkClick)
      );
    };
  }, []);

  const variant = 'b';

  return (
    <LanguageProvider>
      <div className="font-montserrat">
        <Navbar variant={variant} />
        <Routes>
          <Route path="/" element={<LandingPage variant={variant} />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;