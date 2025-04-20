import { useState, useEffect } from 'react';

export function useCurrentSection() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setCurrentSection(entry.target.dataset.section);
        }
      });
    }, {
      threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mappa delle sezioni con i loro colori
  const sectionStyles = {
    hero: {
      background: '#004D40',
      text: 'text-white',
      border: 'border-white',
    },
    default: {
      background: '#004D40',
      text: 'text-white',
      border: 'border-white',
    }
  };

  return sectionStyles[currentSection] || sectionStyles.default;
} 