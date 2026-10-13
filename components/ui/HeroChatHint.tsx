import { ArrowDownRight } from "lucide-react";

export function HeroChatHint({ className = "" }: { className?: string }) {
  return (
    <div className={`hero-chat-hint ${className}`}>
      <span>Хотите поговорить с ботом?</span>
      <strong>
        Нажмите на значок чата справа внизу
        <ArrowDownRight size={20} strokeWidth={2} aria-hidden="true" />
      </strong>
    </div>
  );
}
