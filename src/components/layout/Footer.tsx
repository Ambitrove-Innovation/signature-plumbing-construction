import { Link } from "react-router";
import { Phone, MapPin, Clock, Wrench } from "lucide-react";
import { PHONE_NUMBER, COMPANY } from "@/constants";

export const Footer = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-slate-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">
                Signature <span className="text-primary">Plumbing</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Trusted, certified plumbers delivering high-quality workmanship
              with a strong focus on customer satisfaction and efficiency across
              Johannesburg.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={COMPANY.phoneHref}
                  className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Open 24 Hours</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3 text-slate-400">
              <Link
                to="/services"
                className="hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/#about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link
                to="/reviews"
                className="hover:text-white transition-colors">
                Testimonials
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="hover:text-white transition-colors">
                Emergency Call
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
