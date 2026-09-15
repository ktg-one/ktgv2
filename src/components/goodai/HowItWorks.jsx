import * as React from "react";
import { MessageSquare, Wrench, Play, Sun } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquare,
    title: "You speak the mess once.",
    description: "Call us, or let Darling Good catch you. We listen for the bottleneck losing you money.",
    accent: "text-[#F3A62A]",
    badgeBg: "bg-[#F3A62A]/10 border-[#F3A62A]/30",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We build the system.",
    description: "Real automations, fixed price, in the tools you already run.",
    accent: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    number: "03",
    icon: Play,
    title: "It just runs.",
    description: "Monitored, insured against silent failure, tuned so it handles how Perth actually talks.",
    accent: "text-[#FFF0D0]",
    badgeBg: "bg-white/10 border-white/20",
  },
  {
    number: "04",
    icon: Sun,
    title: "You knock off early.",
    description: "Evenings, kids, footy — back.",
    accent: "text-[#F4442E]",
    badgeBg: "bg-[#F4442E]/10 border-[#F4442E]/30",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0A0F1D] border-t border-[#1E2942] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-[0.16em] text-[#FFF0D0]">
            The 4-Step Process
          </div>
          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            How it works: from mess to sorted.
          </h2>
          <p className="text-base sm:text-lg text-[#8E9AB4]">
            No six-month discovery phases or vague consultancy jargon. We identify the leak, build the fix, and hand you the keys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] hover:border-[#202C59] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-ubuntu text-3xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                      {step.number}
                    </span>
                    <div className={`p-3 rounded-xl border ${step.badgeBg} ${step.accent}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-fraunces text-xl font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#8E9AB4] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2942]/40 text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4]">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
