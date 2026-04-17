import { Phone } from "lucide-react";
import { PHONE_NUMBER, COMPANY } from "@/constants";

export const EmergencyCTA = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="container-custom relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Need a Plumber Right Now?
        </h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          We're available 24 hours a day, ready to solve your plumbing problems
          quickly and efficiently.
        </p>
        <a
          href={COMPANY.phoneHref}
          className="inline-flex items-center gap-4 bg-white text-primary px-10 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl">
          <Phone className="w-8 h-8" />
          {PHONE_NUMBER}
        </a>
      </div>
    </section>
  );
};
