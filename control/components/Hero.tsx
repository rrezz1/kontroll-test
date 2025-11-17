import { TranslationKeys } from '@/types';

interface HeroProps {
  translations: TranslationKeys;
}

export default function Hero({ translations }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{translations.hero_title}</h1>
          <p>{translations.hero_subtitle}</p>
          <a href="#contact" className="btn">
            {translations.hero_cta}
          </a>
        </div>
      </div>
    </section>
  );
}