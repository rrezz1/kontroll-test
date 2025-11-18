'use client';

import { TranslationKeys } from '@/types';
import { useState } from 'react';

interface ActivitiesProps {
  translations: TranslationKeys;
}

export default function Activities({ translations }: ActivitiesProps) {
  const [showAll, setShowAll] = useState(false);

  const initialActivities = [
    {
      icon: 'fas fa-cogs',
      title: translations.kadaja,
      description: translations.kaldajaText
    },
    {
      icon: 'fas fa-cogs',
      title: translations.RezervuaretMetalike,
      description: translations.RezervuaretMetalikeText
    },
    {
      icon: 'fas fa-cogs',
      title: translations.Tubacione,
      description: translations.TubacionetextL
    }
  ];

  const additionalActivities = [
    {
      icon: 'fas fa-cogs',
      title: translations.SistemeInstalime,
      description: translations.SistemeInstalimeText
    },
    {
      icon: 'fas fa-cogs',
      title: translations.RezervuareFtohese,
      description: translations.RezervuareFtoheseText
    },
    {
      icon: 'fas fa-cogs',
      title: translations.RezervuariGLN,
      description: translations.RezervuariGLNText
    },
    {
      icon: 'fas fa-cogs',
      title: translations.Gypa,
      description: translations.GypaText
    }
  ];

  const displayedActivities = showAll ? [...initialActivities, ...additionalActivities] : initialActivities;

  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <h2 className="section-title">{translations.activities_title}</h2>
        
        <div className="activities-intro">
          <p className="intro-text">{translations.activities_intro}</p>
          <div className="regulations">
            <p><strong>{translations.regulations_title}:</strong></p>
            <ul>
              <li>{translations.rregullorjaMED}</li>
              <li>{translations.law06}</li>
            </ul>
          </div>
        </div>

        <div className="activities-grid">
          {displayedActivities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">
                <i className={activity.icon}></i>
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Buttons */}
        {!showAll && additionalActivities.length > 0 && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(true)}
            >
              <i className="fas fa-chevron-down"></i>
              Show More  ({additionalActivities.length} more)
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
<br />
        {/* GLN Systems Images */}
        <div className="gln-section">
          <h3 className="gln-title">{translations.gln_systems}</h3>
          <div className="image-gallery">
            <div className="gallery-image">
              <img src="/images/RezervarFtohese/1.png" alt="Rezervuar Ftohës 1" />
            </div>
            <div className="gallery-image">
              <img src="/images/RezervarFtohese/2.png" alt="Rezervuar Ftohës 2" />
            </div>
            <div className="gallery-image">
              <img src="/images/RezervarFtohese/3.png" alt="Rezervuar Ftohës 3" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .activities-section {
          padding: 5rem 0;
          background: var(--white);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          color: var(--dark);
        }

        .activities-intro {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .intro-text {
          font-size: 1.2rem;
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .regulations {
          background: var(--light);
          padding: 2rem;
          border-radius: 10px;
          border-left: 4px solid var(--primary);
          text-align: left;
        }

        .regulations p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--dark);
        }

        .regulations ul {
          list-style: none;
          padding: 0;
        }

        .regulations li {
          padding: 0.5rem 0;
          color: var(--gray);
          line-height: 1.6;
          position: relative;
          padding-left: 1.5rem;
        }

        .regulations li:before {
          content: '•';
          color: var(--primary);
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          align-items: stretch;
        }

        .activity-card {
          background: var(--white);
          border-radius: 10px;
          padding: 2.5rem 2rem;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          border: 1px solid var(--light-gray);
          height: 100%;
          text-align: center;
          min-height: 220px;
          animation: fadeInUp 0.5s ease-out;
        }

        .activity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .activity-icon {
          font-size: 2.5rem;
          color: var(--primary);
          background: var(--light);
          padding: 1rem;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .activity-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .activity-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--dark);
          line-height: 1.3;
        }

        .activity-content p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        /* Show More/Less Buttons */
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

        /* GLN Section - Square Images (Same for all devices) */
        .gln-section {
          text-align: center;
          padding: 3rem 0 0;
          border-top: 1px solid var(--light-gray);
        }

        .gln-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--dark);
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* Gjithmonë 3 kolona */
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .gallery-image {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          aspect-ratio: 1 / 1; /* Kjo e bën imazhin katror */
          position: relative;
        }

        .gallery-image:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Adjust gap and size for smaller screens but keep 3 columns */
        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }

          .activity-card {
            padding: 2rem 1.5rem;
            min-height: 200px;
          }

          .regulations {
            padding: 1.5rem;
          }

          .regulations li {
            font-size: 0.9rem;
          }

          .image-gallery {
            gap: 1rem; /* Më pak hapësirë midis imazheve në mobile */
          }

          .show-more-btn,
          .show-less-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }

          .activity-card {
            padding: 1.5rem 1rem;
            min-height: 180px;
          }

          .activity-icon {
            font-size: 2rem;
            padding: 0.75rem;
          }

          .image-gallery {
            gap: 0.8rem; /* Edhe më pak hapësirë në telefona të vegjël */
          }

          .show-more-btn,
          .show-less-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }

        /* For very small screens, reduce padding but keep 3 columns */
        @media (max-width: 360px) {
          .container {
            padding: 0 0.5rem;
          }

          .image-gallery {
            gap: 0.5rem;
          }

          .gln-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}