export type Lang = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      work: "Работы",
      about: "Обо мне",
      contact: "Контакты",
    },
    hero: {
      kicker: "Веб-разработчик",
      title: "Дмитрий\nМоисеенко",
      subtitle:
        "Создаю сайты и веб-приложения — от интерфейса до сервера.",
      cta: "Смотреть работы",
    },
    about: {
      title: "Обо мне",
      text:
        "Frontend и backend разработчик. Работаю с JavaScript, TypeScript, React и CSS. Проектирую и создаю сайты и лендинги — аккуратно, быстро и без лишнего.",
      stackLabel: "Стек",
    },
    work: {
      title: "Работы",
      subtitle: "Избранные сайты и лендинги",
      visit: "Открыть",
      openSite: "Открыть сайт",
      comingSoon: "Скоро здесь появятся проекты",
    },
    contact: {
      title: "Контакты",
      text: "Открыт для новых проектов и предложений.",
      cta: "Написать в Telegram",
    },
    footer: {
      rights: "Все права защищены.",
    },
    themeToggle: {
      light: "Светлая",
      dark: "Тёмная",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      kicker: "Web Developer",
      title: "Dmitry\nMoiseenko",
      subtitle:
        "I build websites and web applications — from interface to server.",
      cta: "View work",
    },
    about: {
      title: "About",
      text:
        "Frontend and backend developer. I work with JavaScript, TypeScript, React and CSS. I design and build websites and landing pages — clean, fast, and without excess.",
      stackLabel: "Stack",
    },
    work: {
      title: "Work",
      subtitle: "Selected websites and landing pages",
      visit: "Visit",
      openSite: "Open website",
      comingSoon: "Projects are coming soon",
    },
    contact: {
      title: "Contact",
      text: "Open for new projects and proposals.",
      cta: "Message on Telegram",
    },
    footer: {
      rights: "All rights reserved.",
    },
    themeToggle: {
      light: "Light",
      dark: "Dark",
    },
  },
} as const;

export type TranslationShape = typeof translations.ru;
