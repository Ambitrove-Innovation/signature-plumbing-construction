import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import type { Service } from "../types";

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
  onRequest: (title: string) => void;
}

export const ServiceModal = ({
  service,
  onClose,
  onRequest,
}: ServiceModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    
    // Focus the modal for accessibility
    const timer = setTimeout(() => modalRef.current?.focus(), 100);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden focus:outline-none">
        <div className="bg-primary p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
            aria-label="Close modal">
            <X className="w-6 h-6" />
          </button>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <h2 id="modal-title" className="text-3xl font-black mb-2">{service.title}</h2>
          <p className="text-blue-100 font-medium">{service.desc}</p>
        </div>
        <div className="p-8">
          <h3 className="font-bold text-slate-900 mb-4 text-xl">
            Service Overview
          </h3>
          <p className="text-slate-600 leading-relaxed mb-8 text-lg">
            {service.details}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onRequest(service.title)}
              className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
              Request Service
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
