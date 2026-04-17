import { MapPin } from "lucide-react";
import { COMPANY } from "@/constants";

const areas = ["Johannesburg CBD", "Roodekrans", "Surrounding Areas"];

export const ServiceAreas = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-slate-100 rounded-3xl h-[400px] w-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-20px_20px" />
              </div>
              <div className="text-center relative z-10 p-8">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Based in Johannesburg
                </h3>
                <p className="text-slate-500">{COMPANY.address}</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Areas We Serve
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We provide rapid response plumbing services across Johannesburg
              and surrounding areas.
            </p>
            <div className="space-y-4">
              {areas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xl font-bold text-slate-800">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {area}
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Our Location
                  </h4>
                  <p className="text-slate-600">{COMPANY.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
