import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { projects } from "../data/projects";

export default function Work() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 className="section-title">{t.work.title}</h2>
        <p className="work__subtitle">{t.work.subtitle}</p>

        {projects.length === 0 ? (
          <p className="work__empty">{t.work.comingSoon}</p>
        ) : (
          <div className="work__grid">
            {projects.map((project) => (
              <div key={project.id} className="work-card">
                <div className="work-card__media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="work-card__body">
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__desc">
                    {project.description[lang]}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <ul className="work-card__tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
