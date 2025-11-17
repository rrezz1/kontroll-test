import { TranslationKeys } from '@/types';

interface AboutProps {
  translations: TranslationKeys;
}

export default function About({ translations }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">{translations.about_title}</h2>
        <div className="about-content">
          <div className="about-text">
            <h2>{translations.about_heading}</h2>
            <p>{translations.about_text1}</p>
            <p>{translations.about_text2}</p>
            <a href="#services" className="btn btn-secondary">
              {translations.about_cta}
            </a>
          </div>
          <div className="about-image">
            <img src="/images/logo.png" alt="About Kontroll Test" />
          </div>
        </div>
      </div>
    </section>
  );
}