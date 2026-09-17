import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal><SectionHeading eyebrow="FAQ" title="Что обычно важно уточнить до теста"/></Reveal>
        <div className="border-t border-[var(--line)]">
          {faqItems.map(([question, answer], index) => <Reveal key={question} delay={index * .025}><details className="group border-b border-[var(--line)] py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-lg font-bold"><span>{question}</span><Plus size={20} className="shrink-0 transition-transform group-open:rotate-45"/></summary><p className="muted max-w-2xl pb-6 pr-8 leading-relaxed">{answer}</p></details></Reveal>)}
        </div>
      </div>
    </section>
  );
}
