export type Language = 'en' | 'de' | 'sq';

export interface TranslationKeys {
  // Navigation
  home: string;
  about: string;
  services: string;
  accreditation: string;
  contact: string;
  
  // Hero Section
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  
  // About Section
  about_title: string;
  about_heading: string;
  about_text1: string;
  about_text2: string;
  about_cta: string;
  
  // Services Section
  services_title: string;
  service1_title: string;
  service1_desc: string;
  service2_title: string;
  service2_desc: string;
  service3_title: string;
  service3_desc: string;
  service4_title: string;
  service4_desc: string;
  service5_title: string;
  service5_desc: string;
  service6_title: string;
  service6_desc: string;
  service7_title: string;
  service7_desc: string;
  service8_title: string;
  service8_desc: string;
  service9_title: string;
  service9_desc: string;
  
  // Accreditation
  accreditation_title: string;
  
  // Contact Section
  contact_title: string;
  contact_info: string;
  contact_address: string;
  form_name: string;
  form_email: string;
  form_phone: string;
  form_message: string;
  form_submit: string;
  
  // Footer
  footer_about: string;
  footer_about_text: string;
  footer_services: string;
  footer_contact: string;
  footer_rights: string;
activities_title:string;
activities_intro: string;
regulations_title:string;
projects_title:string;
gln_systems:string;
projects:string;

  //rregulloret
  rregullorjaMED : string;
  law06:string;

  //sherbimet
  kadaja:string;
  kaldajaText:string;

  RezervuaretMetalike:string;
  RezervuaretMetalikeText:string;

  Tubacione:string;
  TubacionetextL:string;

  SistemeInstalime:string;
  SistemeInstalimeText:string;

  RezervuareFtohese: string;
  RezervuareFtoheseText:string;

  RezervuariGLN:string;
  RezervuariGLNText:string;

  Gypa:string;
  GypaText:string;


 and_more_title:string;
 and_more_desc : string;

  //how it works
  how_it_works:string;



  //other


  project1_Titlee: string;
  project2_Titlee: string;
  project3_Titlee: string;
  project4_Titlee: string;
  project5_Titlee: string;
  project6_Titlee: string;
 project7_Titlee: string;
  project1_desc: string;
  project2_desc: string;
  project3_desc: string;
  project4_desc: string;
  project5_desc: string;
  project6_desc: string;
 project7_desc: string;

  step1:string;
step2:string;
   step2_desc: string;
    step3: string;
    step3_desc:string; 
    step4:string; 
    step4_desc: string;
  step1_desc:string;
}

export type Translations = {
  [key in Language]: TranslationKeys;
};