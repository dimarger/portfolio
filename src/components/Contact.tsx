import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const TELEGRAM_URL = "https://t.me/maybewritee";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact__text">{t.contact.text}</p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__cta"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.036 15.803 8.68 20.6c.492 0 .705-.21.962-.464l2.31-2.21 4.788 3.5c.878.484 1.505.23 1.723-.812l3.123-14.62.001-.001c.256-1.19-.432-1.655-1.288-1.336L1.86 9.86c-1.158.45-1.14 1.096-.197 1.388l4.664 1.455L17.6 6.24c.5-.328.957-.147.582.18" />
          </svg>
          {t.contact.cta}
        </a>
      </div>
    </section>
  );
}
