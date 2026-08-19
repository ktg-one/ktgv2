import * as React from "react";
import Link from "next/link";
import {
  Building2,
  Palette,
  Utensils,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Shield,
} from "lucide-react";
import { CTA } from "@/components/goodai/CTA";

export const metadata = {
  title: "Case Studies — Good'ai",
  description: "Four engagements, four sizes: voice + directory automation for a Perth finance firm, brand identity architecture, hospitality operational assessment, and a full audit-to-deliverable build.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies — Good'ai",
    description: "Four engagements, four sizes: voice + directory automation for a Perth finance firm, brand identity architecture, hospitality operational assessment, and a full audit-to-deliverable build.",
    url: "https://goodai.au/case-studies",
    siteName: "Good'ai Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942]">
            <span className="h-2 w-2 rounded-full bg-[#F3A62A]"></span>
            <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
              Documented Client Work
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Case Studies
          </h1>

          <p className="text-lg sm:text-xl text-[#FFF0D0] leading-relaxed">
            Real engagements, honestly told. Where a client's confidentiality requires it, the client is anonymised — every metric below is a documented fact of the engagement, never a projection retro-fitted as a result.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CASE 1: FINANCIAL-SERVICES FIRM */}
        {/* ========================================================================= */}
        <section id="case-1" className="mb-24 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E2942] pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#202C59] text-[#F3A62A]">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                    Case 01 · Voice & Directory Automation
                  </span>
                  <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
                    Financial-Services Firm (Anonymised Perth Client)
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-ubuntu text-[#8E9AB4]">
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Sector: Financial Services</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Location: Perth, WA</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Type: Voice + PBX Sync</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Problem</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                A Perth financial-services firm ran a multi-line phone operation across staff, offices and mobile workflows. Customer and staff directories lived in Google Workspace; the phone system didn't know they existed. Users were manually re-keying contacts, call routing was inconsistent, and the firm needed a voice/persona for outbound survey calls that could actually hold a conversation.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Solution</h3>
              <ul className="space-y-3 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>3CX v20 (Update 5) × Google Workspace integration:</strong> User directory synchronised one-way into 3CX phonebooks, personal contacts synced nightly, with caller-ID digit matching tuned so on-screen names resolve before the phone stops ringing.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Admin-governed security model:</strong> Integration client registered under Google domain-wide delegation with a scoped read-only set of OAuth permissions — directory, contacts, calendar — so the phone system had exactly the access it needed and nothing more.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Outbound voice agent (Gwilym):</strong> A British-persona agent built on Twilio SIP endpoints for outbound batch feedback calls, parent/child legs into the PBX, working alongside the firm's existing call flows.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-emerald-400">The Impact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942]">
                  <p className="text-xs text-[#8E9AB4] font-ubuntu uppercase tracking-wider">Caller Identification</p>
                  <p className="text-sm font-semibold text-white mt-1">Staff names resolved on every inbound and internal call.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942]">
                  <p className="text-xs text-[#8E9AB4] font-ubuntu uppercase tracking-wider">Single System of Record</p>
                  <p className="text-sm font-semibold text-white mt-1">Google Workspace synced overnight to every handset.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942]">
                  <p className="text-xs text-[#8E9AB4] font-ubuntu uppercase tracking-wider">Survey Consistency</p>
                  <p className="text-sm font-semibold text-white mt-1">Outbound survey calls structured, scripted, and recorded.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CASE 2: LEEMONARC ACCOUNTING */}
        {/* ========================================================================= */}
        <section id="case-2" className="mb-24 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E2942] pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#202C59] text-[#FFF0D0]">
                  <Palette size={24} />
                </div>
                <div>
                  <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#FFF0D0] font-bold">
                    Case 02 · Brand Identity Architecture
                  </span>
                  <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
                    LeeMonarc Accounting — Brand Identity Architecture
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-ubuntu text-[#8E9AB4]">
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Sector: Accounting Services</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Type: Brand System Build</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Problem</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                LeeMonarc Accounting needed a brand that could carry a professional-services firm with distinct personality — not another cookie-cutter accounting logo, but a visual identity system with direction and staying power.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Solution</h3>
              <ul className="space-y-3 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#FFF0D0] shrink-0 mt-0.5" />
                  <span><strong>Four explored design directions:</strong> Refined Heritage, Modern Luxe, Dark Monarch, Future Monarch — so the brand decision was made on options with real character, not a single generic attempt.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#FFF0D0] shrink-0 mt-0.5" />
                  <span><strong>A selected logo asset:</strong> Delivered as a production-ready vector mark across digital, print, and signage configurations.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#FFF0D0] shrink-0 mt-0.5" />
                  <span><strong>A full brand specification document:</strong> The rulebook (BRANDKITS spec) that keeps the identity coherent across every future use.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-emerald-400">The Impact</h3>
              <p className="text-sm text-[#8E9AB4] leading-relaxed">
                LeeMonarc received a complete, documented identity system — the logo, the directions, and the spec that governs how the brand is applied — consolidated in one place for their team and any future agency to work from. One-off scope, delivered as a defined product.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CASE 3: SUN ISLAND BALI */}
        {/* ========================================================================= */}
        <section id="case-3" className="mb-24 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E2942] pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#202C59] text-emerald-400">
                  <Utensils size={24} />
                </div>
                <div>
                  <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-emerald-400 font-bold">
                    Case 03 · Operational Opportunity Assessment
                  </span>
                  <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
                    Sun Island Bali — Hospitality Operational Assessment
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-ubuntu text-[#8E9AB4]">
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Sector: Hospitality</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Location: Bali, Indonesia</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Engagement: Sep–Oct 2025</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Problem</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                A hospitality operator running guest-facing operations needed to see where automation could genuinely improve operations — bookings, guest service, back-of-house workflow — without betting on the wrong tools.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Solution</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                A structured opportunity assessment delivered as documented reports: current-state analysis of operations, identification of where manual workflow was absorbing staff hours, and prioritised opportunities mapped against effort and impact — so the operator could see which changes would pay for themselves first.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-emerald-400">The Impact</h3>
              <p className="text-sm text-[#8E9AB4] leading-relaxed">
                A prioritised automation roadmap for the operation — a defensible basis for the next investment decision, grounded in how the business actually ran rather than in what a vendor wanted to sell.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CASE 4: MANAA LIVING */}
        {/* ========================================================================= */}
        <section id="case-4" className="mb-20 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E2942] pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#202C59] text-[#F4442E]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F4442E] font-bold">
                    Case 04 · Audit-to-Deliverable Pipeline
                  </span>
                  <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
                    Manaa Living — Full Audit-to-Deliverable Pipeline
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-ubuntu text-[#8E9AB4]">
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Sector: Lifestyle</span>
                <span className="px-2.5 py-1 rounded bg-[#12192C] border border-[#1E2942]">Type: Interactive Report</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Problem</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                Manaa Living needed to understand its automation opportunity surface — and see it in a form the whole team could actually engage with, not a 40-page PDF.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">The Solution</h3>
              <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
                A full AI opportunity audit delivered through the audit-to-deliverable pipeline: an interactive single-page report with branded UI and data visualisations, an audio overview, an embedded chatbot to query the findings, and a downloadable package for the team.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-fraunces text-xl font-bold text-emerald-400">The Impact</h3>
              <p className="text-sm text-[#8E9AB4] leading-relaxed">
                The audit became a working artefact, not a document: the same findings were browsable, queryable and shareable — demonstrating the complete audit-to-deliverable pipeline Good'ai runs for clients who want their intelligence to be usable, not filed.
              </p>
            </div>
          </div>
        </section>

      </div>

      <CTA
        headline="Have a specific bottleneck in mind?"
        subhead="Let's review your workflow. We'll give you straight answers on whether custom automation, voice telephony, or an audit will pay for itself."
        primaryLabel="Book a free consultation"
        primaryHref="/contact"
      />
    </div>
  );
}
