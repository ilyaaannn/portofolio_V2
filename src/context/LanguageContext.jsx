import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "id";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "id" || saved === "en") return saved;
  return "id";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "id" ? "en" : "id"));

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
