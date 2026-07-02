"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useDevLanguage } from "@/components/DevLanguageProvider";

// Web3Forms lets a fully static site receive form submissions without a backend.
// The access key is safe to expose in client code (it only routes to the
// destination inbox configured on web3forms.com). Set it as the
// NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY env / repo variable.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const FALLBACK_EMAIL = process.env.NEXT_PUBLIC_CONTACT_FALLBACK_EMAIL;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const { language } = useDevLanguage();
  const isKorean = language === "ko";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        FALLBACK_EMAIL
          ? isKorean
            ? `전송 기능이 아직 설정되지 않았습니다. ${FALLBACK_EMAIL} 로 이메일 문의를 보내주세요.`
            : `送信機能が未設定です。お手数ですが ${FALLBACK_EMAIL} までメールでお問い合わせください。`
          : isKorean
            ? "전송 기능은 현재 준비 중입니다. 수신 이메일 주소를 설정하면 이 폼에서 직접 전송할 수 있습니다."
            : "送信機能は現在準備中です。受信用メールアドレスを設定すると、このフォームから直接送信できます。",
      );
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const payload = {
        access_key: ACCESS_KEY,
        subject: "BIOLAB Japan 提携相談",
        from_name: "BIOLAB Japan Landing Page",
        ...Object.fromEntries(new FormData(form)),
      };
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || (isKorean ? "전송에 실패했습니다. 잠시 후 다시 시도해 주세요." : "送信に失敗しました。時間をおいて再度お試しください。"));
      }
    } catch {
      setStatus("error");
      setError(isKorean ? "전송에 실패했습니다. 네트워크 환경을 확인한 뒤 다시 시도해 주세요." : "送信に失敗しました。ネットワーク環境をご確認のうえ、再度お試しください。");
    }
  };

  if (status === "success") {
    return (
      <div
        className="contact-form"
        role="status"
        style={{ display: "block", textAlign: "center", color: "white" }}
      >
        <strong style={{ display: "block", fontSize: "1.1rem", marginBottom: "8px" }}>
          {isKorean ? "문의가 접수되었습니다." : "送信が完了しました。"}
        </strong>
        <p style={{ margin: 0, color: "rgba(226, 232, 240, 0.78)" }}>
          {isKorean ? "문의해 주셔서 감사합니다. 담당자가 확인 후 연락드리겠습니다." : "お問い合わせありがとうございます。担当者より折り返しご連絡いたします。"}
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" key={language} onSubmit={handleSubmit}>
      <label>
        {isKorean ? "이름" : "お名前"}
        <input type="text" name="name" placeholder={isKorean ? "홍길동" : "山田 太郎"} required />
      </label>
      <label>
        {isKorean ? "회사명" : "会社名"}
        <input type="text" name="company" placeholder={isKorean ? "회사명 / 브랜드명" : "会社名 / ブランド名"} />
      </label>
      <label>
        {isKorean ? "이메일" : "メール"}
        <input type="email" name="email" placeholder="name@company.jp" required />
      </label>
      <label>
        {isKorean ? "상담 영역" : "相談領域"}
        <select name="interest" defaultValue={isKorean ? "기능성 식품 소재 사업" : "機能性素材の調達"}>
          <option>{isKorean ? "기능성 식품 소재 사업" : "機能性素材の調達"}</option>
          <option>{isKorean ? "ODM/OEM 상품 개발" : "ODM/OEM商品開発"}</option>
          <option>{isKorean ? "일본 B2B 유통" : "日本B2B流通"}</option>
          <option>{isKorean ? "iHEAL 브랜드 사용에 대한 상품 로열티 사업" : "iHEALブランド協業"}</option>
        </select>
      </label>
      <label className="wide">
        {isKorean ? "메시지" : "メッセージ"}
        <textarea
          name="message"
          rows={5}
          placeholder={isKorean ? "검토 중인 카테고리, 소재, 출시 시기 등을 적어주세요." : "検討中のカテゴリー、素材、発売時期などをご記入ください。"}
        />
      </label>

      {/* Honeypot field — bots fill it in, humans never see it. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      {status === "error" ? (
        <p
          role="alert"
          style={{ gridColumn: "1 / -1", margin: 0, color: "#ffb4c0", fontSize: "0.86rem", fontWeight: 700 }}
        >
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (isKorean ? "전송 중..." : "送信中...") : isKorean ? "문의 보내기" : "お問い合わせを送信"}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
