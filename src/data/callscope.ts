import overview from '../assets/projects/callscope/overview.jpg';
import calls from '../assets/projects/callscope/calls.jpg';
import detail from '../assets/projects/callscope/call-detail.jpg';
import analytics from '../assets/projects/callscope/analytics.jpg';

export const callScope = {
  title: 'CallScope',
  subtitle: 'AI Sales Intelligence SaaS',
  liveUrl: 'https://site-creator-vinext-starter.dimarger.workers.dev',
  stack: ['TypeScript', 'React', 'Next.js', 'Supabase', 'Cloudflare Workers', 'Deepgram', 'Groq'],
  screens: [
    {
      id: 'overview', image: overview,
      label: { ru: 'Обзор продаж', en: 'Sales overview' },
      caption: { ru: 'Качество команды, статусы лидов и сигналы сделок — в одном рабочем пространстве.', en: 'Team performance, lead statuses and deal signals in one workspace.' },
      alt: { ru: 'Интерфейс CallScope: обзор продаж, оценки менеджеров и распределение лидов на демонстрационных данных', en: 'CallScope interface: sales overview, manager scores and lead distribution using demo data' },
    },
    {
      id: 'calls', image: calls,
      label: { ru: 'Работа со звонками', en: 'Call workspace' },
      caption: { ru: 'Записи, фильтры, статус обработки и результаты анализа в едином списке.', en: 'Recordings, filters, processing status and analysis results in one list.' },
      alt: { ru: 'Интерфейс CallScope: список звонков с менеджерами, оценками и статусами лидов', en: 'CallScope interface: calls with managers, scores and lead statuses' },
    },
    {
      id: 'detail', image: detail,
      label: { ru: 'Разбор разговора', en: 'Conversation report' },
      caption: { ru: 'От общей оценки — к конкретной ошибке, цитате и следующему действию.', en: 'From an overall score to a specific mistake, supporting quote and next action.' },
      alt: { ru: 'Интерфейс CallScope: анализ звонка, риск сделки, критерии и подтверждённая ошибка менеджера', en: 'CallScope interface: call analysis, deal risk, criteria and an evidenced manager mistake' },
    },
    {
      id: 'analytics', image: analytics,
      label: { ru: 'Аналитика команды', en: 'Team analytics' },
      caption: { ru: 'Рейтинг менеджеров, частые ошибки и возражения, риски и возможности за 7 / 30 / 90 дней.', en: 'Manager leaderboard, recurring mistakes and objections, risks and opportunities over 7 / 30 / 90 days.' },
      alt: { ru: 'Интерфейс CallScope: аналитика по периодам, рейтинг менеджеров и риски сделок', en: 'CallScope interface: period analytics, manager leaderboard and deal risks' },
    },
  ],
} as const;
