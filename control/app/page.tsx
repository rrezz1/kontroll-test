"use client";

import { useState, useEffect, useRef } from "react";

// Define types
type Language = 'en' | 'sq';
type TranslationKey = 
  | 'home' | 'about' | 'services' | 'contact'
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
  | 'rights' | 'tagline';

type Translations = {
  en: Record<TranslationKey, string>;
  sq: Record<TranslationKey, string>;
};

// Header Component
function Header({ language, setLanguage }: { language: Language; setLanguage: (lang: Language) => void }) {
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
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
          <nav className="nav">
            <a href="#home">{t.home}</a>
            <a href="#about">{t.about}</a>
            <a href="#services">{t.services}</a>
            <a href="#contact">{t.contact}</a>
          </nav>
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

// Footer Component
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

// Main Home Component
export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const translations: Translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      title: "Professional Gas Pipe Control Services",
      subtitle: "Ensuring Safety Through Expert Inspection & Testing",
      heroText: "We provide comprehensive gas pipe control and testing services for residential, commercial, and industrial applications. Our certified technicians use state-of-the-art equipment to ensure your gas systems are safe, reliable, and compliant with all regulations.",
      cta: "Request Inspection",
      ourServices: "Our Services",
      service1Title: "Pressure Testing",
      service1Desc: "Comprehensive pressure testing to verify pipe integrity and identify potential leaks with precision equipment.",
      service2Title: "Visual Inspection",
      service2Desc: "Thorough visual examination of gas pipes, connections, and installations by certified professionals.",
      service3Title: "Leak Detection",
      service3Desc: "Advanced leak detection using specialized equipment and techniques to identify even the smallest leaks.",
      service4Title: "Compliance Certification",
      service4Desc: "Official certification confirming your gas system meets all safety standards and regulations.",
      service5Title: "Emergency Services",
      service5Desc: "24/7 emergency response for gas leaks and urgent situations with rapid deployment teams.",
      service6Title: "Preventive Maintenance",
      service6Desc: "Regular maintenance programs to prevent issues before they occur and extend system lifespan.",
      whyChooseUs: "Why Choose Control Test?",
      feature1: "Certified Experts",
      feature1Desc: "Our team consists of highly trained and certified professionals with years of experience.",
      feature2: "Advanced Technology",
      feature2Desc: "We use the latest technology and equipment for accurate and reliable results.",
      feature3: "Quick Response",
      feature3Desc: "Rapid response times for both scheduled inspections and emergency situations.",
      feature4: "Competitive Pricing",
      feature4Desc: "Quality services at competitive and transparent prices with no hidden costs.",
      aboutUs: "About Control Test",
      aboutText: "With over 15 years of experience in the industry, Control Test has established itself as the leading provider of gas pipe control services. Our commitment to safety, quality, and customer satisfaction sets us apart from the competition.",
      ourMission: "Our Mission",
      missionText: "To ensure the highest level of safety and reliability in gas pipe systems through professional inspection, testing, and certification services.",
      ourVision: "Our Vision",
      visionText: "To become the most trusted name in gas pipe control services, setting industry standards for excellence and innovation.",
      statistics: "Our Numbers Speak",
      projectsCompleted: "Projects Completed",
      happyClients: "Happy Clients",
      yearsExperience: "Years Experience",
      certifiedTechnicians: "Certified Technicians",
      howItWorks: "How It Works",
      step1: "Step 1: Contact Us",
      step1Desc: "Get in touch with our team to discuss your needs and schedule an inspection.",
      step2: "Step 2: On-Site Inspection",
      step2Desc: "Our certified technicians conduct thorough testing and inspection at your location.",
      step3: "Step 3: Detailed Report",
      step3Desc: "Receive a comprehensive report with findings and recommendations.",
      step4: "Step 4: Certification",
      step4Desc: "Get official certification and peace of mind for your gas system safety.",
      industriesWeServe: "Industries We Serve",
      residential: "Residential",
      residentialDesc: "Home gas systems and installations",
      commercial: "Commercial",
      commercialDesc: "Restaurants, hotels, and business facilities",
      industrial: "Industrial",
      industrialDesc: "Factories, manufacturing plants, and large facilities",
      finalCta: "Ready for a Safe Gas System?",
      finalCtaText: "Don't compromise on safety. Contact us today for professional gas pipe inspection and testing services.",
      requestInspection: "Request Inspection Now",
      contactTitle: "Contact Us",
      address: "123 Safety Street, Tirana",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      hours: "Mon-Fri: 8:00-18:00 | Emergency: 24/7",
      rights: "All rights reserved.",
      tagline: "Your safety is our priority"
    },
    sq: {
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      contact: "Kontakt",
      title: "Shërbime Profesionale të Kontrollit të Cevave të Gazit",
      subtitle: "Sigurimi i Sigurisë Përmes Inspektimit dhe Testimit të Ekspertëve",
      heroText: "Ne ofrojmë shërbime të plota të kontrollit dhe testimit të cevave të gazit për aplikime banesore, tregtare dhe industriale. Teknikët tanë të certifikuar përdorin pajisje moderne për të siguruar që sistemet tuaja të gazit janë të sigurta, të besueshme dhe të përputhshme me të gjitha rregulloret.",
      cta: "Kërkoni Inspektim",
      ourServices: "Shërbimet Tona",
      service1Title: "Testimi i Presionit",
      service1Desc: "Testim i plotë i presionit për të verifikuar integritetin e tubave dhe identifikuar rrjedhjet e mundshme me pajisje precize.",
      service2Title: "Inspektim Vizual",
      service2Desc: "Ekzaminim i plotë vizual i cevave të gazit, lidhjeve dhe instalimeve nga profesionistë të certifikuar.",
      service3Title: "Zbulimi i Rrjedhjeve",
      service3Desc: "Zbulim i avancuar i rrjedhjeve duke përdorur pajisje dhe teknika të specializuara për të identifikuar edhe rrjedhjet më të vogla.",
      service4Title: "Certifikim i Përputhshmërisë",
      service4Desc: "Certifikatë zyrtare që konfirmon që sistemi juaj i gazit plotëson të gjitha standardet dhe rregulloret e sigurisë.",
      service5Title: "Shërbime Emergjence",
      service5Desc: "Përgjigje emergjence 24/7 për rrjedhje gazi dhe situata urgjente me ekipe të shpejta të zbatimit.",
      service6Title: "Mirëmbajtje Parandaluese",
      service6Desc: "Programe të rregullta mirëmbajtjeje për të parandaluar problemet para se të ndodhin dhe zgjatjen e jetës së sistemit.",
      whyChooseUs: "Pse të Zgjidhni Control Test?",
      feature1: "Ekspertë të Certifikuar",
      feature1Desc: "Ekipi ynë përbëhet nga profesionistë të certifikuar dhe të trajnuar me vjetërsi përvoje.",
      feature2: "Teknologji e Avancuar",
      feature2Desc: "Ne përdorim teknologjinë dhe pajisjet më të fundit për rezultate të sakta dhe të besueshme.",
      feature3: "Përgjigje e Shpejtë",
      feature3Desc: "Kohë të shpejta përgjigjeje si për inspektime të planifikuara ashtu edhe për situata emergjente.",
      feature4: "Çmime Konkurruese",
      feature4Desc: "Shërbime cilësore me çmime konkurruese dhe transparente pa kosto të fshehura.",
      aboutUs: "Rreth Control Test",
      aboutText: "Me më shumë se 15 vjet përvojë në industri, Control Test është vendosur si ofruesi kryesor i shërbimeve të kontrollit të cevave të gazit. Angazhimi ynë për siguri, cilësi dhe kënaqësi të klientit na veçon nga konkurrentët.",
      ourMission: "Misioni Jonë",
      missionText: "Të sigurojmë nivelin më të lartë të sigurisë dhe besueshmërisë në sistemet e cevave të gazit përmes shërbimeve profesionale të inspektimit, testimit dhe certifikimit.",
      ourVision: "Vizioni Jonë",
      visionText: "Të bëhemi emri më i besuar në shërbimet e kontrollit të cevave të gazit, duke vendosur standardet e industrisë për ekselencë dhe inovacion.",
      statistics: "Numrat Tanë Flasin",
      projectsCompleted: "Projekte të Përfunduara",
      happyClients: "Klientë të Kënaqur",
      yearsExperience: "Vjet Përvojë",
      certifiedTechnicians: "Teknikë të Certifikuar",
      howItWorks: "Si Funksionon",
      step1: "Hapi 1: Na Kontaktoni",
      step1Desc: "Lidhuni me ekipin tonë për të diskutuar nevojat tuaja dhe planifikoni një inspektim.",
      step2: "Hapi 2: Inspektim në Vend",
      step2Desc: "Teknikët tanë të certifikuar kryejnë testim dhe inspektim të plotë në vendndodhjen tuaj.",
      step3: "Hapi 3: Raport i Detajuar",
      step3Desc: "Merrni një raport të plotë me gjetjet dhe rekomandimet.",
      step4: "Hapi 4: Certifikim",
      step4Desc: "Merrni certifikatën zyrtare dhe qetësinë e shpirtit për sigurinë e sistemit tuaj të gazit.",
      industriesWeServe: "Industritë që Shërbejmë",
      residential: "Banesore",
      residentialDesc: "Sistemet dhe instalimet e gazit në shtëpi",
      commercial: "Tregtare",
      commercialDesc: "Restorante, hotele dhe objekte biznesi",
      industrial: "Industriale",
      industrialDesc: "Fabrika, impiante prodhimi dhe objekte të mëdha",
      finalCta: "Gati për një Sistem të Sigurt Gazi?",
      finalCtaText: "Mos komprometoni për sigurinë. Na kontaktoni sot për shërbime profesionale të inspektimit dhe testimit të cevave të gazit.",
      requestInspection: "Kërkoni Inspektim Tani",
      contactTitle: "Na Kontaktoni",
      address: "Rruga e Sigurisë 123, Tiranë",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      hours: "E Hënë-Premte: 8:00-18:00 | Emergjence: 24/7",
      rights: "Të gjitha të drejtat e rezervuara.",
      tagline: "Siguria juaj është prioriteti ynë"
    }
  };

  const t = translations[language];

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} />
      
      <main className="main-content">
        {/* Hero Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[0] = el;
          }}
          className="hero-section"
          id="home"
        >
          <div className="container">
            <div className="hero-content">
              <h1>{t.title}</h1>
              <p className="hero-subtitle">{t.subtitle}</p>
              <p className="hero-description">{t.heroText}</p>
              <button className="cta-button">{t.cta}</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[1] = el;
          }}
          className="about-section"
          id="about"
        >
          <div className="container">
            <h2 className="section-title">{t.aboutUs}</h2>
            <div className="about-grid">
              <div className="about-content">
                <p className="about-text">{t.aboutText}</p>
                <div className="mission-vision">
                  <div className="mission">
                    <h3>{t.ourMission}</h3>
                    <p>{t.missionText}</p>
                  </div>
                  <div className="vision">
                    <h3>{t.ourVision}</h3>
                    <p>{t.visionText}</p>
                  </div>
                </div>
              </div>
              <div className="stats-grid">
                {[
                  { number: "500+", label: t.projectsCompleted },
                  { number: "98%", label: t.happyClients },
                  { number: "15+", label: t.yearsExperience },
                  { number: "25+", label: t.certifiedTechnicians }
                ].map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[2] = el;
          }}
          className="services-section"
          id="services"
        >
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
        <section 
          ref={el => {
            if (el) sectionRefs.current[3] = el;
          }}
          className="process-section"
        >
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

        {/* Industries Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[4] = el;
          }}
          className="industries-section"
        >
          <div className="container">
            <h2 className="section-title">{t.industriesWeServe}</h2>
            <div className="industries-grid">
              {[
                { title: t.residential, desc: t.residentialDesc, icon: "🏠" },
                { title: t.commercial, desc: t.commercialDesc, icon: "🏢" },
                { title: t.industrial, desc: t.industrialDesc, icon: "🏭" }
              ].map((industry, index) => (
                <div key={index} className="industry-card">
                  <div className="industry-icon">{industry.icon}</div>
                  <h3>{industry.title}</h3>
                  <p>{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[5] = el;
          }}
          className="features-section"
        >
          <div className="container">
            <h2 className="section-title">{t.whyChooseUs}</h2>
            <div className="features-grid">
              {[
                { title: t.feature1, desc: t.feature1Desc },
                { title: t.feature2, desc: t.feature2Desc },
                { title: t.feature3, desc: t.feature3Desc },
                { title: t.feature4, desc: t.feature4Desc }
              ].map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[6] = el;
          }}
          className="cta-section"
        >
          <div className="container">
            <div className="cta-content">
              <h2>{t.finalCta}</h2>
              <p>{t.finalCtaText}</p>
              <button className="cta-button primary">{t.requestInspection}</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[7] = el;
          }}
          className="contact-section"
          id="contact"
        >
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

      {/* Global Styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header Styles */
        .header {
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo h1 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e40af;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 6px;
        }

        .nav a:hover {
          color: #1e40af;
          background: #f3f4f6;
          transform: translateY(-1px);
        }

        /* Language Switcher */
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          background: #f8fafc;
          padding: 0.5rem;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .language-switcher button {
          background: transparent;
          border: 1px solid transparent;
          color: #6b7280;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .language-switcher button.active,
        .language-switcher button:hover {
          background: #1e40af;
          color: white;
          border-color: #1e40af;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(30, 64, 175, 0.2);
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 6rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-section h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #1e293b;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #4b5563;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          color: #6b7280;
          line-height: 1.8;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(30, 64, 175, 0.2);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(30, 64, 175, 0.3);
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #059669, #10b981);
          box-shadow: 0 4px 6px rgba(5, 150, 105, 0.2);
        }

        .cta-button.primary:hover {
          box-shadow: 0 6px 12px rgba(5, 150, 105, 0.3);
        }

        /* Section Titles */
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          color: #1e293b;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 2px;
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .mission-vision {
          display: grid;
          gap: 2rem;
        }

        .mission, .vision {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #1e40af;
        }

        .mission h3, .vision h3 {
          color: #1e40af;
          margin-bottom: 0.5rem;
          font-size: 1.3rem;
        }

        .stats-grid {
          display: grid;
          gap: 1rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #1e40af;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #6b7280;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Services Section */
        .services-section {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: #1e40af;
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .service-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Process Section */
        .process-section {
          padding: 6rem 0;
          background: white;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .process-step {
          text-align: center;
          padding: 2rem;
          background: #f8fafc;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .process-step:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
          margin: 0 auto 1.5rem;
        }

        .process-step h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .process-step p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Industries Section */
        .industries-section {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .industry-card {
          background: white;
          padding: 2.5rem 2rem;
          text-align: center;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .industry-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .industry-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
        }

        .industry-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .industry-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Features Section */
        .features-section {
          padding: 6rem 0;
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid #1e40af;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          color: white;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Contact Section */
        .contact-section {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .contact-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .hours {
          color: #6b7280;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        /* Footer */
        .footer {
          background: #1e293b;
          color: white;
          padding: 3rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          margin-bottom: 1rem;
          color: #f1f5f9;
          font-size: 1.1rem;
        }

        .footer-section p,
        .footer-section a {
          color: #cbd5e1;
          text-decoration: none;
          line-height: 1.8;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: white;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-visible {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav {
            gap: 1rem;
          }
          
          .hero-section h1 {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .services-grid,
          .features-grid,
          .industries-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}