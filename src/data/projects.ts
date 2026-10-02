import aureliaDental from "../assets/projects/aurelia-dental.png";
import northHouse from "../assets/projects/north-house.png";
import beautyFlowCrm from "../assets/projects/beautyflow-crm.png";
import leadPilotDesktop from "../assets/projects/leadpilot-desktop.png";

export interface Project {
  id: string;
  title: string;
  description: { ru: string; en: string };
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "leadpilot-desktop",
    title: "LeadPilot AI",
    description: {
      ru: "Десктоп-приложение для фрилансеров: подключается к Telegram, само анализирует вакансии в чатах и каналах и отправляет отклики.",
      en: "Desktop app for freelancers: connects to Telegram, analyzes job posts in chats and channels, and sends responses automatically.",
    },
    image: leadPilotDesktop,
    tags: ["React", "TypeScript", "Electron"],
    liveUrl: "https://dimarger.github.io/leadpilot-desktop/",
    githubUrl: "https://github.com/dimarger/leadpilot-desktop",
  },
  {
    id: "beautyflow-crm",
    title: "BeautyFlow CRM",
    description: {
      ru: "SaaS CRM для салонов красоты: онлайн-запись, календарь мастеров, биллинг и кабинет владельца.",
      en: "SaaS CRM for beauty salons: online booking, staff calendar, billing and owner dashboard.",
    },
    image: beautyFlowCrm,
    tags: ["Next.js", "NestJS", "TypeScript"],
    liveUrl: "https://dimarger.github.io/beautyflow-crm/",
    githubUrl: "https://github.com/dimarger/beautyflow-crm",
  },
  {
    id: "aurelia-dental",
    title: "Aurelia Dental",
    description: {
      ru: "Сайт стоматологической клиники с акцентом на комфорт и доверие пациентов.",
      en: "Website for a dental clinic focused on patient comfort and trust.",
    },
    image: aureliaDental,
    tags: ["React", "Vite"],
    liveUrl: "https://dimarger.github.io/aurelia-dental/",
    githubUrl: "https://github.com/dimarger/aurelia-dental",
  },
  {
    id: "north-house",
    title: "North & House",
    description: {
      ru: "Премиальный сайт для агентства недвижимости с каталогом объектов и фильтрами.",
      en: "Premium real estate agency website with a property catalog and filters.",
    },
    image: northHouse,
    tags: ["React", "Vite"],
    liveUrl: "https://dimarger.github.io/north-house/",
    githubUrl: "https://github.com/dimarger/north-house",
  },
];
