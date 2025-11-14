"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, 
  FaTools, FaCheckCircle, FaClock, FaCertificate
} from 'react-icons/fa';

// Define types for better TypeScript support
type TranslationKey = 
  | 'home' | 'about' | 'services' | 'contact'
  | 'title' | 'subtitle' | 'heroText' | 'cta'
  | 'aboutTitle' | 'aboutText' | 'mission' | 'missionText' | 'vision' | 'visionText'
  | 'statsTitle' | 'projects' | 'clients' | 'years' | 'technicians'
  | 'servicesTitle' | 'pressureTesting' | 'pressureDesc' | 'visualInspection' | 'visualDesc'
  | 'leakDetection' | 'leakDesc' | 'complianceCert' | 'complianceDesc' | 'emergencyServices'
  | 'emergencyDesc' | 'maintenance' | 'maintenanceDesc' | 'processTitle' | 'step1' | 'step1Desc'
  | 'step2' | 'step2Desc' | 'step3' | 'step3Desc' | 'step4' | 'step4Desc' | 'industriesTitle'
  | 'residential' | 'residentialDesc' | 'commercial' | 'commercialDesc' | 'industrial' | 'industrialDesc'
  | 'whyTitle' | 'certified' | 'certifiedDesc' | 'technology' | 'technologyDesc' | 'quickResponse'
  | 'quickResponseDesc' | 'competitive' | 'competitiveDesc' | 'finalCta' | 'finalCtaText'
  | 'requestInspection' | 'contactTitle' | 'address' | 'phone' | 'email' | 'hours' | 'rights' | 'tagline';

