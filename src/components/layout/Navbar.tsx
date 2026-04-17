import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Phone, Wrench, Menu, X } from "lucide-react";
import { PHONE_NUMBER, COMPANY } from "@/constants";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/#about" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
] as const;

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to: string) => {
    setIsMobileMenuOpen(false);

    // Handle hash links for same-page scrolling
    if (to.startsWith("/#")) {
      const hash = to.substring(1);
      if (location.pathname === "/") {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (link: (typeof navLinks)[number], className: string) => {
    if (link.to.startsWith("/#")) {
      // Hash link — use <a> on homepage, <Link> otherwise
      if (location.pathname === "/") {
        return (
          <a
            key={link.label}
            href={link.to.substring(1)}
            onClick={() => handleNavClick(link.to)}
            className={className}>
            {link.label}
          </a>
        );
      }
      return (
        <Link
          key={link.label}
          to={link.to}
          onClick={() => handleNavClick(link.to)}
          className={className}>
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.to}
        onClick={() => handleNavClick(link.to)}
        className={className}>
        {link.label}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg shadow-lg shadow-blue-200">
            <Wrench className="text-white w-6 h-6" />
          </div>
          <span
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white md:text-slate-900"
            }`}>
            Signature <span className="text-primary">Plumbing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            renderLink(
              link,
              `text-sm font-semibold transition-colors ${
                isScrolled
                  ? "text-slate-600 hover:text-primary"
                  : "text-white md:text-slate-600 hover:text-primary"
              }`,
            ),
          )}
          <a
            href={COMPANY.phoneHref}
            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:scale-105 active:scale-95">
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true">
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 right-0 shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4">
          {navLinks.map((link) =>
            renderLink(link, "text-lg font-bold text-slate-800"),
          )}
          <a
            href={COMPANY.phoneHref}
            className="bg-primary text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-200">
            <Phone className="w-5 h-5" />
            Call Now: {PHONE_NUMBER}
          </a>
        </motion.div>
      )}
    </nav>
  );
};
