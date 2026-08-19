import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, DollarSign } from "lucide-react";

export function PricingSnapshot() {
  return (
    <section className="py-24 bg-[#070B14] border-t border-[#1E2942] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-[0.16em] text-[#F3A62A]">
            Transparent Pricing
          </div>
          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Published rates. No surprises.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9AB4]">
            Clear, fixed investment tiers with commercial terms that respect cash flow. You own what we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Custom Automations */}
          <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#8E9AB4] font-semibold">
                  Fixed-Price Builds
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#202C59]/40 border border-[#202C59] text-[11px] font-ubuntu uppercase tracking-wider text-[#F3A62A]">
                  Custom
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-1">
                  Custom Automations
                </h3>
                <p className="text-xs text-[#8E9AB4]">Productised system builds</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-fraunces text-3xl font-bold text-white">$1,500</span>
                  <span className="text-[#8E9AB4] text-sm font-medium">to $8,500</span>
                </div>
                <p className="text-xs text-[#8E9AB4] mt-1">Optional maintain from $150/mo</p>
              </div>

              <ul className="space-y-3 text-xs text-[#FFF0D0]/90 pt-4 border-t border-[#1E2942]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F3A62A] shrink-0" />
                  <span>Starter ($1.5k–$3.5k), Growth ($3k–$5.5k), Enterprise ($5.5k–$8.5k)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F3A62A] shrink-0" />
                  <span>Includes plain-English runbook & process map</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F3A62A] shrink-0" />
                  <span>Monitored go-live with 10 test cases verified</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/services#custom-agent-development"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-sm font-semibold text-white transition-colors"
              >
                <span>View custom tiers</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2: Voice Agents */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#12192C] to-[#0A0F1D] border-2 border-[#F4442E]/80 shadow-xl shadow-[#F4442E]/10 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#F4442E] text-white text-[11px] font-ubuntu font-bold uppercase tracking-[0.16em]">
              Most Popular
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#F3A62A] font-semibold">
                  Inbound & Outbound
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F4442E]/20 text-[11px] font-ubuntu uppercase tracking-wider text-[#FFF0D0]">
                  No lock-in
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-1">
                  Managed Voice Agents
                </h3>
                <p className="text-xs text-[#8E9AB4]">Telephony that answers 24/7</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-fraunces text-4xl font-bold text-white">$149</span>
                  <span className="text-[#8E9AB4] text-sm font-medium">to $499 / mo</span>
                </div>
                <p className="text-xs text-[#8E9AB4] mt-1">Overage at cost ($0.12/min)</p>
              </div>

              <ul className="space-y-3 text-xs text-[#FFF0D0] pt-4 border-t border-[#1E2942]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F4442E] shrink-0" />
                  <span>Basic $149 (800 min) · Mid $299 · Pro $499 (2,000 min)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F4442E] shrink-0" />
                  <span>Australian accent & regional place-name tuning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#F4442E] shrink-0" />
                  <span>3CX PBX & Google Workspace directory sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/services#voice-agents"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F4442E] hover:bg-[#d63823] text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>Explore voice agent plans</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3: 40-40-20 Terms */}
          <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-ubuntu text-xs uppercase tracking-wider text-[#8E9AB4] font-semibold">
                  Commercial Structure
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#202C59]/40 border border-[#202C59] text-[11px] font-ubuntu uppercase tracking-wider text-emerald-400">
                  Standard
                </span>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-white mb-1">
                  The 40-40-20 Terms
                </h3>
                <p className="text-xs text-[#8E9AB4]">Transparent milestones</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-fraunces text-3xl font-bold text-white">40 · 40 · 20</span>
                </div>
                <p className="text-xs text-[#8E9AB4] mt-1">Paid on verified progress</p>
              </div>

              <ul className="space-y-3 text-xs text-[#FFF0D0]/90 pt-4 border-t border-[#1E2942]">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>40% Upfront:</strong> Non-refundable deposit to begin</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>40% Midpoint:</strong> At defined delivery milestone</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>20% Completion:</strong> On final verified sign-off</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/services#commercial-terms"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-sm font-semibold text-white transition-colors"
              >
                <span>Read commercial terms</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3A62A] hover:text-[#FFF0D0] transition-colors"
          >
            <span>See comprehensive services breakdown, audit options & terms</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
