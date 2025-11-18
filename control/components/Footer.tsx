import { TranslationKeys } from '@/types';

interface FooterProps {
  translations: TranslationKeys;
}

export default function Footer({ translations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{translations.footer_about}</h3>
            <p>{translations.footer_about_text}</p>
            {/* <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div> */}
          </div>
          
          <div className="footer-section">
            <h3>{translations.footer_services}</h3>
            <a href="#services">{translations.service1_title}</a>
            <a href="#services">{translations.service2_title}</a>
            <a href="#services">{translations.service3_title}</a>
            <a href="#services">{translations.service4_title}</a>
          </div>
          
          <div className="footer-section">
            <h3>{translations.footer_contact}</h3>
            <p>
              
              <a href="mailto:lumi652000@yahoo.de" className="contact-link">
               <i className="fas fa-envelope"></i>{' '} lumi652000@yahoo.de
              </a>
            </p>
            <p>
              
              <a href="tel:+38348731363" className="contact-link">
               <i className="fas fa-phone"></i>{' '} +38348731363
              </a>
            </p>
            <p>
            
              <a href="tel:+38344275327" className="contact-link">
                  <i className="fas fa-phone"></i>{' '}+38344275327
              </a>
            </p>
            <p>
             
              <a href="tel:+38345976848" className="contact-link">
                 <i className="fas fa-phone"></i>{' '}+38345976848
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} <span>{translations.footer_rights}</span>.</p>
        </div>
      </div>
    </footer>
  );
}