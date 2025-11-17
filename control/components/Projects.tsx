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
        </div>
      </div>
    </section>
  );
}