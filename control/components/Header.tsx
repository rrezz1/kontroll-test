'use client';

import { useState } from 'react';
import { Language } from '@/types';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
        activities: "Our Activities", 
      projects: "Projects",
      contact: "Contact"
    },
    de: {
      home: "Startseite",
      about: "Über Uns",
      services: "Dienstleistungen",
      activities: "Our Activities",
      projects: "Projekte",
      contact: "Kontakt"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      activities: "Our Activities",
      projects: "Projektet",
      contact: "Kontakt"
    }
  };

  const t = translations[language];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src="/images/logo.png" alt="Kontroll Test Logo" />
              {/* <h1>Kontroll Test</h1> */}
            </div>
            
            <ul className="nav-links">
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#about">{t.about}</a></li>
              <li><a href="#services">{t.services}</a></li>
              <li><a href="#activities">{t.activities}</a></li>
              <li><a href="#projects">{t.projects}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
              <li>
                <div className="language-switcher">
                  <button 
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                  >
                    EN
                  </button>
                  <button 
                    className={language === 'de' ? 'active' : ''}
                    onClick={() => setLanguage('de')}
                  >
                    DE
                  </button>
                  <button 
                    className={language === 'sq' ? 'active' : ''}
                    onClick={() => setLanguage('sq')}
                  >
                    SQ
                  </button>
                </div>
              </li>
            </ul>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  );
}