"use client";

import { useState, useEffect, useRef } from "react";
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import akreditim from './images/akreditimi.png';

// Define types
type Language = 'en' | 'sq';
type TranslationKey = 
  | 'home' | 'about' | 'services' | 'contact' | 'qualifications'
  | 'title' | 'subtitle' | 'heroText' | 'cta'
  | 'ourServices' | 'service1Title' | 'service1Desc' | 'service2Title' | 'service2Desc'
  | 'service3Title' | 'service3Desc' | 'service4Title' | 'service4Desc' | 'service5Title'
  | 'service5Desc' | 'service6Title' | 'service6Desc' | 'whyChooseUs' | 'feature1'
  | 'feature1Desc' | 'feature2' | 'feature2Desc' | 'feature3' | 'feature3Desc'
  | 'feature4' | 'feature4Desc' | 'aboutUs' | 'aboutText' | 'ourMission' | 'missionText'
  | 'ourVision' | 'visionText' | 'statistics' | 'projectsCompleted' | 'happyClients'
  | 'yearsExperience' | 'certifiedTechnicians' | 'howItWorks' | 'step1' | 'step1Desc'
  | 'step2' | 'step2Desc' | 'step3' | 'step3Desc' | 'step4' | 'step4Desc'
  | 'industriesWeServe' | 'residential' | 'residentialDesc' | 'commercial'
  | 'commercialDesc' | 'industrial' | 'industrialDesc' | 'finalCta' | 'finalCtaText'
  | 'requestInspection' | 'contactTitle' | 'address' | 'phone' | 'email' | 'hours'
  | 'rights' | 'tagline' | 'ourQualifications' | 'viewCertificate' ;

type Translations = {
  en: Record<TranslationKey, string>;
  sq: Record<TranslationKey, string>;
};
// Image Modal Component - UPDATED
function ImageModal({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  // Handle click on overlay to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="image-modal-overlay" onClick={handleOverlayClick}>
      <div className="image-modal-content">
        <button className="image-modal-close" onClick={onClose}>
          ✕
        </button>
        <img src={imageUrl} alt="Certificate" className="image-modal-image" />
        {/* <div className="image-modal-back-button">
          <button onClick={onClose} className="back-button">
            ← Back
          </button>
        </div> */}
      </div>
    </div>
  );
}

// Qualifications Component
function Qualifications({ language }: { language: Language }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const qualifications = [
    {
      id: 1,
      title: language === 'en' ? 'ISO 9001 Certification' : 'Certifikim ISO 9001',
      image: akreditim.src,
      description: language === 'en' 
        ? 'Quality Management System Certification' 
        : 'Certifikim i Sistemit të Menaxhimit të Cilësisë'
    }
  ];

  const translations = {
    en: {
      ourQualifications: "Our Qualifications",
      viewCertificate: "View Certificate"
    },
    sq: {
      ourQualifications: "Kualifikimet Tona",
      viewCertificate: "Shiko Certifikatën"
    }
  };

  const t = translations[language];

  return (
    <>
      <section className="qualifications-section" id="qualifications">
        <div className="container">
          <h2 className="section-title">{t.ourQualifications}</h2>
          <div className="qualifications-grid">
            {qualifications.map((qualification) => (
              <div key={qualification.id} className="qualification-card">
                <div className="qualification-image">
                  <img 
                    src={qualification.image} 
                    alt={qualification.title}
                    onClick={() => setSelectedImage(qualification.image)}
                  />
                </div>
                <div className="qualification-content">
                  <h3>{qualification.title}</h3>
                  <p>{qualification.description}</p>
                  <button 
                    className="view-certificate-btn"
                    onClick={() => setSelectedImage(qualification.image)}
                  >
                    {t.viewCertificate}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </>
  );
}

// Header Component - UPDATED WITH QUALIFICATIONS LINK
function Header({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      qualifications: "Qualifications",
      contact: "Contact"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      qualifications: "Kualifikimet",
      contact: "Kontakt"
    }
  };

  const t = translations[language];

  return (
     <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Control Test</h1>
          </div>
          
          {/* Regular Navigation - Hidden on Mobile */}
          <nav className="nav">
            <a href="#home">{t.home}</a>
            <a href="#about">{t.about}</a>
            <a href="#services">{t.services}</a>
            <a href="#qualifications">{t.qualifications}</a> {/* ADDED QUALIFICATIONS LINK */}
            <a href="#contact">{t.contact}</a>
          </nav>
          
          {/* Language Switcher - Visible on all screens */}
          <div className="language-switcher">
            <button 
              onClick={() => setLanguage('en')} 
              className={language === 'en' ? 'active' : ''}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('sq')} 
              className={language === 'sq' ? 'active' : ''}
            >
              SQ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component - UPDATED WITH QUALIFICATIONS LINK
function Footer({ language }: { language: Language }) {
  const translations = {
    en: {
      about: "About Control Test",
      aboutText: "Professional gas pipe control and testing services ensuring safety and compliance.",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      address: "123 Safety Street, Tirana",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      rights: "All rights reserved.",
      tagline: "Your safety is our priority"
    },
    sq: {
      about: "Rreth Control Test",
      aboutText: "Shërbime profesionale të kontrollit dhe testimit të cevave të gazit që sigurojnë siguri dhe përputhshmëri.",
      quickLinks: "Lidhje të Shpejta",
      contact: "Informacione Kontakti",
      address: "Rruga e Sigurisë 123, Tiranë",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      rights: "Të gjitha të drejtat e rezervuara.",
      tagline: "Siguria juaj është prioriteti ynë"
    }
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t.about}</h3>
            <p>{t.aboutText}</p>
          </div>
          
          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <p><a href="#home">{language === 'en' ? 'Home' : 'Kryefaqja'}</a></p>
            <p><a href="#about">{language === 'en' ? 'About' : 'Rreth Nesh'}</a></p>
            <p><a href="#services">{language === 'en' ? 'Services' : 'Shërbimet'}</a></p>
            <p><a href="#qualifications">{language === 'en' ? 'Qualifications' : 'Kualifikimet'}</a></p> {/* ADDED */}
            <p><a href="#contact">{language === 'en' ? 'Contact' : 'Kontakt'}</a></p>
          </div>
          
          <div className="footer-section">
            <h3>{t.contact}</h3>
            <p>{t.address}</p>
            <p>{t.phone}</p>
            <p>{t.email}</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Control Test. {t.rights}</p>
          <p>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

// ServiceCard Component
function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Counter Component
function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            let start = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.3 }
      );

      const element = document.getElementById('about');
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [target, duration, hasStarted]);

  return (
    <>{count}{suffix}</>
  );
}

