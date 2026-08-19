import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquareText } from "lucide-react";

export function CTA({
  headline = "We'll sort the boring stuff.",
  subhead = "Free consultation, straight answers, no obligation. If automation isn't the right answer for your business, we'll tell you that too — we recommend what's right, not what bills.",
  primaryLabel = "Book a free consultation",
  primaryHref = "/contact",
}) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#070B14] via-[#0A0F1D] to-[#070B14] border-t border-[#1E2942] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#202C59]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[150px] bg-[#F4442E]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942]">
          <span className="h-2 w-2 rounded-full bg-[#F3A62A]"></span>
          <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
            Good'ai Australia · Perth WA
          </span>
        </div>

        <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-[#8E9AB4] leading-relaxed max-w-2xl mx-auto">
          {subhead}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F4442E] text-white font-semibold text-base hover:bg-[#d63823] active:scale-[0.98] transition-all shadow-lg shadow-[#F4442E]/25 hover:shadow-xl hover:shadow-[#F4442E]/35"
          >
            <span>{primaryLabel}</span>
            <ArrowRight size={18} />
          </Link>

          <a
            href="tel:+61877414191"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#12192C] hover:bg-[#1E2942] border border-[#1E2942] text-white font-medium text-base transition-all hover:border-[#F3A62A]/50 group"
          >
            <Phone size={18} className="text-[#F3A62A] group-hover:scale-110 transition-transform" />
            <span>Call 08 7741 4191 directly</span>
          </a>
        </div>

        <p className="text-xs font-ubuntu text-[#8E9AB4] pt-4">
          Human reply within 1 business day · Consultations booked within 5 working days
        </p>

      </div>
    </section>
  );
}
