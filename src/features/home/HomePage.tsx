import {
  Hero,
  About,
  WhyChooseUs,
  ServiceAreas,
  EmergencyCTA,
} from "./components";
import { ServicesPage } from "@/features/services/ServicesPage";
import { ReviewsPage } from "@/features/reviews/ReviewsPage";
import { FaqPage } from "@/features/faq/FaqPage";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesPage inline />
      <WhyChooseUs />
      <ServiceAreas />
      <ReviewsPage inline />
      <FaqPage inline />
      <EmergencyCTA />
    </>
  );
};
