'use client';

import { Language } from '@/types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function MobileMenu({ isOpen, onClose, language, setLanguage }: MobileMenuProps) {
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

  const handleLinkClick = () => {
    onClose();
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <ul className="mobile-nav-links">
        <li>
          <a href="#home" onClick={handleLinkClick}>
            {t.home}
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            {t.about}
          </a>
        </li>
        <li>
          <a href="#services" onClick={handleLinkClick}>
            {t.services}
          </a>
        </li>
        <li>
          <a href="#activities" onClick={handleLinkClick}>
            {t.activities}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            {t.projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            {t.contact}
          </a>
        </li>
      </ul>
      
      <div className="mobile-language-switcher">
        <h3>Language / Sprache / Gjuha</h3>
        <div className="mobile-language-buttons">
          <button 
            className={language === 'en' ? 'active' : ''}
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <button 
            className={language === 'de' ? 'active' : ''}
            onClick={() => handleLanguageChange('de')}
          >
            DE
          </button>
          <button 
            className={language === 'sq' ? 'active' : ''}
            onClick={() => handleLanguageChange('sq')}
          >
            SQ
          </button>
        </div>
      </div>
    </div>
  );
}