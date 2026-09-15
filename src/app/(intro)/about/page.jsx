import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Lock,
  Server,
  Scale,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { CTA } from "@/components/goodai/CTA";

export const metadata = {
  title: "About — Good'ai",
  description: "Good'ai equips the willing, educates the ignorant and aids the weak — honest automation, transparent terms, aligned with Australian compliance from day one.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Good'ai",
    description: "Good'ai equips the willing, educates the ignorant and aids the weak — honest automation, transparent terms, aligned with Australian compliance from day one.",
    url: "https://goodai.au/about",
    siteName: "Good'ai Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942]">
            <span className="h-2 w-2 rounded-full bg-[#F4442E]"></span>
            <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
              Our Mission & Philosophy
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            About Good'ai
          </h1>

          <p className="text-lg sm:text-xl text-[#FFF0D0] leading-relaxed">
            Good'ai is an Australian automation company — a global, online-first commercial engine with a Perth/Western Australia mission layer. Founded by Kevin Tan in Perth. Tagline: <em className="text-[#F3A62A]">Business automations, sorted.</em>
          </p>
        </div>

        {/* ========================================================================= */}
        {/* THE SHORT VERSION */}
        {/* ========================================================================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-4">
            <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
              The Short Version
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-white">
              We build the boring stuff so your week gets shorter.
            </h2>
            <p className="text-base text-[#8E9AB4] leading-relaxed">
              We build the boring stuff so your week gets shorter: fixed-price automations, voice agents, and honest advice about what will — and won't — pay off.
            </p>
            <p className="text-base text-[#8E9AB4] leading-relaxed">
              We're a switched-on Australian mate who happens to know systems. Not a tech company selling you a dashboard. We sell outputs, not integrations.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE DOCTRINE */}
        {/* ========================================================================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12192C] via-[#0A0F1D] to-[#070B14] border-2 border-[#202C59]">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#FFF0D0] font-bold">
                Foundational Values
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white mt-1">
                The Doctrine
              </h2>
            </div>

            <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#070B14] border-l-4 border-[#F4442E] shadow-inner text-lg sm:text-xl font-fraunces italic text-[#FFF0D0] leading-relaxed">
              “Using new tech and know-how to equip the willing, educate the ignorant and aid the weak — to raise up together as one, close the gap, reform positively and look past the violence; towards the stars.”
            </blockquote>

            <div className="space-y-4">
              <p className="text-sm font-ubuntu uppercase tracking-wider text-[#8E9AB4]">
                Three commitments hang off that sentence, and they're load-bearing:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#202C59] text-[#F3A62A] w-fit">
                    <Compass size={18} />
                  </div>
                  <h3 className="font-fraunces text-lg font-bold text-white">Equip the willing</h3>
                  <p className="text-xs text-[#8E9AB4] leading-relaxed">
                    The business owner who wants to get their week back gets working systems and the skills to use them.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#202C59] text-[#FFF0D0] w-fit">
                    <Users size={18} />
                  </div>
                  <h3 className="font-fraunces text-lg font-bold text-white">Educate the ignorant</h3>
                  <p className="text-xs text-[#8E9AB4] leading-relaxed">
                    Automation shouldn't be a mystery. Every build ships with docs you can read and an owner who'll explain it.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#202C59] text-emerald-400 w-fit">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="font-fraunces text-lg font-bold text-white">Aid the weak</h3>
                  <p className="text-xs text-[#8E9AB4] leading-relaxed">
                    The Perth/WA mission layer — our local community uplift work alongside the global commercial engine.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] text-xs text-[#8E9AB4]">
              <strong className="text-white">Automations over AI discipline:</strong> In practice it means practical, measurable commercial outcomes over technology hype. The client buys reclaimed hours and a clear ROI number — not the promise of intelligence.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR PHILOSOPHY */}
        {/* ========================================================================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-6">
            <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-emerald-400 font-bold">
              Our Philosophy
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-white">
              Outputs, Not Integration
            </h2>
            <p className="text-base text-[#8E9AB4] leading-relaxed">
              The average small business is still years away from deep adoption. So we don't sell adoption — we sell the working output. Fixed price, published upfront. Whatever we build, you own; whatever we tune, you understand. Post-go-live support is optional, because lock-in should never be the business model.
            </p>
            <p className="text-base text-[#8E9AB4] leading-relaxed">
              We recommend what's right, not what bills. If the cheapest thing for your business is doing nothing yet, that's the honest answer.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPLIANCE TRIAD 2026 */}
        {/* ========================================================================= */}
        <section id="compliance" className="mb-20 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                Regulatory Rigor
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white mt-1">
                Compliance from Day One — Australian AI Compliance Triad 2026
              </h2>
              <p className="text-sm text-[#8E9AB4] mt-2 leading-relaxed">
                Three concurrent Australian regimes are reshaping what "responsible automation" means in 2026 — for financial services, for anyone handling personal information, and for everyone using automated decision-making. We build to them from day one:
              </p>
            </div>

            {/* Triad Table */}
            <div className="overflow-x-auto rounded-xl border border-[#1E2942]">
              <table className="w-full text-left text-sm text-[#8E9AB4]">
                <thead className="bg-[#12192C] text-xs font-ubuntu uppercase tracking-wider text-white border-b border-[#1E2942]">
                  <tr>
                    <th className="p-4 font-semibold w-1/3">Regime</th>
                    <th className="p-4 font-semibold">What It Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E2942]/60 bg-[#070B14]">
                  <tr>
                    <td className="p-4 font-semibold text-white">APRA CPS 230</td>
                    <td className="p-4 text-xs leading-relaxed">
                      Operational risk management for financial-sector automation — resilience and business continuity are a compliance requirement, not a nice-to-have.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">WA PRIS Act 2024<br /><span className="text-xs text-[#F3A62A] font-normal">(commences 1 July 2026)</span></td>
                    <td className="p-4 text-xs leading-relaxed">
                      Privacy and responsible information sharing; automated decision-making transparency and human intervention; offshore non-sovereign processing is a breach.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">AUSTRAC Tranche 2</td>
                    <td className="p-4 text-xs leading-relaxed">
                      AML/CTF reforms widening obligations — relevant wherever money moves through automated pipelines.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#8E9AB4] leading-relaxed">
              Plus the broader Privacy Act reform clock: the statutory tort for serious invasions of privacy (commenced 10 June 2025), automated decision-making disclosure (effective 10 December 2026), cross-border disclosure rules, and the Notifiable Data Breaches scheme.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-emerald-400 font-semibold">
                  <Server size={14} />
                  <span>Data Stays Sovereign</span>
                </div>
                <p className="text-xs text-[#8E9AB4]">Australian data-residency options, configurable by geography.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A] font-semibold">
                  <Users size={14} />
                  <span>Humans in the Loop</span>
                </div>
                <p className="text-xs text-[#8E9AB4]">Approval gates on everything that goes out; intervention paths built in.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-ubuntu uppercase tracking-wider text-[#FFF0D0] font-semibold">
                  <Scale size={14} />
                  <span>Operational, Not Legal</span>
                </div>
                <p className="text-xs text-[#8E9AB4]">Statutory items flagged as risk items for your lawyer — never legal advice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE GOOD'AI DEPLOYMENT STANDARD */}
        {/* ========================================================================= */}
        <section id="standard" className="mb-20 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#F3A62A]" />
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                Verification Standard
              </span>
            </div>

            <h2 className="font-fraunces text-3xl font-bold text-white">
              How We Prove It — The Good'ai Deployment Standard
            </h2>

            <p className="text-base text-[#8E9AB4] leading-relaxed">
              Aligned with the structure of ISO/IEC 42001 (the AI management systems standard) — a claim we make precisely and defensibly, never "certified." Every client deployment, whatever the tier, passes a 7-step gate:
            </p>

            <div className="p-5 rounded-2xl bg-[#070B14] border border-[#1E2942] text-xs font-ubuntu text-[#FFF0D0] leading-relaxed space-y-2">
              <p className="text-[#F3A62A] font-bold uppercase tracking-wider">The 7-Step Deployment Gate:</p>
              <p className="text-sm">
                1. Context and classification → 2. Ownership attestation → 3. Planning and risk assessment → 4. Support and monitoring → 5. Go/no-go gate (minimum 10 test cases, no exceptions) → 6. Verified deployment → 7. Quarterly reassessment.
              </p>
              <p className="text-[#8E9AB4]">Fail a gate, you don't go live. Clean pass, you get the Good'ai Verified mark.</p>
            </div>

            <p className="text-sm text-[#8E9AB4] leading-relaxed">
              Our voice infrastructure partner, Trillet, holds platform-level SOC 2 Type II, ISO 27001, HIPAA-ready workflows, GDPR and TCPA posture with configurable regional data residency — so the platform layer is certified while the delivery layer is aligned and audited.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ABOUT THE FOUNDER */}
        {/* ========================================================================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12192C] to-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-6">
            <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#FFF0D0] font-bold">
              Leadership
            </span>
            <h2 className="font-fraunces text-3xl font-bold text-white">
              About the Founder
            </h2>
            <p className="text-base text-[#8E9AB4] leading-relaxed">
              Kevin Tan is a Perth-based practitioner whose work sits in the top 0.8% of global prompt-engineering rankings, and whose AI risk and governance framework (AIANT) is proprietary IP. He set up Good'ai for one reason: most businesses don't need more technology — they need the boring stuff off their plate, done properly, with someone who'll tell them the truth.
            </p>
          </div>
        </section>

      </div>

      <CTA />
    </div>
  );
}
