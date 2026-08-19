import * as React from "react";
import Link from "next/link";
import { PhoneCall, Cog, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section className="py-24 bg-[#070B14] border-t border-[#1E2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-[0.16em] text-[#F3A62A]">
            Three Capability Pillars
          </div>
          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Practical automations in plain English.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9AB4]">
            Three focused pillars designed to reclaim your week, eliminate admin drag, and protect your margins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Sales */}
          <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#202C59]/10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#202C59]/50 border border-[#202C59] text-[#F3A62A]">
                  <PhoneCall size={24} />
                </div>
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#8E9AB4] font-semibold">
                  Pillar 01 · Sales
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-3">
                  Catch every enquiry
                </h3>
                <p className="text-sm leading-relaxed text-[#8E9AB4]">
                  A voice agent that answers after hours, catches the calls you'd otherwise miss, ranks who to call back first, and drafts the follow-up — so chasing work doesn't eat your evening.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2942]/60 space-y-2.5 text-xs text-[#FFF0D0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#F3A62A]" />
                  <span>Sub-1.5s latency Australian-accent tuning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#F3A62A]" />
                  <span>Approval-gated: nothing sends without sign-off</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/services#voice-agents"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F3A62A] hover:text-[#FFF0D0] transition-colors"
              >
                <span>Voice agent tiers & terms</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Operations */}
          <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#202C59]/10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#202C59]/50 border border-[#202C59] text-emerald-400">
                  <Cog size={24} />
                </div>
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#8E9AB4] font-semibold">
                  Pillar 02 · Operations
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-3">
                  Run the back office
                </h3>
                <p className="text-sm leading-relaxed text-[#8E9AB4]">
                  Automations in the tools you already use — Xero, MYOB, ServiceM8, Tradify, your CRM, your calendar. Built cleanly with full process maps and monitored delivery.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2942]/60 space-y-2.5 text-xs text-[#FFF0D0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Plain-English runbook & process diagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Monitored go-live (minimum 10 test cases)</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/services#custom-agent-development"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-white transition-colors"
              >
                <span>Custom agent options</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Data & Reporting */}
          <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-[#202C59]/10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#202C59]/50 border border-[#202C59] text-[#F4442E]">
                  <BarChart3 size={24} />
                </div>
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#8E9AB4] font-semibold">
                  Pillar 03 · Data & Reporting
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-3">
                  See the week in numbers
                </h3>
                <p className="text-sm leading-relaxed text-[#8E9AB4]">
                  A one-screen monthly report from your own data — calls caught vs missed, jobs booked, revenue recovered. Not a bloated BI engagement. Just proof the system is earning its place.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E2942]/60 space-y-2.5 text-xs text-[#FFF0D0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#F4442E]" />
                  <span>Single-screen executive overview</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#F4442E]" />
                  <span>Direct ROI validation from real data</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F4442E] hover:text-[#FFF0D0] transition-colors"
              >
                <span>See real client proof</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
