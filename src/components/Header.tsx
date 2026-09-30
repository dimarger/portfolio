import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import { translations } from "../i18n/translations";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          DM
        </a>
        <nav className="site-header__nav">
          <a href="#work">{t.nav.work}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="site-header__controls">
          <button
            className="control-btn"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            aria-label="Toggle language"
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
          <button
            className="control-btn control-btn--icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
