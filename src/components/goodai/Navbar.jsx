"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0F1D]/90 backdrop-blur-md border-b border-[#1E2942] py-3 shadow-lg shadow-black/30"
          : "bg-gradient-to-b from-[#0A0F1D]/95 via-[#0A0F1D]/70 to-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-fraunces font-bold text-2xl tracking-tight text-white transition-colors group-hover:text-[#FFF0D0]">
            Good<span className="text-[#F4442E]">'</span>ai
          </span>
          <span className="hidden sm:inline-block font-ubuntu text-[11px] uppercase tracking-[0.16em] text-[#8E9AB4] border-l border-[#1E2942] pl-3 py-0.5">
            Business automations, sorted.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#12192C]/80 border border-[#1E2942] rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#202C59] text-white shadow-sm"
                    : "text-[#8E9AB4] hover:text-white hover:bg-white/5"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+61877414191"
            className="flex items-center gap-2 text-xs font-ubuntu tracking-wider text-[#8E9AB4] hover:text-[#F3A62A] transition-colors py-1 px-2 rounded"
            title="Hear Darling Good answer"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Phone size={13} className="text-[#F3A62A]" />
            <span>08 7741 4191</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4442E] text-white text-sm font-semibold hover:bg-[#d63823] active:scale-[0.98] transition-all shadow-md shadow-[#F4442E]/20"
          >
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+61877414191"
            className="p-2 rounded-lg bg-[#12192C] border border-[#1E2942] text-[#F3A62A]"
            aria-label="Call Good'ai"
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#12192C] border border-[#1E2942] text-[#8E9AB4] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F4442E]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1D] border-b border-[#1E2942] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                    isActive
                      ? "bg-[#202C59] text-white"
                      : "text-[#8E9AB4] hover:text-white hover:bg-[#12192C]"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#1E2942] flex flex-col gap-3">
            <a
              href="tel:+61877414191"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#12192C] border border-[#1E2942] text-sm text-[#F3A62A] font-ubuntu font-medium"
            >
              <Phone size={15} />
              <span>Call 08 7741 4191 (Demo Line)</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#F4442E] text-white font-semibold text-sm shadow-md"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
