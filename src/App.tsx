import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle high-end smooth scrolling to anchor targets
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'events', 'gallery', 'reviews', 'reserve', 'contact'];

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 antialiased select-none font-sans flex flex-col justify-between selection:bg-amber-500 selection:text-white">
      {/* Floating high-end navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main content sections */}
      <main className="flex-grow flex flex-col">
        <Hero onNavClick={handleNavClick} />
        <About />
        <Menu />
        <Events onNavClick={handleNavClick} />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>

      {/* Premium detailed footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
