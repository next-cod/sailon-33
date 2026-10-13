"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { legalDetails } from "@/config/legal-details";

type CopyTarget = "email" | "phone";

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch {
      // Older browsers and restrictive permissions can still use the fallback below.
    }
  }

  const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    // The caller will display an error if copying is unavailable.
  } finally {
    textarea.remove();
    activeElement?.focus({ preventScroll: true });
  }
  return copied;
}

export function ContactPopover({ variant = "responsive", onOpen }: { variant?: "desktop" | "responsive"; onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<CopyTarget | null>(null);
  const [copyError, setCopyError] = useState<CopyTarget | null>(null);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
  }, []);

  const copyContact = async (target: CopyTarget, value: string) => {
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    const success = await copyToClipboard(value);
    setCopied(success ? target : null);
    setCopyError(success ? null : target);
    resetTimerRef.current = setTimeout(() => {
      setCopied(null);
      setCopyError(null);
    }, 2400);
  };

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="contact-popover" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className={variant === "desktop" ? "sticky-site-header__cta contact-popover__trigger" : "contact-popover__trigger contact-popover__trigger--responsive"}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          if (!open) {
            onOpen?.();
            if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
            setCopied(null);
            setCopyError(null);
          }
          setOpen(!open);
        }}
      >
        Связаться
      </button>
      {open && (
        <div className="contact-popover__panel" id={id}>
          <strong className="contact-popover__title">Как связаться</strong>
          <button type="button" className="contact-popover__item" onClick={() => void copyContact("email", legalDetails.email)} aria-label={`Скопировать почту ${legalDetails.email}`}>
            <Mail size={19} aria-hidden="true" />
            <span><small className={copied === "email" ? "is-copied" : copyError === "email" ? "is-error" : ""}>{copied === "email" ? "Скопировано" : copyError === "email" ? "Не удалось скопировать" : "Почта"}</small><strong>{legalDetails.email}</strong></span>
          </button>
          <button type="button" className="contact-popover__item" onClick={() => void copyContact("phone", legalDetails.phone)} aria-label={`Скопировать телефон ${legalDetails.phone}`}>
            <Phone size={19} aria-hidden="true" />
            <span><small className={copied === "phone" ? "is-copied" : copyError === "phone" ? "is-error" : ""}>{copied === "phone" ? "Скопировано" : copyError === "phone" ? "Не удалось скопировать" : "Телефон"}</small><strong>{legalDetails.phone}</strong></span>
          </button>
          <a href={legalDetails.telegramHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Send size={19} aria-hidden="true" />
            <span><small>Telegram</small><strong>{legalDetails.telegram}</strong></span>
          </a>
          <span className="sr-only" role="status">{copied ? `${copied === "email" ? "Почта" : "Телефон"} скопирован` : copyError ? "Не удалось скопировать. Попробуйте ещё раз." : ""}</span>
        </div>
      )}
    </div>
  );
}
