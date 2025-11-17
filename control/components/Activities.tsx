import { TranslationKeys } from '@/types';

interface ActivitiesProps {
  translations: TranslationKeys;
}

export default function Activities({ translations }: ActivitiesProps) {
  const activities = [
    {
      title: 'asd',
      description: "Kaldaja me avull dhe ujë të nxehtë, valvolat siguruese"
    },
    {
      title: "Rezervuarët metalike",
      description: "Për lëngje-gazra që operojnë me një presion të tepërt PS < 16 bar; TS < 200°C dhe 100 < V x PS < 4000"
    },
    {
      title: "Tubacione për avull",
      description: "6 bar < PS < 80 bar dhe ujë të nxehtë – 110°C < TS < 450°C dhe 100 < D x PS"
    },
    {
      title: "Sisteme dhe instalime gazi",
      description: "Inspektimi i sistemeve dhe instalimeve të gazit"
    },
    {
      title: "Rezervuare ftohëse",
      description: "Inspektimi i rezervuarëve ftohës"
    },
    {
      title: "Rezervuari i GLN-së",
      description: "Avulluesi dhe Reduktori i GLN-së, Testimi dhe Bazhadarimi i Valvolave Siguruese"
    },
    {
      title: "Gypa, Kaldaja dhe Kolektorë",
      description: "Inspektimi i gypave, kaldajave dhe kolektorëve"
    }
  ];

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
          {/* {activities.map((activity, index) => (
            <div key={index} className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            </div>
          ))} */}
           <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.kadaja}</h3>
                <p>{translations.kaldajaText}</p>
              </div>
            </div>

            <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.RezervuaretMetalike}</h3>
                <p>{translations.RezervuaretMetalikeText}</p>
              </div>
            </div>


            <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.Tubacione}</h3>
                <p>{translations.RezervuaretMetalikeText}</p>
              </div>
            </div>


            <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.SistemeInstalime}</h3>
                <p>{translations.SistemeInstalimeText}</p>
              </div>
            </div>


              <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.RezervuareFtohese}</h3>
                <p>{translations.RezervuareFtoheseText}</p>
              </div>
            </div>


              <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.RezervuariGLN}</h3>
                <p>{translations.RezervuariGLNText}</p>
              </div>
            </div>



            <div  className="activity-card">
              <div className="activity-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="activity-content">
                <h3>{translations.Gypa}</h3>
                <p>{translations.GypaText}</p>
              </div>
            </div>
        </div>
        

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
        }

        .activity-card {
          background: var(--white);
          border-radius: 10px;
          padding: 2rem;
          box-shadow: var(--shadow);
          transition: var(--transition);
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          border: 1px solid var(--light-gray);
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

        .activity-content h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--dark);
        }

        .activity-content p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .gallery-image {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }

        .gallery-image:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .gallery-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }

          .activity-card {
            padding: 1.5rem;
            flex-direction: column;
            text-align: center;
          }

          .activity-icon {
            align-self: center;
          }

          .regulations {
            padding: 1.5rem;
          }

          .regulations li {
            font-size: 0.9rem;
          }

          .image-gallery {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }

          .activity-card {
            padding: 1rem;
          }

          .activity-icon {
            font-size: 2rem;
            padding: 0.75rem;
          }

          .gallery-image img {
            height: 150px;
          }
        }
      `}</style>
    </section>
  );
}