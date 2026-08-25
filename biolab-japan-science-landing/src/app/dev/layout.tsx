import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "개발 미리보기 | BIOLAB Japan",
  description: "라이브 반영 전 초안을 확인하는 내부용 개발 페이지입니다.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DevLayout({ children }: { children: ReactNode }) {
  return children;
}
