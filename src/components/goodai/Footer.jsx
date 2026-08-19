import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#070B14] border-t border-[#1E2942] pt-16 pb-12 text-[#8E9AB4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2942]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-fraunces font-bold text-3xl tracking-tight text-white">
                Good<span className="text-[#F4442E]">'</span>ai
              </span>
            </Link>
            <p className="font-fraunces italic text-lg text-[#FFF0D0]">
              Business automations, sorted.
            </p>
            <p className="text-sm leading-relaxed text-[#8E9AB4] max-w-sm">
              We build the boring stuff so your week gets shorter — real automations in the tools you already use, fixed price, delivered online. Built in Perth. Works everywhere. Knock off early.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A]">
                <ShieldCheck size={13} className="text-[#F3A62A]" />
                ISO/IEC 42001-Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                AU Data Sovereign
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <p className="font-ubuntu text-xs uppercase tracking-[0.16em] text-white font-bold">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About & The Doctrine
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Offerings Summary */}
          <div className="space-y-4">
            <p className="font-ubuntu text-xs uppercase tracking-[0.16em] text-white font-bold">
              Core Offerings
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#voice-agents" className="hover:text-white transition-colors">
                  Voice Agents ($149–$499/mo)
                </Link>
              </li>
              <li>
                <Link href="/services#agentic-knowledge-operations" className="hover:text-white transition-colors">
                  Agentic Knowledge Ops ($199/mo)
                </Link>
              </li>
              <li>
                <Link href="/services#ai-readiness-audit" className="hover:text-white transition-colors">
                  AI Readiness Audit
                </Link>
              </li>
              <li>
                <Link href="/services#custom-agent-development" className="hover:text-white transition-colors">
                  Custom Agent Builds
                </Link>
              </li>
              <li>
                <Link href="/services#commercial-terms" className="hover:text-white transition-colors">
                  40-40-20 Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <p className="font-ubuntu text-xs uppercase tracking-[0.16em] text-white font-bold">
              Perth Office & Demo
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#F3A62A] mt-0.5 shrink-0" />
                <a href="mailto:info@goodai.au" className="hover:text-white transition-colors">
                  info@goodai.au
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#F3A62A] mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+61877414191" className="hover:text-white font-medium text-white transition-colors block">
                    +61 8 7741 4191
                  </a>
                  <span className="text-xs text-[#8E9AB4]">AUS: 08 7741 4191</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#F3A62A] mt-0.5 shrink-0" />
                <span>Perth, Western Australia<br />Delivered online, worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9AB4]">
          <p>© {new Date().getFullYear()} Good'ai Australia. All rights reserved. Founded in Perth, WA.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#8E9AB4]">Human reply ≤ 1 business day</span>
            <span className="text-[#1E2942]">|</span>
            <Link href="/about#compliance" className="hover:text-white transition-colors">
              Compliance Triad 2026
            </Link>
            <span className="text-[#1E2942]">|</span>
            <Link href="/contact" className="text-[#F3A62A] hover:underline">
              Book a free consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
