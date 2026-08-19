import * as React from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, Shield, Clock, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#070B14] via-[#0A0F1D] to-[#0D1424]">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#202C59]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#F3A62A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942] shadow-inner">
            <span className="h-2 w-2 rounded-full bg-[#F4442E] animate-pulse"></span>
            <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
              GOOD'AI · PERTH, WESTERN AUSTRALIA
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Stop working.<br />
            <span className="text-[#FFF0D0] italic font-normal">Start living.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-[#8E9AB4] leading-relaxed max-w-2xl mx-auto">
            We build the boring stuff so your week gets shorter — real automations in the tools you already use, fixed price, delivered online. Built in Perth. Works everywhere. Knock off early.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#F4442E] text-white font-semibold text-base hover:bg-[#d63823] active:scale-[0.98] transition-all shadow-lg shadow-[#F4442E]/25 hover:shadow-xl hover:shadow-[#F4442E]/35"
            >
              <span>Book a free consultation</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+61877414191"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#12192C] hover:bg-[#1E2942] border border-[#1E2942] text-white font-medium text-base transition-all hover:border-[#F3A62A]/50 group"
            >
              <Phone size={18} className="text-[#F3A62A] group-hover:scale-110 transition-transform" />
              <span>Hear Darling Good answer</span>
            </a>
          </div>

          {/* Value Micro-Pillars */}
          <div className="pt-8 border-t border-[#1E2942]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="p-3 rounded-lg bg-[#12192C]/40 border border-[#1E2942]/40">
              <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A]">
                <CheckCircle2 size={13} />
                <span>Fixed Price</span>
              </div>
              <p className="text-xs text-[#8E9AB4] mt-1 font-medium">Published upfront</p>
            </div>

            <div className="p-3 rounded-lg bg-[#12192C]/40 border border-[#1E2942]/40">
              <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-[#FFF0D0]">
                <Shield size={13} />
                <span>Zero Lock-in</span>
              </div>
              <p className="text-xs text-[#8E9AB4] mt-1 font-medium">You own the code</p>
            </div>

            <div className="p-3 rounded-lg bg-[#12192C]/40 border border-[#1E2942]/40">
              <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-emerald-400">
                <Clock size={13} />
                <span>Fast Go-Live</span>
              </div>
              <p className="text-xs text-[#8E9AB4] mt-1 font-medium">Monitored rollout</p>
            </div>

            <div className="p-3 rounded-lg bg-[#12192C]/40 border border-[#1E2942]/40">
              <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4]">
                <Sparkles size={13} />
                <span>Sovereign</span>
              </div>
              <p className="text-xs text-[#8E9AB4] mt-1 font-medium">AU data residency</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
