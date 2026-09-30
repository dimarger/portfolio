import { createContext, useContext } from "react";
import type { Lang } from "./translations";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
