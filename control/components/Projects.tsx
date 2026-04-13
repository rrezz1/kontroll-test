import { TranslationKeys } from '@/types';

interface ProjectsProps {
  translations: TranslationKeys;
}

export default function Projects({ translations }: ProjectsProps) {
  const projects = [
    {
      image: '/images/DisaNgaProjektet/5.png',
      title: translations.project5_Titlee,
      description: translations.project5_desc
    },
    {
      image: '/images/DisaNgaProjektet/6.png',
      title: translations.project6_Titlee,
      description: translations.project6_desc
    },
    {
      image: '/images/DisaNgaProjektet/7.png',
      title: translations.project7_Titlee,
      description: translations.project7_desc
    },
    {
      image: '/images/DisaNgaProjektet/1.png',
      title: translations.project1_Titlee,
      description: translations.project1_desc
    },
    {
      image: '/images/DisaNgaProjektet/2.png',
      title: translations.project2_Titlee,
      description: translations.project2_desc
    },
    {
      image: '/images/DisaNgaProjektet/3.png',
      title: translations.project3_Titlee,
      description: translations.project3_desc
    },
    {
      image: '/images/DisaNgaProjektet/4.png',
      title: translations.project4_Titlee,
      description: translations.project4_desc
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">{translations.projects_title}</h2>
        <div className="projects-grid">

          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}

          {/* And More Card */}
          <div className="project-card and-more-card">
            <div className="and-more-content">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{translations.and_more_title}</h3>
              <p>{translations.and_more_desc}</p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .and-more-card {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
          cursor: default;
        }

        .and-more-card:hover {
          transform: translateY(-5px);
        }

        .and-more-content {
          text-align: center;
          padding: 2rem;
          color: white;
        }

        .and-more-content h3 {
          color: white;
          font-size: 1.5rem;
          margin: 1rem 0 0.5rem;
        }

        .and-more-content p {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 0.5rem;
        }

        .dots span {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .dots span:nth-child(2) { animation-delay: 0.3s; }
        .dots span:nth-child(3) { animation-delay: 0.6s; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </section>
  );
}