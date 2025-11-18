'use client';

import { TranslationKeys } from '@/types';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  translations: TranslationKeys;
  language: string;
}

export default function Contact({ translations, language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // Get current time for the email template
      const now = new Date();
      const time = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Send email using EmailJS with template variables
      const result = await emailjs.send(
        'service_vbszfoi',
        'template_9w2udwy',
        {
          name: formData.name, // For the template header
          from_name: formData.name, // For the detailed info
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          time: time, // Current timestamp
          to_email: 'lumi652000@yahoo.de'
        },
        'GlcYkQqUWz7Tf3u0p' // Your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        
        const successMessage = language === 'en' 
          ? 'Thank you for your message! We will contact you soon.' 
          : language === 'de' 
          ? 'Vielen Dank für Ihre Nachricht! Wir werden Sie bald kontaktieren.'
          : 'Faleminderit për mesazhin tuaj! Do t\'ju kontaktojmë së shpejti.';
        
        alert(successMessage);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      const errorMessage = language === 'en'
        ? 'Sorry, there was an error sending your message. Please try again later or contact us directly.'
        : language === 'de'
        ? 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt.'
        : 'Na vjen keq, ka ndodhur një gabim gjatë dërgimit të mesazhit tuaj. Ju lutemi provoni përsëri më vonë ose na kontaktoni direkt.';
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">{translations.contact_title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{translations.contact_info}</h3>
            <div className="contact-details">
              <div className="contact-item">
  <div className="contact-icon">
    <i className="fas fa-envelope"></i>
  </div>
  <div>
    <p>
      <a href="mailto:lumi652000@yahoo.de" className="contact-link">
        lumi652000@yahoo.de
      </a>
    </p>
  </div>
</div>

<div className="contact-item">
  <div className="contact-icon">
    <i className="fas fa-phone"></i>
  </div>
  <div>
    <p>
      <a href="tel:+38348731363" className="contact-link">
        +38348731363
      </a>
    </p>
    <p>
      <a href="tel:+38344275327" className="contact-link">
        +38344275327
      </a>
    </p>
    <p>
      <a href="tel:+38345976848" className="contact-link">
        +38345976848
      </a>
    </p>
  </div>
</div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p>{translations.contact_address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{translations.form_name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder={language === 'en' ? 'Your full name' : 
                              language === 'de' ? 'Ihr vollständiger Name' : 
                              'Emri juaj i plotë'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{translations.form_email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder={language === 'en' ? 'your.email@example.com' : 
                              language === 'de' ? 'ihre.email@beispiel.de' : 
                              'emaili.juaj@shembull.com'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{translations.form_phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  placeholder={language === 'en' ? 'Your phone number (optional)' : 
                              language === 'de' ? 'Ihre Telefonnummer (optional)' : 
                              'Numri juaj i telefonit (opsional)'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{translations.form_message}</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  placeholder={language === 'en' ? 'Tell us about your project or inquiry...' : 
                              language === 'de' ? 'Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage...' : 
                              'Na tregoni për projektin tuaj ose kërkesën...'}
                  rows={6}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn ${isLoading ? 'btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    {language === 'en' ? 'Sending...' : 
                     language === 'de' ? 'Wird gesendet...' : 
                     'Duke dërguar...'}
                  </>
                ) : (
                  translations.form_submit
                )}
              </button>

              {/* Status indicators */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  <i className="fas fa-check-circle"></i>
                  {language === 'en' ? 'Message sent successfully!' :
                   language === 'de' ? 'Nachricht erfolgreich gesendet!' :
                   'Mesazhi u dërgua me sukses!'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status error">
                  <i className="fas fa-exclamation-circle"></i>
                  {language === 'en' ? 'Failed to send message. Please try again.' :
                   language === 'de' ? 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' :
                   'Dërgimi i mesazhit dështoi. Ju lutemi provoni përsëri.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
      .contact-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #007bff; /* or your preferred hover color */
  text-decoration: underline;
}
        .contact {
          background: var(--light);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .contact-icon {
          font-size: 1.2rem;
          color: var(--primary);
          margin-right: 1rem;
          margin-top: 0.2rem;
        }

        .contact-form {
          background: var(--white);
          padding: 2rem;
          border-radius: 10px;
          box-shadow: var(--shadow);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--dark);
        }

        .form-control {
          width: 100%;
          padding: 12px;
          border: 1px solid var(--light-gray);
          border-radius: 6px;
          font-family: inherit;
          transition: var(--transition);
          background: var(--white);
          font-size: 14px;
        }

        .form-control:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .form-control:disabled {
          background: var(--light);
          cursor: not-allowed;
          opacity: 0.7;
        }

        .form-control::placeholder {
          color: #9ca3af;
          font-size: 13px;
        }

        textarea.form-control {
          min-height: 150px;
          resize: vertical;
          line-height: 1.5;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--primary), #3b82f6);
          color: var(--white);
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          text-align: center;
          box-shadow: var(--shadow);
          width: 100%;
          justify-content: center;
          font-size: 16px;
        }

        .btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(30, 64, 175, 0.3);
        }

        .btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .btn-loading {
          background: linear-gradient(135deg, #6b7280, #9ca3af);
        }

        .form-status {
          margin-top: 1rem;
          padding: 12px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 14px;
        }

        .form-status.success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .form-status.error {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1rem;
          }

          .btn {
            padding: 10px 20px;
          }

          .form-control {
            padding: 10px;
          }
        }
      `}</style>
    </section>
  );
}