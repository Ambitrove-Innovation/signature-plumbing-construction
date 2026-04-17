import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Certified & Skilled Plumbers",
  "Fast Response Times (Emergency Ready)",
  "Honest Pricing & Free Quotes",
  "Professional & Friendly Service",
  "Clean, Neat Workmanship",
  "Reliable & Efficient Solutions",
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
              Why Customers Trust Us
            </h2>
            <div className="grid gap-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <div className="bg-primary p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/images/geyser_image.webp"
                alt="Geyser Installation and Trust"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-primary p-8 rounded-2xl shadow-2xl">
              <div className="text-4xl font-extrabold mb-1">100%</div>
              <div className="text-sm font-medium opacity-90 uppercase tracking-widest">
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
