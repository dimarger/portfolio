import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const titleLines = t.hero.title.split("\n");

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="hero__kicker">{t.hero.kicker}</p>
        <h1 className="hero__title">
          {titleLines.map((line, i) => (
            <span key={i} className="hero__title-line">
              {line}
            </span>
          ))}
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <a href="#work" className="hero__cta">
          {t.hero.cta}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