// Main Home Component
export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    technicians: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Stats configuration
  const statsConfig = {
    projects: { target: 500, suffix: "+", duration: 2000 },
    clients: { target: 98, suffix: "%", duration: 1500 },
    experience: { target: 18, suffix: "+", duration: 1800 },
    technicians: { target: 25, suffix: "+", duration: 1600 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-visible');
            
            // Start counters when stats section becomes visible
            if (entry.target.id === 'about' && !hasAnimated) {
              startCounters();
              setHasAnimated(true);
            }
          }
        });
      },
      { threshold: 0.3 } // Increased threshold for better trigger
    );
    
    // Observe the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const startCounters = () => {
    Object.keys(statsConfig).forEach((key) => {
      const { target, duration } = statsConfig[key as keyof typeof statsConfig];
      animateCounter(key as keyof typeof counters, target, duration);
    });
  };

  const animateCounter = (key: keyof typeof counters, target: number, duration: number) => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * target);
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };

  const translations: Translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      qualifications: "Qualifications",
      contact: "Contact",
      title: "Professional Gas Pipe Control Services",
      subtitle: "Ensuring Safety Through Expert Inspection & Testing",
      heroText: "We provide comprehensive gas pipe control and testing services for residential, commercial, and industrial applications. Our certified technicians ensure your gas systems are safe and compliant.",
      cta: "Request Inspection",
      ourServices: "Our Services",
      service1Title: "Pressure Testing",
      service1Desc: "Comprehensive pressure testing to verify pipe integrity and identify potential leaks.",
      service2Title: "Visual Inspection",
      service2Desc: "Thorough visual examination of gas pipes, connections, and installations.",
      service3Title: "Leak Detection",
      service3Desc: "Advanced leak detection using specialized equipment and techniques.",
      service4Title: "Compliance Certification",
      service4Desc: "Official certification confirming your gas system meets all safety standards.",
      service5Title: "Emergency Services",
      service5Desc: "24/7 emergency response for gas leaks and urgent situations.",
      service6Title: "Preventive Maintenance",
      service6Desc: "Regular maintenance programs to prevent issues before they occur.",
      whyChooseUs: "Why Choose Control Test?",
      feature1: "Certified Experts",
      feature1Desc: "Highly trained and certified professionals with years of experience.",
      feature2: "Advanced Technology",
      feature2Desc: "Latest equipment for accurate and reliable results.",
      feature3: "Quick Response",
      feature3Desc: "Rapid response for inspections and emergencies.",
      feature4: "Competitive Pricing",
      feature4Desc: "Quality services at competitive, transparent prices.",
      aboutUs: "About Control Test",
      aboutText: "With over 15 years of experience, Control Test is the leading provider of gas pipe control services. Our commitment to safety and quality sets us apart.",
      ourMission: "SH.P.K.”Kontroll Test”",
      missionText: "është një kompani që ofron shërbime testimi të materialeve  Pa shkatërrim në Kosovë,(NDT) me Metoden e Rentgenit(X-ray) RT2,Ultrazë UT2,Penetrantë PT2,Magnetofluks MT2,Kontrolla Vizuele PT2.Me personel i certifikuar sipas Standardit ISO EN 1712.",
      ourVision: "Përvoja",
      visionText: "Me përvojë 18 vjeҫare në fushën e Inspektimeve të enëve nën Presion,Akredituar nga DAK,sipas Standardit  SK EN ISO/IEC  17020.Si Trup i Atorizuar për vlerësimin e konformitetrit ,pëfshirë kalibrimin,certifikimin dhe kontrollet periodike të pasisjeve dhe instalimeve nën presion.",
      statistics: "Our Numbers Speak",
      projectsCompleted: "Projects Completed",
      happyClients: "Happy Clients",
      yearsExperience: "Years Experience",
      certifiedTechnicians: "Certified Technicians",
      howItWorks: "How It Works",
      step1: "Contact Us",
      step1Desc: "Get in touch to discuss your needs and schedule inspection.",
      step2: "On-Site Inspection",
      step2Desc: "Our certified technicians conduct thorough testing at your location.",
      step3: "Detailed Report",
      step3Desc: "Receive comprehensive report with findings and recommendations.",
      step4: "Certification",
      step4Desc: "Get official certification for your gas system safety.",
      industriesWeServe: "Industries We Serve",
      residential: "Residential",
      residentialDesc: "Home gas systems and installations",
      commercial: "Commercial",
      commercialDesc: "Restaurants, hotels, business facilities",
      industrial: "Industrial",
      industrialDesc: "Factories, manufacturing plants, large facilities",
      finalCta: "Ready for a Safe Gas System?",
      finalCtaText: "Don't compromise on safety. Contact us today for professional inspection.",
      requestInspection: "Request Inspection Now",
      contactTitle: "Contact Us",
      address: "123 Safety Street, Tirana",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      hours: "Mon-Fri: 8:00-18:00 | Emergency: 24/7",
      rights: "All rights reserved.",
      tagline: "Your safety is our priority",
      ourQualifications: "Our Qualifications",
      viewCertificate: "View Certificate"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      qualifications: "Kualifikimet",
      contact: "Kontakt",
      title: "Standart i Lartë në Kontrollë, Certifikim dhe Inspektim Teknik",
      subtitle: "",
      heroText: "SH.P.K.”Kontroll Test”. është një kompani që ofron shërbime testimi të materialeve  Pa Shkatërrim në Kosovë,(NDT) me Metoden e Rentgenit(X-ray) RT2,Ultrazë UT2,Penetrantë PT2,Magnetofluks MT2,Kontrolla Vizuele PT2.Me personel i certifikuar sipas Standardit ISO EN 1712.",
      cta: "Kërkoni Inspektim",
      ourServices: "Shërbimet Tona",
      service1Title: "Testimi i Presionit",
      service1Desc: "Testim i plotë i presionit për të verifikuar integritetin e tubave dhe identifikuar rrjedhjet e mundshme.",
      service2Title: "Inspektim Vizual",
      service2Desc: "Ekzaminim i plotë i cevave të gazit, lidhjeve dhe instalimeve.",
      service3Title: "Zbulimi i Rrjedhjeve",
      service3Desc: "Zbulim i avancuar i rrjedhjeve duke përdorur pajisje dhe teknika të specializuara.",
      service4Title: "Certifikim i Përputhshmërisë",
      service4Desc: "Certifikatë zyrtare që konfirmon përputhshmërinë me standardet e sigurisë.",
      service5Title: "Shërbime Emergjence",
      service5Desc: "Përgjigje emergjence 24/7 për rrjedhje gazi dhe situata urgjente.",
      service6Title: "Mirëmbajtje Parandaluese",
      service6Desc: "Programe të rregullta mirëmbajtjeje për të parandaluar problemet.",
      whyChooseUs: "Pse të Zgjidhni Control Test?",
      feature1: "Ekspertë të Certifikuar",
      feature1Desc: "Profesionistë të certifikuar dhe të trajnuar me vjetërsi përvoje.",
      feature2: "Teknologji e Avancuar",
      feature2Desc: "Pajisjet më të fundit për rezultate të sakta dhe të besueshme.",
      feature3: "Përgjigje e Shpejtë",
      feature3Desc: "Përgjigje e shpejtë për inspektime dhe emergjenca.",
      feature4: "Çmime Konkurruese",
      feature4Desc: "Shërbime cilësore me çmime konkurruese dhe transparente.",
      aboutUs: "Rreth Nesh",
      aboutText: "Me më shumë se 15 vjet përvojë, Control Test është ofruesi kryesor i shërbimeve të kontrollit të cevave të gazit. Angazhimi ynë për siguri dhe cilësi na veçon nga të tjerët.",
      ourMission: "SH.P.K.”Kontroll Test”",
      missionText: "është një kompani që ofron shërbime testimi të materialeve  Pa shkatërrim në Kosovë,(NDT) me Metoden e Rentgenit(X-ray) RT2,Ultrazë UT2,Penetrantë PT2,Magnetofluks MT2,Kontrolla Vizuele PT2.Me personel i certifikuar sipas Standardit ISO EN 1712.",
      ourVision: "Përvoja",
      visionText: "Me përvojë 18 vjeҫare në fushën e Inspektimeve të enëve nën Presion,Akredituar nga DAK,sipas Standardit  SK EN ISO/IEC  17020.Si Trup i Atorizuar për vlerësimin e konformitetrit ,pëfshirë kalibrimin,certifikimin dhe kontrollet periodike të pasisjeve dhe instalimeve nën presion.",
      statistics: "Numrat Tanë Flasin",
      projectsCompleted: "Projekte të Përfunduara",
      happyClients: "Klientë të Kënaqur",
      yearsExperience: "Vjet Përvojë",
      certifiedTechnicians: "Teknikë të Certifikuar",
      howItWorks: "Si Funksionon",
      step1: "Na Kontaktoni",
      step1Desc: "Lidhuni për të diskutuar nevojat tuaja dhe planifikoni inspektimin.",
      step2: "Inspektim në Vend",
      step2Desc: "Teknikët tanë të certifikuar kryejnë testim të plotë në vendndodhjen tuaj.",
      step3: "Raport i Detajuar",
      step3Desc: "Merrni raport të plotë me gjetjet dhe rekomandimet.",
      step4: "Certifikim",
      step4Desc: "Merrni certifikatën zyrtare për sigurinë e sistemit tuaj të gazit.",
      industriesWeServe: "Industritë që Shërbejmë",
      residential: "Banesore",
      residentialDesc: "Sistemet dhe instalimet e gazit në shtëpi",
      commercial: "Tregtare",
      commercialDesc: "Restorante, hotele, objekte biznesi",
      industrial: "Industriale",
      industrialDesc: "Fabrika, impiante prodhimi, objekte të mëdha",
      finalCta: "Gati për një Sistem të Sigurt Gazi?",
      finalCtaText: "Mos komprometoni për sigurinë. Na kontaktoni sot për inspektim profesional.",
      requestInspection: "Kërkoni Inspektim Tani",
      contactTitle: "Na Kontaktoni",
      address: "Rruga e Sigurisë 123, Tiranë",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      hours: "E Hënë-Premte: 8:00-18:00 | Emergjence: 24/7",
      rights: "Të gjitha të drejtat e rezervuara.",
      tagline: "Siguria juaj është prioriteti ynë",
      ourQualifications: "Kualifikimet Tona",
      viewCertificate: "Shiko Certifikatën"
    }
  };

  const t = translations[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="main-content">
        {/* Hero Section */}
      

        {/* Qualifications Section - NOW WITH ID FOR NAVIGATION */}
        <Qualifications language={language} />

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="container">
            <h2 className="section-title">{t.ourServices}</h2>
            <div className="services-grid">
              {[
                { title: t.service1Title, desc: t.service1Desc, icon: "🔧" },
                { title: t.service2Title, desc: t.service2Desc, icon: "👁️" },
                { title: t.service3Title, desc: t.service3Desc, icon: "🔍" },
                { title: t.service4Title, desc: t.service4Desc, icon: "📋" },
                { title: t.service5Title, desc: t.service5Desc, icon: "🚨" },
                { title: t.service6Title, desc: t.service6Desc, icon: "🛠️" }
              ].map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.desc}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title">{t.howItWorks}</h2>
            <div className="process-steps">
              {[
                { step: t.step1, desc: t.step1Desc, number: "1" },
                { step: t.step2, desc: t.step2Desc, number: "2" },
                { step: t.step3, desc: t.step3Desc, number: "3" },
                { step: t.step4, desc: t.step4Desc, number: "4" }
              ].map((item, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{item.number}</div>
                  <h3>{item.step}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>{t.finalCta}</h2>
              <p>{t.finalCtaText}</p>
              <button className="cta-button primary">{t.requestInspection}</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container">
            <h2 className="section-title">{t.contactTitle}</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>{t.address}</h3>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>{t.phone}</h3>
              </div>
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>{t.email}</h3>
                <p className="hours">{t.hours}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer language={language} />
    </div>
  );
}