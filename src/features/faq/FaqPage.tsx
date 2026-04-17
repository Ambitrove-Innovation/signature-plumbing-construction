import { useState } from "react";
import { faqs } from "./data/faqs";
import { FaqItem } from "./components";

interface FaqPageProps {
  /** When true, renders inline (for homepage embedding) */
  inline?: boolean;
}

export const FaqPage = ({ inline = false }: FaqPageProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const header = (
    <div className="text-center mb-16">
      {inline ? (
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Frequently Asked Questions
        </h2>
      ) : (
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Frequently Asked Questions
        </h1>
      )}
      <p className="text-slate-500 max-w-2xl mx-auto">
        Find answers to common questions about our plumbing and heating
        services.
      </p>
    </div>
  );

  const accordion = (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => (
        <FaqItem
          key={idx}
          faq={faq}
          isActive={activeIndex === idx}
          onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );

  if (inline) {
    return (
      <section id="faq" className="section-padding bg-white">
        <div className="container-custom">
          {header}
          {accordion}
        </div>
      </section>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container-custom">
        {header}
        {accordion}
      </div>
    </div>
  );
};
