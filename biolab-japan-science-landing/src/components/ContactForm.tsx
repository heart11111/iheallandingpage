"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        FALLBACK_EMAIL
          ? `送信機能が未設定です。お手数ですが ${FALLBACK_EMAIL} までメールでお問い合わせください。`
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
        setError(result.message || "送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      setStatus("error");
      setError("送信に失敗しました。ネットワーク環境をご確認のうえ、再度お試しください。");
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
          送信が完了しました。
        </strong>
        <p style={{ margin: 0, color: "rgba(226, 232, 240, 0.78)" }}>
          お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        お名前
        <input type="text" name="name" placeholder="山田 太郎" required />
      </label>
      <label>
        会社名
        <input type="text" name="company" placeholder="会社名 / ブランド名" />
      </label>
      <label>
        メール
        <input type="email" name="email" placeholder="name@company.jp" required />
      </label>
      <label>
        相談領域
        <select name="interest" defaultValue="機能性素材の調達">
          <option>機能性素材の調達</option>
          <option>ODM/OEM商品開発</option>
          <option>日本B2B流通</option>
          <option>iHEALブランド協業</option>
        </select>
      </label>
      <label className="wide">
        メッセージ
        <textarea name="message" rows={5} placeholder="検討中のカテゴリー、素材、発売時期などをご記入ください。" />
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
        {status === "submitting" ? "送信中..." : "お問い合わせを送信"}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
