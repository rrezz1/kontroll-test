'use client';

import { useState } from 'react';
import { Language, Translations } from '@/types';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Accreditation from '@/components/Accreditation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Activities from '@/components/Activities';



const translations: Translations = {
  en: {

  project1_Titlee:"Relux-Llapnaselle (Prishtine)",
  project2_Titlee:"Factory 'Drena'-Skenderaj",
  project3_Titlee:"'Ballkan'- Suharekë",
  project4_Titlee:"'Fruteks'-Gelance,Suharekë",
  project5_Titlee:"UNOPS - Prishtinë, Ferizaj, Gjilan, Pejë, Mitrovicë",
  project6_Titlee:"Evaporator pipes from Kosova B-Termokos",
    // Navigation
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
     // Activities Section
    activities_title: "Our Activities",
    activities_intro: "What services do we offer? 'KONTROLL TEST' sh.p.k. performs technical inspection of high-risk installations in accordance with:",
    regulations_title: "Regulations and Laws",
    gln_systems: "GLN Systems and Components",
    // Hero Section
    hero_title: "Professional Inspection & Testing Services",
    hero_subtitle: "Ensuring safety and compliance through expert inspection and testing",
    hero_cta: "Request Inspection",
    
    // About Section
    about_title: "About Us",
    about_heading: "L.L.C. \"Kontroll Test\"",
    about_text1: "is a company that offers non-destructive material testing services in Kosovo (NDT) with X-ray RT2, Ultrasonic UT2, Penetrant PT2, Magnetic Flux MT2, Visual Inspection PT2 methods. With personnel certified according to ISO EN 1712 standard.",
    about_text2: "With 18 years of experience in the field of Pressure Vessel Inspections, Accredited by DAK, according to Standard SK EN ISO/IEC 17020. As an Authorized Body for conformity assessment, including calibration, certification and periodic controls of pressure equipment and installations.",
    about_cta: "Our Services",
    
    // Services Section
    services_title: "Our Services",
    service1_title: "Radiographic Methods (RT)",
    service1_desc: "Radiographic testing methods based on irradiating welds, details, etc. with X-rays, on pipes, metal plates, etc.",
    service2_title: "Ultrasonic Testing (UT)",
    service2_desc: "Ultrasonic testing of welded joints in pipes, plates, shafts, axes, etc. in material thickness up to 5 m.",
    service3_title: "Wall Thickness Measurement",
    service3_desc: "Wall thickness in pipes, plates, etc. is determined using ultrasound; this method is often used in testing corrosion of tanks and pipelines.",
    service4_title: "Penetrant Inspection (PT)",
    service4_desc: "This method is based on the use of capillary properties of liquids. A defect is manifested through the formation of a high-contrast optical indicator image.",
    service5_title: "Magnetic Particle Testing (MT)",
    service5_desc: "Magnetic testing uses the principle of interruption of magnetic field lines, which is observed whenever the surface integrity of a magnetized object is compromised.",
    service6_title: "Visual Inspection (VT)",
    service6_desc: "Visual inspection methods based on the use of various optical devices. This increases the perception and sensitivity of the human eye.",
    service7_title: "Leak Testing Methods",
    service7_desc: "Leak testing enables detection of hole defects and testing of products or systems under high parameters.",
    service8_title: "Hardness Testing",
    service8_desc: "Hardness measurement based on the results of mechanical interaction between two solid bodies.",
    service9_title: "Microstructure Analysis",
    service9_desc: "This method involves visualization and evaluation of microstructures of metals, pipes, plates, etc.",
    
    // How We Work Section
    how_it_works: "How We Work",
    step1: "Contact Us",
    step1_desc: "Discuss your project, technical requirements, or collaboration opportunities with our team.",
    step2: "On-Site Inspection",
    step2_desc: "A complete engineering process is carried out, including detailed analysis, testing, and technical evaluation on-site.",
    step3: "Detailed Report",
    step3_desc: "Your equipment and system receive an official certification for safety and compliance with the relevant standards.",
    step4: "Certification",
    step4_desc: "Accredited certification for compliance and safety, in accordance with legal requirements and standards.",

    
    // Projects Section
    projects_title: "Completed Projects",
    project1_desc: "Pressure vessel inspection and testing",
    project2_desc: "Industrial equipment inspection",
    project3_desc: "Pipeline testing and certification",
    project4_desc: "Equipment testing and certification",
    project5_desc: "Medical facility inspection",
    project6_desc: "Steam pipes inspection",

    project7_Titlee:"Cement Factory - Fushe Kruje",
    project7_desc: " Penetrant testing of welds",
    
    // Contact Section
    contact_title: "Contact Us",
    contact_info: "Get In Touch",
    contact_address: "Lipjan, Kosovo",

    accreditation: "Certificates",
    accreditation_title: "Accreditation Certificate",
    form_name: "Name",
    form_email: "Email",
    form_phone: "Phone",
    form_message: "Message",
    form_submit: "Send Message",
    
    // Footer
    footer_about: "About Kontroll Test",
    footer_about_text: "Professional non-destructive testing and inspection services with 18+ years of experience.",
    footer_services: "Our Services",
    footer_contact: "Contact Info",
    footer_rights: "Kontroll Test L.L.C. All rights reserved",

    rregullorjaMED:"Regulations (MED) NR. 02/2019 For the inspection , review, and assessment of the technical safety of pressure equipment in operation.",
    law06:"Law No. 06/L-031 on pressure equipment – Authorizations for performing the technical inspection of high-risk installations",
 
   kadaja:"Boilers",
  kaldajaText:"Steam and hot-water boilers, safety valves",

  RezervuaretMetalike:"Metal tanks",
  RezervuaretMetalikeText:"For liquids–gases operating with an overpressure PS < 16 bar; TS < 200°C and 100 < V × PS < 4000",

  Tubacione:"Steam pipelines",
  TubacionetextL:"6 bar < PS < 80 bar and hot water – 110°C < TS < 450°C and 100 < D × PS",

  SistemeInstalime:"Gas systems and installations",
  SistemeInstalimeText:"Inspection of gas systems and installations",

  RezervuareFtohese: "Cooling tanks",
  RezervuareFtoheseText:"Inspection of cooling tanks",

  RezervuariGLN:"LPG tank",
  RezervuariGLNText:"Evaporator and LPG reducer, testing and calibration of safety valves",

  Gypa:"Pipes, Boilers, and Collectors",
  GypaText:"Inspection of pipes, boilers, and collectors",
  },
  de: {
  project1_Titlee:"Relux-Llapnaselle (Prishtine)",
  project2_Titlee:"Fabrik 'Drena'-Skenderaj",
  project3_Titlee:"'Ballkan'- Suharekë",
  project4_Titlee:"'Fruteks'-Gelance,Suharekë",
  project5_Titlee:"UNOPS - Prishtinë, Ferizaj, Gjilan, Pejë, Mitrovicë",
  project6_Titlee:"Verdampferrohre von Kosova B-Termokos",
     // Activities Section
    activities_title: "Unsere Aktivitäten",
    activities_intro: "Welche Dienstleistungen bieten wir an? 'KONTROLL TEST' sh.p.k. führt technische Inspektionen von Hochrisikoanlagen durch in Übereinstimmung mit:",
    regulations_title: "Vorschriften und Gesetze",
    gln_systems: "GLN-Systeme und Komponenten",
    // German translations (same structure as above)
    home: "Startseite",
    about: "Über Uns",
    services: "Dienstleistungen",
    projects: "Projekte",
    contact: "Kontakt",
    hero_title: "Professionelle Inspektions- und Prüfdienste",
    hero_subtitle: "Sicherheit und Konformität durch fachkundige Inspektion und Prüfung gewährleisten",
    hero_cta: "Inspektion anfordern",
    about_title: "Über Uns",
    about_heading: "GmbH \"Kontroll Test\"",
    about_text1: "ist ein Unternehmen, das zerstörungsfreie Materialprüfdienstleistungen im Kosovo (NDT) mit Röntgenstrahlen RT2, Ultraschall UT2, Eindringmittel PT2, Magnetfluss MT2, visueller Inspektion PT2 anbietet. Mit Personal, das nach ISO EN 1712 Standard zertifiziert ist.",
    about_text2: "Mit 18 Jahren Erfahrung im Bereich der Druckbehälterinspektionen, akkreditiert von DAK, gemäß Standard SK EN ISO/IEC 17020. Als autorisierte Stelle für die Konformitätsbewertung, einschließlich Kalibrierung, Zertifizierung und periodischer Kontrollen von Druckgeräten und -anlagen.",
    about_cta: "Unsere Dienstleistungen",
    services_title: "Unsere Dienstleistungen",
    service1_title: "Radiografische Methoden (RT)",
    service1_desc: "Radiografische Prüfverfahren basierend auf der Bestrahlung von Schweißnähten, Details usw. mit Röntgenstrahlen, an Rohren, Metallplatten usw.",
    service2_title: "Ultraschallprüfung (UT)",
    service2_desc: "Ultraschallprüfung von Schweißverbindungen in Rohren, Platten, Wellen, Achsen usw. in Materialstärken bis zu 5 m.",
    service3_title: "Wanddickenmessung",
    service3_desc: "Die Wanddicke in Rohren, Platten usw. wird mit Ultraschall bestimmt; diese Methode wird häufig bei der Korrosionsprüfung von Tanks und Pipelines eingesetzt.",
    service4_title: "Eindringprüfung (PT)",
    service4_desc: "Dieses Verfahren basiert auf der Verwendung der Kapillareigenschaften von Flüssigkeiten. Ein Defekt manifestiert sich durch die Bildung eines hochkontrastreichen optischen Indikatorbildes.",
    service5_title: "Magnetpulverprüfung (MT)",
    service5_desc: "Die magnetische Prüfung nutzt das Prinzip der Unterbrechung von Magnetfeldlinien, die beobachtet wird, wenn die Oberflächenintegrität eines magnetisierten Objekts beeinträchtigt ist.",
    service6_title: "Visuelle Inspektion (VT)",
    service6_desc: "Visuelle Inspektionsmethoden basierend auf der Verwendung verschiedener optischer Geräte. Dies erhöht die Wahrnehmung und Empfindlichkeit des menschlichen Auges.",
    service7_title: "Leckprüfverfahren",
    service7_desc: "Die Leckprüfung ermöglicht die Erkennung von Lochfehlern und die Prüfung von Produkten oder Systemen unter hohen Parametern.",
    service8_title: "Härteprüfung",
    service8_desc: "Härtemessung basierend auf den Ergebnissen der mechanischen Wechselwirkung zwischen zwei Festkörpern.",
    service9_title: "Mikrostrukturanalyse",
    service9_desc: "Dieses Verfahren umfasst die Visualisierung und Bewertung von Mikrostrukturen von Metallen, Rohren, Platten usw.",
    how_it_works: "Wie Wir Arbeiten",
step1: "Kontaktieren Sie uns",
step1_desc: "Besprechen Sie Ihr Projekt, technische Anforderungen oder Kooperationsmöglichkeiten mit unserem Team.",
step2: "Inspektion vor Ort",
step2_desc: "Vollständiger ingenieurtechnischer Prozess durchgeführt, einschließlich detaillierter Analyse, Tests und technischer Bewertung am Einsatzort.",
step3: "Detaillierter Bericht",
step3_desc: "Ihre Ausrüstung und Ihr System erhalten eine offizielle Zertifizierung für Sicherheit und Konformität mit den entsprechenden Standards.",
step4: "Zertifizierung",
step4_desc: "Akkreditierte Zertifizierung für Konformität und Sicherheit, gemäß den gesetzlichen Anforderungen und Standards.",

    projects_title: "Abgeschlossene Projekte",
    project1_desc: "Druckbehälterinspektion und -prüfung",
    project2_desc: "Industrieausrüstungsinspektion",
    project3_desc: "Pipeline-Prüfung und Zertifizierung",
    project4_desc: "Ausrüstungsprüfung und Zertifizierung",
    project5_desc: "Medizinische Einrichtungsinspektion",
      project7_Titlee:"Betonfabrik - Fushe Kruje",
    project7_desc: "Eindringprüfung von Schweißnähten",
    project6_desc: "Dampfrohrinspektion",
    contact_title: "Kontaktieren Sie Uns",
    contact_info: "Kontakt Aufnehmen",
    contact_address: "Lipjan, Kosovo",
    accreditation: "Zertifikate",
    accreditation_title: "Akkreditierungszertifikat",
    form_name: "Name",
    form_email: "E-Mail",
    form_phone: "Telefon",
    form_message: "Nachricht",
    form_submit: "Nachricht Senden",
    footer_about: "Über Kontroll Test",
    footer_about_text: "Professionelle zerstörungsfreie Prüf- und Inspektionsdienstleistungen mit mehr als 18 Jahren Erfahrung.",
    footer_services: "Unsere Dienstleistungen",
    footer_contact: "Kontaktinformationen",
    footer_rights: "Kontroll Test GmbH. Alle Rechte vorbehalten",
    rregullorjaMED:"Die Verordnung (MWE) NR. 02/2019 Für die Kontrolle, Überprüfung und Bewertung der technischen Sicherheit von Druckgeräten im Betrieb.",
    law06:"Gesetz Nr. 06/L-031 über Druckgeräte – Genehmigungen zur Durchführung der technischen Inspektion von Hochrisikoanlagen",

  kadaja:"Kessel",
  kaldajaText:"Dampf- und Heißwasserkessel, Sicherheitsventile",

  RezervuaretMetalike:"Metalltanks",
  RezervuaretMetalikeText:"Für Flüssigkeiten–Gase, die mit einem Überdruck PS < 16 bar betrieben werden; TS < 200°C und 100 < V × PS < 4000",

  Tubacione:"Dampfleitungen",
  TubacionetextL:"6 bar < PS < 80 bar und Heißwasser – 110°C < TS < 450°C und 100 < D × PS",

  SistemeInstalime:"Gasinstallationen und -anlagen",
  SistemeInstalimeText:"Inspektion von Gasinstallationen und -anlagen",

  RezervuareFtohese: "Kühltanks",
  RezervuareFtoheseText:"Inspektion von Kühltanks",

  RezervuariGLN:"LPG-Tank (Flüssiggas)",
  RezervuariGLNText:"Verdampfer und LPG-Druckregler, Prüfung und Kalibrierung von Sicherheitsventilen",

  Gypa:"Rohre, Kessel und Kollektoren",
  GypaText:"Inspektion der Rohre, Kessel und Kollektoren",
  },
  sq: {

    
  project1_Titlee:"Relux-Llapnaselle (Prishtine)",
  project2_Titlee:"Fabrika 'Drena'-Skenderaj",
  project3_Titlee:"'Ballkan'- Suharekë",
  project4_Titlee:"'Fruteks'-Gelance,Suharekë",
  project5_Titlee:"UNOPS - Prishtinë, Ferizaj, Gjilan, Pejë, Mitrovicë",
  project6_Titlee:"Tubat e avulluesit Kosova B-Termokos",
      // Activities Section
    activities_title: "Aktivitetet tona",
    activities_intro: "Çfarë shërbimesh ofrojmë? 'KONTROLL TEST' sh.p.k. kryen inspektimin teknik të instalimeve me rrezikshmëri të lartë në përputhje me:",
    regulations_title: "Rregulloret dhe Ligjet",
    gln_systems: "Sistemet dhe Komponentët e GLN-së",
    // Albanian translations (same structure as above)
    home: "Kryefaqja",
    about: "Rreth Nesh",
    services: "Shërbimet",
    projects: "Projektet",
    contact: "Kontakt",
    hero_title: "Shërbime Profesionale të Inspektimit dhe Testimit",
    hero_subtitle: "Sigurimi i sigurisë dhe përputhshmërisë përmes inspektimit dhe testimit të ekspertëve",
    hero_cta: "Kërko Inspektim",
    about_title: "Rreth Nesh",
    about_heading: "SH.P.K. \"Kontroll Test\"",
    about_text1: "është një kompani që ofron shërbime testimi të materialeve Pa Shkatërrim në Kosovë, (NDT) me Metoden e Rentgenit (X-ray) RT2, Ultrazë UT2, Penetrantë PT2, Magnetofluks MT2, Kontrolla Vizuale PT2. Me personel të certifikuar sipas Standardit ISO EN 1712.",
    about_text2: "Me përvojë 18 vjeҫare në fushën e Inspektimeve të enëve nën Presion, të Akredituar nga DAK, sipas Standardit SK EN ISO/IEC 17020. Si Trup i Autorizuar për vlerësimin e konformitetit, përfshirë kalibrimin, certifikimin dhe kontrollet periodike të pajisjeve dhe instalimeve nën presion.",
    about_cta: "Shërbimet Tona",
    services_title: "Shërbimet Tona",
    service1_title: "Metodat Radiografike (RT)",
    service1_desc: "Metodat e testimit radiografik bazohen në rrezatimin e Saldimeve, Detaleve etj. me Rentgen (rrezet X), si në gypa, pllaka metalike etj.",
    service2_title: "Kontrollimi me Ultrazë (UT)",
    service2_desc: "Kontrollimi me ultrazë i lidhjeve të salduara në gypa, pllaka, boshte, akse etj. në trashësi të materialit deri në 5 m.",
    service3_title: "Matja e Trashësisë së Murit",
    service3_desc: "Trashësia e murit në gypa, pllaka etj. përcaktohet duke përdorur ultrazërin; kjo metodë përdoret shpesh në testimin e korrozionit të rezervuarëve dhe tubacioneve.",
    service4_title: "Inspektimi me Ngjyra Penetruese (PT)",
    service4_desc: "Kjo metodë bazohet në përdorimin e vetive kapilare të lëngjeve. Një defekt manifestohet nëpërmjet formimit të një imazhi tregues me kontrast të lartë optik.",
    service5_title: "Testimi i Pluhurit Magnetik (MT)",
    service5_desc: "Testimi magnetik përdor parimin e ndërprerjes së vijave të fushës magnetike, i cili vërehet sa herë që integriteti sipërfaqësor i një objekti të magnetizuar është i kompromentuar.",
    service6_title: "Inspektimi Vizual (VT)",
    service6_desc: "Metodat e inspektimit vizual bazohen në përdorimin e pajisjeve të ndryshme optike. Kjo rrit perceptimin dhe ndjeshmërinë e syrit të njeriut.",
    service7_title: "Metodat e Testimit të Rrjedhjeve",
    service7_desc: "Testimi i rrjedhjeve mundëson zbulimin e defekteve të vrimave dhe testimin e produkteve ose sistemeve nën parametra të lartë.",
    service8_title: "Testimi-Matja e Fortësisë",
    service8_desc: "Matja e fortësisë bazohet në rezultatet e bashkëveprimit mekanik midis dy trupave të ngurtë.",
    service9_title: "Analiza e Mikrostrukturës-Metalografia",
    service9_desc: "Kjo metodë përfshin vizualizimin dhe vlerësimin e mikrostrukturave të metaleve, gypave, pllakave etj.",
    how_it_works: "Si Punojmë",
    step1: "Na Kontaktoni",
    step1_desc: "Diskutoni me ekipin tonë rreth projektit tuaj, kërkesave teknike ose mundësive të bashkëpunimit.",
    step2: "Inspektim në Vend",
    step2_desc: "Realizohet një proces i plotë inxhinierik, që përfshin analizë të detajuar, testime dhe vlerësim teknik në vendpunës.",
    step3: "Raport i Detajuar",
    step3_desc: "Pajisjet dhe sistemi juaj merr certifikimin zyrtar për sigurinë dhe përputhshmërinë me standardet përkatëse.",
    step4: "Certifikim",
    step4_desc: "Certifikim i akredituar për përputhshmëri dhe siguri, në përputhje me kërkesat  dhe standardet ligjore.",
    projects_title: "Projektet e Realizuara",
    project1_desc: "Inspektimi dhe testimi i enëve nën presion",
    project2_desc: "Inspektimi i pajisjeve industriale",
    project3_desc: "Testimi dhe certifikimi i tubacioneve",
    project4_desc: "Testimi dhe certifikimi i pajisjeve",
    project5_desc: "Inspektimi i objektit shëndetësor",
    project6_desc: "Inspektimi i gypave të avullit",
    project7_Titlee:"Fabrika e betonit - Fushe Kruje",
    project7_desc: "Testimi i saldimeve me penetrant",
    contact_title: "Na Kontaktoni",
    contact_info: "Lidhuni me Ne",
    contact_address: "Lipjan, Kosovë",

    accreditation: "Certifikatat",
    accreditation_title: "Certifikata e Akreditimit",
    form_name: "Emri",
    form_email: "Email",
    form_phone: "Telefoni",
    form_message: "Mesazhi",
    form_submit: "Dërgo Mesazhin",
    footer_about: "Rreth Kontroll Test",
    footer_about_text: "Shërbime profesionale të testimit dhe inspektimit pa shkatërrim me më shumë se 18 vjet përvojë.",
    footer_services: "Shërbimet Tona",
    footer_contact: "Informacione Kontakti",
    footer_rights: "Kontroll Test Sh.P.K. Të gjitha të drejtat e rezervuara",
    rregullorjaMED:"Rregullorja (MZHE) nr. 02/2019 për kontrollin, shqyrtimin dhe vlerësimin e sigurisë teknike të pajisjeve nën presion në shfrytëzim.",
  law06:"Ligji nr. 06/L-031 për pajisjet nën presion – Autorizime për kryerjen e inspektimit teknik të instalimeve me rrezikshmëri të lartë.",
 
 
  kadaja:"Kaldaja",
  kaldajaText:"Kaldaja me avull dhe ujë të nxehtë, valvolat siguruese",

  RezervuaretMetalike:"Rezervuarët metalike",
  RezervuaretMetalikeText:"Për lëngje-gazra që operojnë me një presion të tepërt PS < 16 bar; TS < 200°C dhe 100 < V x PS < 4000",

  Tubacione:"Tubacione për avull",
  TubacionetextL:"6 bar < PS < 80 bar dhe ujë të nxehtë – 110°C < TS < 450°C dhe 100 < D x PS",

  SistemeInstalime:"Sisteme dhe instalime gazi",
  SistemeInstalimeText:"Inspektimi i sistemeve dhe instalimeve të gazit",

  RezervuareFtohese: "Rezervuare ftohëse",
  RezervuareFtoheseText:"Inspektimi i rezervuarëve ftohës",

  RezervuariGLN:"Rezervuari i GLN-së",
  RezervuariGLNText:"Avulluesi dhe Reduktori i GLN-së, Testimi dhe Bazhadarimi i Valvolave Siguruese",

  Gypa:"Gypa, Kaldaja dhe Kolektorë",
  GypaText:"Inspektimi i gypave, kaldajave dhe kolektorëve",
  

}
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');

  return (
 <main>
      <Header language={language} setLanguage={setLanguage} />
      <Hero translations={translations[language]} />
      <About translations={translations[language]} />
       <Activities translations={translations[language]} /> 
      <Services translations={translations[language]} />
     
      <Process translations={translations[language]} />
      <Projects translations={translations[language]} />
      <Accreditation translations={translations[language]} />
      <Contact translations={translations[language]} language={language} />
      <Footer translations={translations[language]} />
    </main>
  );
}