type Translations = {
  en: Record<TranslationKey, string>;
  sq: Record<TranslationKey, string>;
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "sq">("en");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
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
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const translations: Translations = {
    en: {
      // Header
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      
      // Hero
      title: "Professional Gas Pipe Control Services",
      subtitle: "Ensuring Safety Through Expert Inspection & Testing",
      heroText: "We provide comprehensive gas pipe control and testing services for residential, commercial, and industrial applications. Our certified technicians ensure your gas systems are safe and compliant.",
      cta: "Request Inspection",
      
      // About
      aboutTitle: "About Control Test",
      aboutText: "With over 15 years of experience in gas pipe control and testing, Control Test has established itself as the leading provider of safety inspection services. Our commitment to excellence and customer safety sets us apart.",
      mission: "Our Mission",
      missionText: "To ensure the highest level of safety in gas pipe systems through professional inspection and certification.",
      vision: "Our Vision",
      visionText: "To become the most trusted name in gas pipe control services across the region.",
      
      // Stats
      statsTitle: "Our Numbers Speak",
      projects: "Projects Completed",
      clients: "Happy Clients",
      years: "Years Experience",
      technicians: "Certified Technicians",
      
      // Services
      servicesTitle: "Our Services",
      pressureTesting: "Pressure Testing",
      pressureDesc: "Comprehensive pressure testing to verify pipe integrity and identify potential leaks.",
      visualInspection: "Visual Inspection",
      visualDesc: "Thorough examination of gas pipes, connections, and installations.",
      leakDetection: "Leak Detection",
      leakDesc: "Advanced leak detection using specialized equipment and techniques.",
      complianceCert: "Compliance Certification",
      complianceDesc: "Official certification confirming safety standards compliance.",
      emergencyServices: "Emergency Services",
      emergencyDesc: "24/7 emergency response for gas leaks and urgent situations.",
      maintenance: "Preventive Maintenance",
      maintenanceDesc: "Regular maintenance programs to prevent issues before they occur.",
      
      // How It Works
      processTitle: "How It Works",
      step1: "Contact Us",
      step1Desc: "Get in touch to discuss your needs and schedule inspection.",
      step2: "On-Site Inspection",
      step2Desc: "Our certified technicians conduct thorough testing at your location.",
      step3: "Detailed Report",
      step3Desc: "Receive comprehensive report with findings and recommendations.",
      step4: "Certification",
      step4Desc: "Get official certification for your gas system safety.",
      
      // Industries
      industriesTitle: "Industries We Serve",
      residential: "Residential",
      residentialDesc: "Home gas systems and installations",
      commercial: "Commercial",
      commercialDesc: "Restaurants, hotels, business facilities",
      industrial: "Industrial",
      industrialDesc: "Factories, manufacturing plants, large facilities",
      
      // Why Choose Us
      whyTitle: "Why Choose Control Test?",
      certified: "Certified Experts",
      certifiedDesc: "Highly trained and certified professionals with years of experience.",
      technology: "Advanced Technology",
      technologyDesc: "Latest equipment for accurate and reliable results.",
      quickResponse: "Quick Response",
      quickResponseDesc: "Rapid response for inspections and emergencies.",
      competitive: "Competitive Pricing",
      competitiveDesc: "Quality services at competitive, transparent prices.",
      
      // CTA
      finalCta: "Ready for a Safe Gas System?",
      finalCtaText: "Don't compromise on safety. Contact us today for professional inspection.",
      requestInspection: "Request Inspection Now",
      
      // Contact
      contactTitle: "Contact Us",
      address: "123 Safety Street, Tirana",
      phone: "+355 4X XXX XXXX",
      email: "info@controltest.com",
      hours: "Mon-Fri: 8:00-18:00 | Emergency: 24/7",
      rights: "All rights reserved.",
      tagline: "Your safety is our priority"
    },
    sq: {
      // Header
      home: "Kryefaqja",
      about: "Rreth Nesh",
      services: "Shërbimet",
      contact: "Kontakt",
      
      // Hero
      title: "Shërbime Profesionale të Kontrollit të Cevave të Gazit",
      subtitle: "Sigurimi i Sigurisë Përmes Inspektimit dhe Testimit të Ekspertëve",
      heroText: "Ne ofrojmë shërbime të plota të kontrollit dhe testimit të cevave të gazit për aplikime banesore, tregtare dhe industriale. Teknikët tanë të certifikuar sigurojnë që sistemet tuaja të gazit janë të sigurta dhe të përputhshme.",
      cta: "Kërkoni Inspektim",
      
      // About
      aboutTitle: "Rreth Control Test",
      aboutText: "Me më shumë se 15 vjet përvojë në kontrollin dhe testimin e cevave të gazit, Control Test është vendosur si ofruesi kryesor i shërbimeve të inspektimit të sigurisë. Angazhimi ynë për ekselencë dhe siguri të klientit na veçon nga të tjerët.",
      mission: "Misioni Jonë",
      missionText: "Të sigurojmë nivelin më të lartë të sigurisë në sistemet e cevave të gazit përmes inspektimit dhe certifikimit profesional.",
      vision: "Vizioni Jonë",
      visionText: "Të bëhemi emri më i besuar në shërbimet e kontrollit të cevave të gazit në të gjithë rajonin.",
      
      // Stats
      statsTitle: "Numrat Tanë Flasin",
      projects: "Projekte të Përfunduara",
      clients: "Klientë të Kënaqur",
      years: "Vjet Përvojë",
      technicians: "Teknikë të Certifikuar",
      
      // Services
      servicesTitle: "Shërbimet Tona",
      pressureTesting: "Testimi i Presionit",
      pressureDesc: "Testim i plotë i presionit për të verifikuar integritetin e tubave dhe identifikuar rrjedhjet e mundshme.",
      visualInspection: "Inspektim Vizual",
      visualDesc: "Ekzaminim i plotë i cevave të gazit, lidhjeve dhe instalimeve.",
      leakDetection: "Zbulimi i Rrjedhjeve",
      leakDesc: "Zbulim i avancuar i rrjedhjeve duke përdorur pajisje dhe teknika të specializuara.",
      complianceCert: "Certifikim i Përputhshmërisë",
      complianceDesc: "Certifikatë zyrtare që konfirmon përputhshmërinë me standardet e sigurisë.",
      emergencyServices: "Shërbime Emergjence",
      emergencyDesc: "Përgjigje emergjence 24/7 për rrjedhje gazi dhe situata urgjente.",
      maintenance: "Mirëmbajtje Parandaluese",
      maintenanceDesc: "Programe të rregullta mirëmbajtjeje për të parandaluar problemet para se të ndodhin.",
      
      // How It Works
      processTitle: "Si Funksionon",
      step1: "Na Kontaktoni",
      step1Desc: "Lidhuni për të diskutuar nevojat tuaja dhe planifikoni inspektimin.",
      step2: "Inspektim në Vend",
      step2Desc: "Teknikët tanë të certifikuar kryejnë testim të plotë në vendndodhjen tuaj.",
      step3: "Raport i Detajuar",
      step3Desc: "Merrni raport të plotë me gjetjet dhe rekomandimet.",
      step4: "Certifikim",
      step4Desc: "Merrni certifikatën zyrtare për sigurinë e sistemit tuaj të gazit.",
      
      // Industries
      industriesTitle: "Industritë që Shërbejmë",
      residential: "Banesore",
      residentialDesc: "Sistemet dhe instalimet e gazit në shtëpi",
      commercial: "Tregtare",
      commercialDesc: "Restorante, hotele, objekte biznesi",
      industrial: "Industriale",
      industrialDesc: "Fabrika, impiante prodhimi, objekte të mëdha",
      
      // Why Choose Us
      whyTitle: "Pse të Zgjidhni Control Test?",
      certified: "Ekspertë të Certifikuar",
      certifiedDesc: "Profesionistë të certifikuar dhe të trajnuar me vjetërsi përvoje.",
      technology: "Teknologji e Avancuar",
      technologyDesc: "Pajisjet më të fundit për rezultate të sakta dhe të besueshme.",
      quickResponse: "Përgjigje e Shpejtë",
      quickResponseDesc: "Përgjigje e shpejtë për inspektime dhe emergjenca.",
      competitive: "Çmime Konkurruese",
      competitiveDesc: "Shërbime cilësore me çmime konkurruese dhe transparente.",
      
      // CTA
      finalCta: "Gati për një Sistem të Sigurt Gazi?",
      finalCtaText: "Mos komprometoni për sigurinë. Na kontaktoni sot për inspektim profesional.",
      requestInspection: "Kërkoni Inspektim Tani",
      
      // Contact
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

  // Calculate parallax effect
  const calculateParallax = (factor: number) => {
    return {
      transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`
    };
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow" style={calculateParallax(0.002)}></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-medium" style={calculateParallax(0.0015)}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow" style={calculateParallax(0.001)}></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Header */}
      <header className="w-full max-w-6xl text-center mb-8 sm:mb-12 relative z-10">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 drop-shadow-lg animate-text-shimmer">
            Control Test
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg sm:text-xl mt-4 text-gray-300 font-light">
            {language === 'en' ? 'Professional Gas Pipe Control & Safety Inspection' : 'Kontroll Profesional i Cevave të Gazit & Inspektim Sigurie'}
          </p>
        </div>

        {/* Navigation & Language Switcher */}
        <nav className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            {[t.home, t.about, t.services, t.contact].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <div className="flex gap-2 bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('sq')}
              className={`px-3 py-1 rounded-md transition-all duration-300 ${
                language === 'sq' 
                  ? 'bg-cyan-500 text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              SQ
            </button>
          </div>
        </nav>
      </header>

      <main className="w-full max-w-6xl grid gap-16 sm:gap-20 relative z-10">
        {/* Hero Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[0] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10 min-h-[60vh] flex items-center justify-center text-center"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-cyan-300 mb-6 font-light">
              {t.subtitle}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t.heroText}
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25">
              {t.cta}
            </button>
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[1] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.aboutTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.aboutText}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">{t.mission}</h3>
                  <p className="text-gray-300">{t.missionText}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2">{t.vision}</h3>
                  <p className="text-gray-300">{t.visionText}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "500+", label: t.projects, icon: FaCheckCircle },
                { number: "98%", label: t.clients, icon: FaShieldAlt },
                { number: "15+", label: t.years, icon: FaClock },
                { number: "25+", label: t.technicians, icon: FaCertificate }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-2xl text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
                  <stat.icon className="text-3xl text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[2] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.servicesTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.pressureTesting, desc: t.pressureDesc, icon: "🔧", color: "blue" },
              { title: t.visualInspection, desc: t.visualDesc, icon: "👁️", color: "cyan" },
              { title: t.leakDetection, desc: t.leakDesc, icon: "🔍", color: "green" },
              { title: t.complianceCert, desc: t.complianceDesc, icon: "📋", color: "purple" },
              { title: t.emergencyServices, desc: t.emergencyDesc, icon: "🚨", color: "red" },
              { title: t.maintenance, desc: t.maintenanceDesc, icon: "🛠️", color: "orange" }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[3] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.processTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: t.step1, desc: t.step1Desc, number: "1" },
              { step: t.step2, desc: t.step2Desc, number: "2" },
              { step: t.step3, desc: t.step3Desc, number: "3" },
              { step: t.step4, desc: t.step4Desc, number: "4" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.step}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[4] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.industriesTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: t.residential, desc: t.residentialDesc, icon: "🏠", color: "blue" },
              { title: t.commercial, desc: t.commercialDesc, icon: "🏢", color: "cyan" },
              { title: t.industrial, desc: t.industrialDesc, icon: "🏭", color: "green" }
            ].map((industry, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300">{industry.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[5] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.whyTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.certified, desc: t.certifiedDesc, icon: FaCertificate },
              { title: t.technology, desc: t.technologyDesc, icon: FaTools },
              { title: t.quickResponse, desc: t.quickResponseDesc, icon: FaClock },
              { title: t.competitive, desc: t.competitiveDesc, icon: FaCheckCircle }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
              >
                <feature.icon className="text-4xl text-cyan-400 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[6] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10 text-center py-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t.finalCta}
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto">
              {t.finalCtaText}
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 text-lg">
              {t.requestInspection}
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={el => {
            if (el) sectionRefs.current[7] = el;
          }}
          className="opacity-0 transition-all duration-700 transform translate-y-10"
          id="contact"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-8 text-center relative">
            <span className="relative z-10 px-4 bg-gray-900">{t.contactTitle}</span>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-0"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <FaMapMarkerAlt className="text-3xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.address}</h3>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <FaPhone className="text-3xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.phone}</h3>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <FaEnvelope className="text-3xl text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.email}</h3>
              <p className="text-gray-400 text-sm">{t.hours}</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 w-full max-w-6xl text-center text-gray-400 relative z-10">
        <div className="py-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Control Test. {t.rights}</p>
          <p className="mt-2 text-cyan-400">{t.tagline}</p>
        </div>
      </footer>

      {/* Add global styles */}
      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes textShimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        @keyframes pulseMedium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: textShimmer 3s infinite linear;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s infinite ease-in-out;
        }
        
        .animate-pulse-medium {
          animation: pulseMedium 4s infinite ease-in-out;
        }
        
        .animate-fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style> */}
    </div>
  );
}