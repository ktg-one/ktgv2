import * as React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Palette, Utensils, Sparkles } from "lucide-react";

const PROOF_CARDS = [
  {
    tag: "Voice & Directory PBX",
    title: "Financial-Services Firm",
    subtitle: "Perth, Western Australia",
    icon: Building2,
    accent: "text-[#F3A62A]",
    summary: "3CX v20 PBX integrated with Google Workspace directories and Twilio SIP outbound survey agent. Resolved caller IDs across all staff handsets.",
    href: "/case-studies#case-1",
  },
  {
    tag: "Brand Architecture",
    title: "LeeMonarc Accounting",
    subtitle: "Accounting Services",
    icon: Palette,
    accent: "text-[#FFF0D0]",
    summary: "Four explored visual directions, production-ready mark, and full BRANDKITS specification governing identity across all future collateral.",
    href: "/case-studies#case-2",
  },
  {
    tag: "Opportunity Assessment",
    title: "Sun Island Bali",
    subtitle: "Hospitality & Resort Operations",
    icon: Utensils,
    accent: "text-emerald-400",
    summary: "Prioritised automation roadmap mapping guest-facing and back-of-house operations against realistic effort and commercial impact.",
    href: "/case-studies#case-3",
  },
  {
    tag: "Audit-to-Deliverable",
    title: "Manaa Living",
    subtitle: "Lifestyle Brand",
    icon: Sparkles,
    accent: "text-[#F4442E]",
    summary: "Full AI opportunity audit converted into an interactive single-page report with visualisations, audio overview, and embedded query assistant.",
    href: "/case-studies#case-4",
  },
];

export function ClientProof() {
  return (
    <section className="py-24 bg-[#0A0F1D] border-t border-[#1E2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-[0.16em] text-[#FFF0D0] mb-4">
              Documented Client Proof
            </div>
            <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Real engagements, honestly told.
            </h2>
            <p className="text-base text-[#8E9AB4] mt-2 max-w-xl">
              Zero retrofitted hype metrics. Documented operational and architectural outcomes from real client deliveries.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-sm font-semibold text-white transition-colors"
          >
            <span>View all 4 case studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#202C59]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-ubuntu text-[11px] uppercase tracking-wider text-[#8E9AB4] font-medium">
                      {card.tag}
                    </span>
                    <div className="p-2 rounded-lg bg-[#12192C] border border-[#1E2942] text-white group-hover:border-[#202C59]">
                      <Icon size={16} className={card.accent} />
                    </div>
                  </div>

                  <h3 className="font-fraunces text-xl font-bold text-white group-hover:text-[#FFF0D0] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#F3A62A] font-ubuntu tracking-wide mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-[#8E9AB4] leading-relaxed line-clamp-4">
                    {card.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2942]/40 flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#F3A62A] transition-colors">
                  <span>Read case breakdown</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
