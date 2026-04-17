import { motion } from "motion/react";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface ReviewCardProps {
  review: Testimonial;
  index: number;
}

export const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col"
    >
      <div className="flex gap-1 text-yellow-500 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
      <p className="text-slate-600 italic leading-relaxed mb-6 grow">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <img
          src={review.image}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border border-slate-100"
        />
        <div className="flex flex-col">
          <span className="font-bold text-slate-900 leading-tight">
            {review.name}
          </span>
          <span className="text-xs text-slate-400">Verified Customer</span>
        </div>
      </div>
    </motion.div>
  );
};
