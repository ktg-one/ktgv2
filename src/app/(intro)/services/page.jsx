import * as React from "react";
import Link from "next/link";
import {
  Phone,
  Database,
  FileSearch,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Server,
  Layers,
  HelpCircle,
  Clock,
  Briefcase,
  Award,
} from "lucide-react";
import { CTA } from "@/components/goodai/CTA";

export const metadata = {
  title: "Services — Good'ai",
  description: "Voice agents, agentic knowledge operations, AI readiness audits and custom automation builds — fixed price, transparent terms, no lock-in.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Good'ai",
    description: "Voice agents, agentic knowledge operations, AI readiness audits and custom automation builds — fixed price, transparent terms, no lock-in.",
    url: "https://goodai.au/services",
    siteName: "Good'ai Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942]">
            <span className="h-2 w-2 rounded-full bg-[#F3A62A]"></span>
            <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
              Productised Offerings
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Services & Transparent Commercials
          </h1>

          <p className="text-lg sm:text-xl text-[#FFF0D0] leading-relaxed">
            Four ways we work with a growing business. Each one sells an output, not an integration — you buy the working system, not a project that runs away from you.
          </p>

          {/* Quick Anchor Bar */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a href="#voice-agents" className="px-3 py-1.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] hover:text-white transition-colors">
              Voice Agents
            </a>
            <a href="#agentic-knowledge-operations" className="px-3 py-1.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] hover:text-white transition-colors">
              Knowledge Ops
            </a>
            <a href="#ai-readiness-audit" className="px-3 py-1.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] hover:text-white transition-colors">
              Readiness Audit
            </a>
            <a href="#custom-agent-development" className="px-3 py-1.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] hover:text-white transition-colors">
              Custom Builds
            </a>
            <a href="#commercial-terms" className="px-3 py-1.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A] transition-colors">
              40-40-20 Terms
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OFFERING 1: VOICE AGENTS */}
        {/* ========================================================================= */}
        <section id="voice-agents" className="mb-28 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#202C59]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#202C59] text-[#F3A62A]">
                <Phone size={24} />
              </div>
              <div>
                <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                  Core Offering 01
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white">
                  Voice Agents — Telephony That Answers
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What it is
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                A managed voice agent that handles inbound calls — answering, qualifying, booking, routing — and outbound callback pulses where they're owned. Built for Australian callers: tuned for Australian accents, including regional place names, so Perth enquiries aren't misrouted to the wrong intent. Runs on a native Australian voice platform (Trillet — SOC 2 Type II, ISO 27001, HIPAA-ready workflows, GDPR, TCPA, configurable Australian data residency), not a fragile wrapper.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What you get
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Keep your number:</strong> Australian-accent-tuned agent forwards unanswered calls seamlessly.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Sub-1.5s latency:</strong> Active-active APAC/NA/EMEA resilience with structured degradation.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Structured degradation:</strong> AI → human queue → IVR failover → voicemail (calls never silently die).</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                  <span><strong>Plain-English runbook:</strong> Clear handover docs plus optional post-go-live watch & maintain.</span>
                </li>
              </ul>
            </div>

            {/* Pricing Table */}
            <div className="space-y-4 pt-2">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                Commercial terms
              </h3>
              <div className="overflow-x-auto rounded-xl border border-[#1E2942]">
                <table className="w-full text-left text-sm text-[#8E9AB4]">
                  <thead className="bg-[#12192C] text-xs font-ubuntu uppercase tracking-wider text-white border-b border-[#1E2942]">
                    <tr>
                      <th className="p-4 font-semibold">Tier</th>
                      <th className="p-4 font-semibold">Monthly Investment</th>
                      <th className="p-4 font-semibold">Included Minutes</th>
                      <th className="p-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E2942]/60 bg-[#070B14]">
                    <tr>
                      <td className="p-4 font-semibold text-white">Basic</td>
                      <td className="p-4 text-[#F3A62A] font-bold font-fraunces text-lg">$149</td>
                      <td className="p-4">800 mins</td>
                      <td className="p-4">Entry voice agent for after-hours & overflow</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Mid</td>
                      <td className="p-4 text-[#F3A62A] font-bold font-fraunces text-lg">$299</td>
                      <td className="p-4">minutes confirmed at proposal</td>
                      <td className="p-4">For active call volume and business hours intake</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Pro</td>
                      <td className="p-4 text-[#F3A62A] font-bold font-fraunces text-lg">$499</td>
                      <td className="p-4">2,000 mins</td>
                      <td className="p-4">Full automation + outbound callback workflows</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8E9AB4]">
                Overage is passed through at rate ($0.12/min). Fixed monthly price. No contracts. Demo line:{" "}
                <a href="tel:+61877414191" className="text-[#F3A62A] font-semibold hover:underline">
                  +61 8 7741 4191
                </a>{" "}
                — hear Darling Good answer.
              </p>
            </div>

            {/* 3CX Telephony Integration Note */}
            <div className="p-5 rounded-xl bg-[#12192C] border border-[#1E2942] text-xs text-[#8E9AB4] space-y-2">
              <p className="font-ubuntu uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
                <Server size={14} className="text-[#F3A62A]" />
                <span>3CX & Telephony PBX Integration</span>
              </p>
              <p>
                We deploy to and alongside existing phone systems — including 3CX v20 PBX environments with Google Workspace directory and personal-contact synchronisation, admin-governed via domain-wide delegation, with nightly sync and caller-ID matching. Ask us about your stack.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OFFERING 2: AGENTIC KNOWLEDGE OPERATIONS */}
        {/* ========================================================================= */}
        <section id="agentic-knowledge-operations" className="mb-28 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#202C59] text-emerald-400">
                <Database size={24} />
              </div>
              <div>
                <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-emerald-400 font-bold">
                  Core Offering 02
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white">
                  Agentic Knowledge Operations — The Vault That Runs Itself
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What it is
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                Agentic Knowledge Operations (AKO) keeps your knowledge base alive while you run the business. Autonomous agents ingest, structure, maintain and audit plain-text knowledge stores — Obsidian vaults, Markdown document sets, wikis — alongside your people, with no proprietary database lock-in.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                Why it matters
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                Most businesses sit on a knowledge mess: meeting notes in four places, SOPs that drifted, a wiki nobody trusts. An agentic knowledge operation makes the vault the single source of truth — for humans and for automation. Plain-text first. Bi-directional: your team and your agents read and write the same files. Deterministic governance: linting and link-integrity checks run continuously, so dead links and stale context get caught instead of trusted.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What you get
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Automated ingestion:</strong> Transcripts, docs, and notes become structured, searchable notes.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Automated maintenance:</strong> Schema conformance, link integrity, and freshness enforced daily.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Agent-ready retrieval:</strong> Queryable, grounded context for team AI assistants.</span>
                </li>
                <li className="flex items-start gap-2.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Plain-English handover:</strong> You own the plain-text vault completely, always.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#12192C] border border-[#1E2942] text-xs text-[#8E9AB4] space-y-1.5">
              <p className="font-ubuntu uppercase tracking-wider text-emerald-400 font-bold">
                Proof of Method
              </p>
              <p>
                This is exactly how Good'ai runs itself — our own operating knowledge lives in plain-text vaults, linted daily, queried by the agent team that helps deliver client work. We sell what we live on.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                Commercial terms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942]">
                  <p className="text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4]">One-Off Audit</p>
                  <p className="text-2xl font-bold font-fraunces text-white mt-1">$499</p>
                  <p className="text-xs text-[#8E9AB4] mt-1">One-off vault health report + automated remediation patch</p>
                </div>
                <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942]">
                  <p className="text-xs font-ubuntu uppercase tracking-wider text-emerald-400">Continuous Maintenance</p>
                  <p className="text-2xl font-bold font-fraunces text-white mt-1">$199 / mo</p>
                  <p className="text-xs text-[#8E9AB4] mt-1">Automated linting, link repair, and freshness checks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OFFERING 3: AI READINESS AUDIT */}
        {/* ========================================================================= */}
        <section id="ai-readiness-audit" className="mb-28 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#202C59] text-[#FFF0D0]">
                <FileSearch size={24} />
              </div>
              <div>
                <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#FFF0D0] font-bold">
                  Core Offering 03
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white">
                  AI Readiness Audit — Know Where to Start
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What it is
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                A productised diagnostic that tells you exactly where automation will pay — and where it won't — before a dollar is spent. Delivered in three phases, in order:
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="px-2 py-0.5 rounded bg-[#202C59] text-xs font-ubuntu text-[#F3A62A]">Phase 1</span>
                    <span>Gap audit — information interrogation</span>
                  </div>
                  <p className="text-xs text-[#8E9AB4]">
                    We review your material, find the vague, contradictory or missing pieces, and come back with exactly five questions. Nothing is recommended, phased or priced until those five are answered — or your assumptions are logged and priced for risk.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="px-2 py-0.5 rounded bg-[#202C59] text-xs font-ubuntu text-[#FFF0D0]">Phase 2</span>
                    <span>Three-phase roadmap</span>
                  </div>
                  <p className="text-xs text-[#8E9AB4]">
                    Data hygiene, then internal automation, then client-facing systems — in that order, never skipped. Every action costed in AUD ex-GST bands, rated for effort and impact.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="px-2 py-0.5 rounded bg-[#202C59] text-xs font-ubuntu text-emerald-400">Phase 3</span>
                    <span>Client decision package</span>
                  </div>
                  <p className="text-xs text-[#8E9AB4]">
                    A recommendation memo (issue → evidence → recommendation → implications → risks) plus a lean proposal. You decide with everything on the table.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                Why it's worth paying for
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                Most businesses try to jump straight to the exciting customer-facing stuff and fail. An audit prices the foundation first — and it's operational, not legal: statutory items are flagged as risk items for your lawyer, never advice.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#12192C] border border-[#1E2942] text-xs text-[#8E9AB4] space-y-1.5">
              <p className="font-ubuntu uppercase tracking-wider text-[#FFF0D0] font-bold">
                Commercial terms & turnaround
              </p>
              <p>
                Assessment fee applied against the build if you proceed (workshop wedge credited into the audit, audit credited forward). Delivered in exactly five business days from intake to delivered report.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OFFERING 4: CUSTOM AGENT DEVELOPMENT */}
        {/* ========================================================================= */}
        <section id="custom-agent-development" className="mb-28 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942] relative overflow-hidden">
          <div className="max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#202C59] text-[#F4442E]">
                <Cpu size={24} />
              </div>
              <div>
                <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F4442E] font-bold">
                  Core Offering 04
                </span>
                <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white">
                  Custom Agent Development — Build What You Actually Need
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                What it is
              </h3>
              <p className="text-base text-[#8E9AB4] leading-relaxed">
                Fixed-price, productised builds of the automation your business runs on — from a single workflow to a multi-step operational system. You buy an output, delivered remote, on a schedule you can see.
              </p>
            </div>

            {/* Build Tiers Table */}
            <div className="space-y-4 pt-2">
              <h3 className="font-fraunces text-xl font-bold text-[#FFF0D0]">
                Build tiers
              </h3>
              <div className="overflow-x-auto rounded-xl border border-[#1E2942]">
                <table className="w-full text-left text-sm text-[#8E9AB4]">
                  <thead className="bg-[#12192C] text-xs font-ubuntu uppercase tracking-wider text-white border-b border-[#1E2942]">
                    <tr>
                      <th className="p-4 font-semibold">Tier</th>
                      <th className="p-4 font-semibold">Build Investment</th>
                      <th className="p-4 font-semibold">Optional Monthly Maintain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E2942]/60 bg-[#070B14]">
                    <tr>
                      <td className="p-4 font-semibold text-white">Starter</td>
                      <td className="p-4 text-white font-bold font-fraunces text-lg">$1,500 – $3,500</td>
                      <td className="p-4 text-[#8E9AB4]">$150 – $400 / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Growth</td>
                      <td className="p-4 text-white font-bold font-fraunces text-lg">$3,000 – $5,500</td>
                      <td className="p-4 text-[#8E9AB4]">$300 – $550 / mo</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-white">Enterprise</td>
                      <td className="p-4 text-white font-bold font-fraunces text-lg">$5,500 – $8,500</td>
                      <td className="p-4 text-[#8E9AB4]">$550 – $850 / mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#8E9AB4]">
                Every build ships with: a plain-English runbook, a before/after process map, a monitored go-live (minimum 10 test cases passed, live verification call), and the Good'ai Verified mark on the public registry.
              </p>
            </div>

            {/* Supplementary Offerings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-2">
                <p className="text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A] font-bold">
                  Fractional AI Solutions Architect
                </p>
                <p className="text-xs text-[#8E9AB4]">
                  Need senior design-and-build capacity without hiring a senior? A monthly retainer gives you the same hands on the tools without the salary or politics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-2">
                <p className="text-xs font-ubuntu uppercase tracking-wider text-emerald-400 font-bold">
                  Lead Engine
                </p>
                <p className="text-xs text-[#8E9AB4]">
                  Market research that turns into qualified lead batches for businesses selling to Australian customers. You tell us the vertical, we bring the list.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942] space-y-2">
                <p className="text-xs font-ubuntu uppercase tracking-wider text-[#F4442E] font-bold">
                  Grant-Ready Suite (WA)
                </p>
                <p className="text-xs text-[#8E9AB4]">
                  For grant-eligible WA businesses: voice + automation + setup bundle. Full suite $9,998 ex-GST — around $4,999 after the 50% WA Local Capability Fund match (≈ $416/mo in Year 1).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMMERCIAL TERMS: THE 40-40-20 */}
        {/* ========================================================================= */}
        <section id="commercial-terms" className="mb-28 scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12192C] to-[#0A0F1D] border-2 border-[#202C59]">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                Transparent Commercials
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white mt-1">
                Commercial Terms — The 40-40-20, in Plain English
              </h2>
              <p className="text-sm text-[#8E9AB4] mt-2">
                Transparent terms are part of the product. Our standard payment schedule:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-fraunces text-3xl font-bold text-[#F3A62A]">40%</span>
                <h3 className="font-fraunces text-lg font-bold text-white">Upfront Deposit</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  Non-refundable deposit before work begins. Work does not start, calendars do not open, until it clears.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-fraunces text-3xl font-bold text-[#FFF0D0]">40%</span>
                <h3 className="font-fraunces text-lg font-bold text-white">Midpoint Milestone</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  Defined per engagement in your proposal, payable upon delivery and verification of intermediate milestone.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-fraunces text-3xl font-bold text-emerald-400">20%</span>
                <h3 className="font-fraunces text-lg font-bold text-white">On Completion</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  Due within 7 days of final delivery notice following verified 10-test-case monitored go-live.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2942]/80 text-xs text-[#8E9AB4] space-y-1">
              <p className="text-white font-semibold">Ownership & Support:</p>
              <p>
                Ownership transfers on final payment. Late payment pauses all work and support immediately and accrues 10% p.a. interest. No lock-in beyond the engagement; post-go-live support is optional and separate.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HOW WE DELIVER: ISO/IEC 42001 ALIGNMENT */}
        {/* ========================================================================= */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#F3A62A]" />
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                Governance Standard
              </span>
            </div>

            <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
              How We Deliver — The Good'ai Way
            </h2>

            <p className="text-sm sm:text-base text-[#8E9AB4] leading-relaxed">
              Every deployment — whatever the tier — runs the same governance gate: context and classification, ownership attestation, risk assessment, monitoring setup, a go/no-go gate (10 test cases, no exceptions), a verified go-live, and a quarterly reassessment. It's how "we'll handle the boring stuff" stays true. Aligned with the structure of ISO/IEC 42001 — that's an honest claim, intentionally made.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/about#standard"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFF0D0] hover:text-white underline underline-offset-4"
              >
                <span>Read more about our 7-step deployment gate in About</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Services CTA */}
      <CTA
        headline="Ready to sort the boring stuff?"
        subhead="Book a free 30-minute consultation. We'll listen to what's eating your week and tell you honestly which tier or workflow will deliver real ROI."
        primaryLabel="Book a free consultation"
        primaryHref="/contact"
      />
    </div>
  );
}
