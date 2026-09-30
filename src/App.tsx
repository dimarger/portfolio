import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./i18n/LanguageContext";
import { ThemeContext, type Theme } from "./theme/ThemeContext";
import type { Lang } from "./i18n/translations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function getInitialLang(): Lang {
  const stored = localStorage.getItem("lang");
  if (stored === "ru" || stored === "en") return stored;
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("ru") ? "ru" : "en";
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const themeValue = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  const langValue = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <LanguageContext.Provider value={langValue}>
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
        <Footer />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
