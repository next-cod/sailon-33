"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { legalDetails } from "@/config/legal-details";

export function ContactPopover({ variant = "responsive", onOpen }: { variant?: "desktop" | "responsive"; onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          if (!open) onOpen?.();
          setOpen(!open);
        }}
      >
        Связаться
      </button>
      {open && (
        <div className="contact-popover__panel" id={id}>
          <strong className="contact-popover__title">Как связаться</strong>
          <a href={legalDetails.emailHref} onClick={() => setOpen(false)}>
            <Mail size={19} aria-hidden="true" />
            <span><small>Почта</small><strong>{legalDetails.email}</strong></span>
          </a>
          <a href={legalDetails.phoneHref} onClick={() => setOpen(false)}>
            <Phone size={19} aria-hidden="true" />
            <span><small>Телефон</small><strong>{legalDetails.phone}</strong></span>
          </a>
          <a href={legalDetails.telegramHref} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <Send size={19} aria-hidden="true" />
            <span><small>Telegram</small><strong>{legalDetails.telegram}</strong></span>
          </a>
        </div>
      )}
    </div>
  );
}
