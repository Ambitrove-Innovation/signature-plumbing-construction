import { Star } from "lucide-react";
import { testimonials } from "./data/testimonials";
import { ReviewCard } from "./components";
import { COMPANY } from "@/constants";

interface ReviewsPageProps {
  /** When true, renders inline (for homepage embedding) */
  inline?: boolean;
}

export const ReviewsPage = ({ inline = false }: ReviewsPageProps) => {
  const header = (
    <div className="text-center mb-16">
      {inline ? (
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          What Our Customers Say
        </h2>
      ) : (
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          What Our Customers Say
        </h1>
      )}
      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-slate-500 font-bold">
        {COMPANY.googleRating} Google Rating ({COMPANY.totalReviews} Reviews)
      </p>
    </div>
  );

  const grid = (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((review, idx) => (
        <ReviewCard key={review.name} review={review} index={idx} />
      ))}
    </div>
  );

  if (inline) {
    return (
      <section id="reviews" className="section-padding bg-slate-50">
        <div className="container-custom">
          {header}
          {grid}
        </div>
      </section>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="container-custom">
        {header}
        {grid}
      </div>
    </div>
  );
};
