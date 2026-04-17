import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Service } from "../types";

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => onSelect(service)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(service);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${service.title}`}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
      <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {service.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
      <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
        View Details <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
};
