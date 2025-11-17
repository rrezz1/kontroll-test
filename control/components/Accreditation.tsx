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
            <div className="fullscreen-controls">
              <button 
                className="download-btn"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = selectedImage;
                  link.download = 'accreditation-certificate.png';
                  link.click();
                }}
                aria-label="Download image"
              >
                <i className="fas fa-download"></i>
                Download
              </button>
              <button 
                className="close-btn"
                onClick={closeFullScreen}
              >
                <i className="fas fa-times"></i>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .accreditation-section {
          padding: 4rem 0;
          background: var(--light);
        }

        .accreditation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .accreditation-card {
          background: var(--white);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          position: relative;
        }

        .accreditation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .accreditation-image {
          height: 200px;
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
          transform: scale(1.05);
        }

        .view-full-btn {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(10px);
        }

        .accreditation-image:hover .view-full-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .view-full-btn:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-2px);
        }

        .accreditation-info {
          padding: 1.5rem;
          text-align: center;
        }

        .accreditation-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }

        .accreditation-info p {
          color: var(--gray);
          margin-bottom: 1rem;
        }

        /* Full Screen Modal Styles */
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
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .fullscreen-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .close-fullscreen-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          z-index: 10000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .close-fullscreen-btn:hover {
          background: white;
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        }

        .fullscreen-image {
          max-width: 100%;
          max-height: calc(100vh - 180px);
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: zoomIn 0.3s ease;
        }

        .fullscreen-controls {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
        }

        .download-btn,
        .close-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }

        .close-btn {
          background: #6b7280;
        }

        .download-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(30, 64, 175, 0.4);
        }

        .close-btn:hover {
          background: #4b5563;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(107, 114, 128, 0.4);
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Desktop specific styles */
        @media (min-width: 769px) {
          .fullscreen-controls {
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
          }

          .close-fullscreen-btn {
            top: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            font-size: 1.8rem;
          }

          .fullscreen-image {
            max-height: calc(100vh - 200px);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .accreditation-grid {
            grid-template-columns: 1fr;
          }

          .fullscreen-modal {
            padding: 1rem;
          }

          .fullscreen-modal-content {
            max-width: 95%;
            max-height: 95%;
          }

          .close-fullscreen-btn {
            top: 15px;
            right: 15px;
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }

          .fullscreen-controls {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            flex-direction: column;
            width: 100%;
            max-width: 200px;
          }

          .download-btn,
          .close-btn {
            justify-content: center;
            padding: 10px 20px;
          }

          .view-full-btn {
            opacity: 1;
            transform: translateY(0);
            background: rgba(0, 0, 0, 0.8);
          }
        }

        @media (max-width: 480px) {
          .accreditation-image {
            height: 180px;
          }

          .fullscreen-image {
            max-height: calc(100vh - 160px);
          }

          .view-full-btn {
            padding: 6px 10px;
            font-size: 0.7rem;
          }

          .close-fullscreen-btn {
            top: 10px;
            right: 10px;
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .fullscreen-controls {
            bottom: 15px;
          }
        }
      `}</style>
    </>
  );
}