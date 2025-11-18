'use client';

import { TranslationKeys } from '@/types';
import { useState, useEffect } from 'react';

interface AccreditationProps {
  translations: TranslationKeys;
}

interface Accreditation {
  image: string;
  title: string;
  description: string;
}

export default function Accreditation({ translations }: AccreditationProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const accreditations: Accreditation[] = [
    {
      image: '/images/akreditimi.png',
      title: 'DAK Accreditation',
      description: 'Accredited by DAK according to Standard SK EN ISO/IEC 17020'
    },
    // Add more accreditations here if needed
  ];

  const openFullScreen = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsFullScreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
    document.body.style.overflow = 'unset';
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeFullScreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
        closeFullScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen]);

  return (
    <>
      <section className="accreditation-section" id="accreditation">
        <div className="container">
          <h2 className="section-title">{translations.accreditation_title}</h2>
          <div className="accreditation-grid">
            {accreditations.map((accreditation, index) => (
              <div key={index} className="accreditation-card">
                <div className="accreditation-image">
                  <img 
                    src={accreditation.image} 
                    alt={accreditation.title} 
                    onClick={() => openFullScreen(accreditation.image)}
                  />
                  <button 
                    className="view-full-btn"
                    onClick={() => openFullScreen(accreditation.image)}
                    aria-label="View full size"
                  >
                    <i className="fas fa-expand"></i>
                    View Full
                  </button>
                </div>
                <div className="accreditation-info">
                  <h3>{accreditation.title}</h3>
                  <p>{accreditation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isFullScreen && selectedImage && (
        <div 
          className="fullscreen-modal"
          onClick={handleBackdropClick}
        >
          <button 
            className="close-fullscreen-btn"
            onClick={closeFullScreen}
            aria-label="Close full screen"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="fullscreen-modal-content">
            <img 
              src={selectedImage} 
              alt="Full screen accreditation" 
              className="fullscreen-image"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .accreditation-section {
          padding: 3rem 0;
          background: var(--light);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          color: var(--dark);
        }

        .accreditation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .accreditation-card {
          background: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }

        .accreditation-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .accreditation-image {
          height: 220px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .accreditation-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .accreditation-image:hover img {
          transform: scale(1.03);
        }

        .view-full-btn {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(5px);
        }

        .accreditation-image:hover .view-full-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .view-full-btn:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .accreditation-info {
          padding: 1.25rem;
          text-align: center;
        }

        .accreditation-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
          font-weight: 600;
        }

        .accreditation-info p {
          color: var(--gray);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        /* Full Screen Modal Styles - Compact */
        .fullscreen-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }

        .fullscreen-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-fullscreen-btn {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          z-index: 10000;
        }

        .close-fullscreen-btn:hover {
          background: white;
          transform: scale(1.05);
        }

        .fullscreen-image {
          max-width: 100%;
          max-height: calc(100vh - 40px);
          object-fit: contain;
          border-radius: 4px;
          animation: zoomIn 0.2s ease;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Desktop specific compact styles */
        @media (min-width: 769px) {
          .accreditation-section {
            padding: 2.5rem 0;
          }

          .accreditation-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.25rem;
          }

          .accreditation-image {
            height: 200px;
          }

          .fullscreen-modal {
            padding: 0.5rem;
          }

          .close-fullscreen-btn {
            top: 15px;
            right: 15px;
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }

          .fullscreen-image {
            max-height: calc(100vh - 30px);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .accreditation-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .view-full-btn {
            opacity: 1;
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.8);
          }
        }

        @media (max-width: 480px) {
          .accreditation-section {
            padding: 2rem 0;
          }

          .accreditation-image {
            height: 180px;
          }

          .accreditation-info {
            padding: 1rem;
          }

          .fullscreen-modal {
            padding: 0.5rem;
          }

          .close-fullscreen-btn {
            top: 10px;
            right: 10px;
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}