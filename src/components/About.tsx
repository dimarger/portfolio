import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const stack = [
  "JavaScript",
  "TypeScript",
  "React",
  "CSS",
  "HTML",
  "Node.js",
  "Next.js",
  "Supabase",
  "Cloudflare Workers",
];

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="about__text">{t.about.text}</p>
        <div className="about__stack">
          <span className="about__stack-label">{t.about.stackLabel}</span>
          <ul className="about__stack-list">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="about__stack about__types">
          <span className="about__stack-label">{t.about.typesLabel}</span>
          <ul className="about__stack-list">{t.about.types.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
