import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { FaqItem as FaqItemType } from "@/types";

interface FaqItemProps {
  faq: FaqItemType;
  isActive: boolean;
  onToggle: () => void;
}

export const FaqItem = ({ faq, isActive, onToggle }: FaqItemProps) => {
  const faqId = `faq-${faq.question.toLowerCase().replace(/\s+/g, "-")}`;
  const contentId = `${faqId}-content`;

  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button
        id={faqId}
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={contentId}
        className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className="bg-white p-1 rounded-full shadow-sm shrink-0 ml-4"
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </button>
      <motion.div
        id={contentId}
        role="region"
        aria-labelledby={faqId}
        initial={false}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        className="overflow-hidden bg-white"
      >
        <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-50">
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};
