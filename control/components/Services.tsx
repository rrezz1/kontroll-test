'use client';

import { TranslationKeys } from '@/types';
import { useState } from 'react';

interface ServicesProps {
  translations: TranslationKeys;
}

export default function Services({ translations }: ServicesProps) {
  const [showAll, setShowAll] = useState(false);

  const initialServices = [
    {
      icon: 'fas fa-x-ray',
      title: translations.service1_title,
      description: translations.service1_desc,
      images: [
        '/images/MetodatRadiografike/1.png',
        '/images/MetodatRadiografike/2.png'
      ]
    },
    {
      icon: 'fas fa-wave-square',
      title: translations.service2_title,
      description: translations.service2_desc,
      images: ['/images/KontrollimiUltraze/1.png']
    },
    {
      icon: 'fas fa-ruler-combined',
      title: translations.service3_title,
      description: translations.service3_desc,
      images: ['/images/MatjaTrashesisMurit/1.png']
    }
  ];

  const additionalServices = [
    {
      icon: 'fas fa-fill-drip',
      title: translations.service4_title,
      description: translations.service4_desc,
      images: ['/images/InspektimiMeNgjyra/1.png']
    },
    {
      icon: 'fas fa-magnet',
      title: translations.service5_title,
      description: translations.service5_desc,
      images: []
    },
    {
      icon: 'fas fa-eye',
      title: translations.service6_title,
      description: translations.service6_desc,
      images: []
    },
    {
      icon: 'fas fa-tint',
      title: translations.service7_title,
      description: translations.service7_desc,
      images: []
    },
    {
      icon: 'fas fa-weight-hanging',
      title: translations.service8_title,
      description: translations.service8_desc,
      images: ['/images/TestimiMatjesForsis/1.png']
    },
    {
      icon: 'fas fa-microscope',
      title: translations.service9_title,
      description: translations.service9_desc,
      images: []
    }
  ];

  const displayedServices = showAll ? [...initialServices, ...additionalServices] : initialServices;

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">{translations.services_title}</h2>
        <div className="services-grid">
          {displayedServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.images.length > 0 && (
                <div className="image-gallery">
                  {service.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="gallery-image">
                      <img src={image} alt={service.title} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(true)}
            >
              <i className="fas fa-chevron-down"></i>
              Show More ({additionalServices.length} more)
            </button>
          </div>
        )}

        {showAll && (
          <div className="show-less-container">
            <button 
              className="show-less-btn"
              onClick={() => setShowAll(false)}
            >
              <i className="fas fa-chevron-up"></i>
              Show Less
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .services {
          background: var(--light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: var(--white);
          border-radius: 10px;
          padding: 2rem;
          box-shadow: var(--shadow);
          transition: var(--transition);
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--dark);
        }

        .service-card p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .gallery-image {
          border-radius: 6px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .gallery-image img {
          width: 100%;
          height: 80px;
          object-fit: cover;
          display: block;
        }

        .show-more-container,
        .show-less-container {
          text-align: center;
          margin-top: 3rem;
        }

        .show-more-btn,
        .show-less-btn {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }

        .show-more-btn:hover,
        .show-less-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }

        .show-less-btn {
          background: var(--primary);
          color: white;
        }

        .show-less-btn:hover {
          background: var(--primary-dark);
        }

        /* Animation for showing more services */
        .services-grid {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 1.5rem;
          }

          .show-more-btn,
          .show-less-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .service-card {
            padding: 1rem;
          }

          .service-icon {
            font-size: 2.5rem;
          }

          .show-more-btn,
          .show-less-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}