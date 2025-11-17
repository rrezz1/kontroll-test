import { TranslationKeys } from '@/types';

interface ServicesProps {
  translations: TranslationKeys;
}

export default function Services({ translations }: ServicesProps) {
  const services = [
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
    },
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

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">{translations.services_title}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
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
      </div>
    </section>
  );
}