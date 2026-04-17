import { motion } from "motion/react";
import {
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
  CheckCircle2,
} from "lucide-react";
import { PHONE_NUMBER, COMPANY } from "@/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-20 right-20 -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock className="w-4 h-4" />
              Available 24/7 for Emergencies
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Fast, Reliable Plumbing Services in{" "}
              <span className="text-primary">Johannesburg</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Trusted, certified plumbers delivering high-quality workmanship
              with a strong focus on customer satisfaction and efficiency.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={COMPANY.phoneHref}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                <Phone className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:border-primary hover:text-primary transition-all">
                Request Emergency Service
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-slate-900">
                    {COMPANY.googleRating}
                  </span>
                </div>
                <span className="text-xs text-slate-500">Google Rating</span>
              </div>
              <div className="flex flex-col gap-1">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs text-slate-500 font-medium leading-tight">
                  Certified Plumbers
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-xs text-slate-500 font-medium leading-tight">
                  Rapid Response
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs text-slate-500 font-medium leading-tight">
                  Serving Joburg
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/signaturePlumbing_hero_image.webp"
                alt="Signature Plumbing Hero"
                className="w-full h-auto object-cover aspect-4/5"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-bold text-slate-900">Job Completed</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                "Excellent service. The technician was very friendly and
                delivered top-quality work."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
