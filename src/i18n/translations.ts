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
        "Frontend и backend разработчик. Создаю сайты, SaaS-продукты и рабочие инструменты для бизнеса — от интерфейса и AI-интеграций до доступа, данных и публикации в production.",
      stackLabel: "Стек",
      typesLabel: "Продукты",
      types: ['AI SaaS', 'CRM и внутренние инструменты', 'Автоматизация', 'Дашборды', 'AI-интеграции'],
    },
    work: {
      title: "Работы",
      subtitle: "SaaS-продукты, приложения и сайты",
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
    callscope: {
      featured: 'Главный проект · Full-stack SaaS',
      value: 'От разговоров — к понятным решениям для отдела продаж.',
      description: 'CallScope — веб-сервис для анализа звонков отдела продаж. Система транскрибирует разговор, оценивает работу менеджера, выявляет ошибки и возражения, определяет потенциал сделки и формирует рекомендации. Дополнительно доступна аналитика по менеджерам, периодам и рискам.',
      viewCase: 'Подробнее о проекте',
      accessNote: 'Демо доступно по ключу.', requestDemo: 'Запросить доступ',
      screens: 'Экраны CallScope', demoData: 'Реальный интерфейс · демонстрационные данные',
      enlarge: 'Открыть скриншот',
      capabilitiesTitle: 'Что умеет',
      capabilities: ['AI-анализ звонков', 'Оценка менеджеров', 'Возражения и ошибки', 'Risk / opportunity', 'Рекомендации', 'Аналитика команды', 'Лицензирование и роли'],
      engineering: 'Возобновляемая загрузка TUS, приватное аудиохранилище и серверная проверка доступа.',
      caseTitle: 'Разбор кейса: задача, решение и ценность',
      caseSections: [
        {title: 'Видеть качество продаж', text: 'Руководителю нужен не просто текст разговора, а понимание: что хотел клиент, как работал менеджер и был ли согласован следующий шаг.'},
        {title: 'Разбирать на фактах', text: 'Транскрипция разделена по спикерам. Анализ связывает критерии, ошибки, возражения и рекомендации с конкретными фрагментами разговора. Итог сохраняется в карточке звонка.'},
        {title: 'Управлять командой', text: 'Рейтинг менеджеров, частые ошибки и возражения, статусы лидов и сигналы риска помогают выбрать звонки для разбора и точки роста за 7, 30 или 90 дней.'},
      ],
      exampleLabel: 'Пример на демонстрационном диалоге', exampleTitle: 'Интерес есть. Следующий шаг — нет.',
      exampleQuote: '«В субботу работаем с девяти до восьми».',
      exampleText: 'Клиент хочет приехать на тест-драйв, но конкретное время не согласовано. CallScope отмечает риск и подтверждённую ошибку, снижает оценку соответствующего критерия и рекомендует зафиксировать дату и время. При этом не объявляет лид потерянным без доказательств.',
      flowTitle: 'Путь записи звонка', flow: ['Загрузить аудио', 'Получить транскрипт', 'Открыть анализ', 'Увидеть картину команды'],
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
        "Frontend and backend developer. I build websites, SaaS products and business tools — from interfaces and AI integrations to access control, data and production delivery.",
      stackLabel: "Stack",
      typesLabel: "Products",
      types: ['AI SaaS', 'CRM & internal tools', 'Automation', 'Dashboards', 'AI integrations'],
    },
    work: {
      title: "Work",
      subtitle: "SaaS products, applications and websites",
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
    callscope: {
      featured: 'Featured project · Full-stack SaaS',
      value: 'Turn sales conversations into clear decisions.',
      description: 'CallScope is a sales call intelligence platform. It transcribes conversations, evaluates manager performance, identifies mistakes and objections, assesses deal potential and provides recommendations. Team, period and risk analytics bring the individual calls together.',
      viewCase: 'View case', accessNote: 'Demo access requires a key.', requestDemo: 'Request access',
      screens: 'CallScope screens', demoData: 'Actual product interface · demo data',
      enlarge: 'View full-size',
      capabilitiesTitle: 'Capabilities',
      capabilities: ['AI call analysis', 'Manager evaluation', 'Objections & mistakes', 'Risk / opportunity', 'Recommendations', 'Team analytics', 'Licensing & roles'],
      engineering: 'Resumable TUS uploads, private audio storage and server-side access checks.',
      caseTitle: 'The case: challenge, solution and value',
      caseSections: [
        {title: 'See sales quality', text: 'A sales leader needs more than a transcript: what the customer wanted, how the manager handled the conversation and whether a next step was agreed.'},
        {title: 'Stay grounded in evidence', text: 'Speaker-separated transcripts support a structured analysis. Criteria, mistakes, objections and recommendations connect to specific conversation excerpts, with results saved in the call report.'},
        {title: 'Coach the team', text: 'Manager rankings, recurring mistakes and objections, lead statuses and deal risk signals help prioritize coaching over 7, 30 or 90 days.'},
      ],
      exampleLabel: 'Example using a demo conversation', exampleTitle: 'Interest is clear. The next step is not.',
      exampleQuote: '“On Saturday, we are open from nine to eight.”',
      exampleText: 'The customer wants a test drive, but no specific time is agreed. CallScope flags the risk and evidenced omission, penalizes the matching criterion and recommends confirming a date and time. It does not declare the lead lost without supporting evidence.',
      flowTitle: 'From recording to team insight', flow: ['Upload audio', 'Get the transcript', 'Review the analysis', 'See the team picture'],
    },
  },
} as const;

export type TranslationShape = typeof translations.ru;
