import { TranslationKeys } from '@/types';

interface ProcessProps {
  translations: TranslationKeys;
}

export default function Process({ translations }: ProcessProps) {
  const steps = [
    {
      number: "1",
      title: translations.step1,
      description: translations.step1_desc
    },
    {
      number: "2",
      title: translations.step2,
      description: translations.step2_desc
    },
    {
      number: "3",
      title: translations.step3,
      description: translations.step3_desc
    },
    {
      number: "4",
      title: translations.step4,
      description: translations.step4_desc
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <h2 className="section-title">{translations.how_it_works}</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}