"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export type DevLanguage = "ja" | "ko";

const STORAGE_KEY = "biolabjp-dev-language";
const CHANGE_EVENT = "biolabjp-dev-language-change";

function readLanguage(): DevLanguage {
  if (typeof window === "undefined") return "ja";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "ko" || stored === "ja" ? stored : "ja";
}

function applyDocumentLanguage(language: DevLanguage) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language === "ko" ? "ko" : "ja";
  }
}

export function DevLanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyDocumentLanguage(readLanguage());
  }, []);

  return <>{children}</>;
}

export function useDevLanguage() {
  const [language, setLanguageState] = useState<DevLanguage>("ja");

  useEffect(() => {
    const syncLanguage = () => {
      const nextLanguage = readLanguage();
      setLanguageState(nextLanguage);
      applyDocumentLanguage(nextLanguage);
    };

    syncLanguage();
    window.addEventListener("storage", syncLanguage);
    window.addEventListener(CHANGE_EVENT, syncLanguage);
    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener(CHANGE_EVENT, syncLanguage);
    };
  }, []);

  const setLanguage = (nextLanguage: DevLanguage) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
    applyDocumentLanguage(nextLanguage);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return { language, setLanguage };
}

export function LocalizedText({ ja, ko }: { ja: ReactNode; ko: ReactNode }) {
  const { language } = useDevLanguage();
  return <>{language === "ko" ? ko : ja}</>;
}
