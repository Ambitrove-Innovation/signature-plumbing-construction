export const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Professional Plumbing You Can Rely On
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              At{" "}
              <span className="font-bold text-slate-900">
                Signature Plumbing and Heating
              </span>
              , every plumber is fully certified through the Plumbing
              Certification Board and undergoes quarterly refresher training to
              stay up to date with industry standards.
            </p>
            <p>
              We are committed to delivering fast, efficient, and high-quality
              plumbing solutions, ensuring every job is completed to the highest
              standard — no matter the size.
            </p>
            <p className="text-primary font-bold italic">
              👉 Your satisfaction is our top priority, and we take pride in
              solving plumbing issues quickly and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
