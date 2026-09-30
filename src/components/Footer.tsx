import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {year} Dmitry Moiseenko</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
