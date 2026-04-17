import { useState } from "react";
import { services } from "./data/services";
import { ServiceCard, ServiceModal } from "./components";
import { BookingModal } from "@/features/booking/components";
import type { Service } from "./types";

interface ServicesPageProps {
  /** When true, renders inline (no wrapper padding/heading) — for homepage embedding */
  inline?: boolean;
}

export const ServicesPage = ({ inline = false }: ServicesPageProps) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingPrefill, setBookingPrefill] = useState<string | null>(null);

  const handleRequestService = (title: string) => {
    setSelectedService(null);
    setBookingPrefill(title);
  };

  const content = (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            service={service}
            onSelect={setSelectedService}
          />
        ))}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onRequest={handleRequestService}
        />
      )}

      <BookingModal
        isOpen={!!bookingPrefill}
        serviceTitle={bookingPrefill}
        onClose={() => setBookingPrefill(null)}
      />
    </>
  );

  if (inline) {
    return (
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Comprehensive solutions for residential and commercial plumbing
              needs. Click on a service to learn more.
            </p>
          </div>
          {content}
        </div>
      </section>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Our Plumbing Services
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for residential and commercial plumbing
            needs. Click on a service to learn more.
          </p>
        </div>
        {content}
      </div>
    </div>
  );
};
