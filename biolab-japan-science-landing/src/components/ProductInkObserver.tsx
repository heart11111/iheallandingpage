"use client";

import { useDevLanguage } from "@/components/DevLanguageProvider";
import { renderEmphasized } from "@/lib/productInk";
import { useInkReveal } from "@/lib/useReveal";

/** Observes highlighter/underline marks on product pages and draws them on scroll. */
export function ProductInkObserver() {
  const { language } = useDevLanguage();
  useInkReveal(language);
  return null;
}

export function InkCopy({ ja, ko }: { ja: string; ko: string }) {
  const { language } = useDevLanguage();
  return <>{renderEmphasized(language === "ko" ? ko : ja)}</>;
}
