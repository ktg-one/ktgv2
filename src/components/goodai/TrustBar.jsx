import * as React from "react";
import { ShieldCheck, Server, Activity, UserCheck, Check } from "lucide-react";

export function TrustBar() {
  return (
    <section className="py-14 bg-[#070B14] border-y border-[#1E2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Guarantees Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="font-fraunces italic text-xl text-[#FFF0D0] mb-3">
            Three lines, one idea: <span className="text-[#F3A62A]">Business automations, sorted.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[#8E9AB4]">
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#F4442E]" />
              <strong className="text-white font-semibold">Real. Local. No hype.</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#F4442E]" />
              <span>Published fixed pricing — no open-ended billing.</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check size={14} className="text-[#F4442E]" />
              <span>Post-go-live support optional — no lock-in.</span>
            </span>
          </div>
        </div>

        {/* Proof Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#1E2942] flex items-start gap-3.5 hover:border-[#202C59] transition-colors">
            <div className="p-2.5 rounded-lg bg-[#202C59]/40 border border-[#202C59] text-[#F3A62A] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">ISO/IEC 42001-Aligned</p>
              <p className="text-xs text-[#8E9AB4] mt-0.5">Every deployment gated and verified</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#1E2942] flex items-start gap-3.5 hover:border-[#202C59] transition-colors">
            <div className="p-2.5 rounded-lg bg-[#202C59]/40 border border-[#202C59] text-emerald-400 shrink-0">
              <Server size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Australian Data Residency</p>
              <p className="text-xs text-[#8E9AB4] mt-0.5">Configurable by geography & sovereignty</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#1E2942] flex items-start gap-3.5 hover:border-[#202C59] transition-colors">
            <div className="p-2.5 rounded-lg bg-[#202C59]/40 border border-[#202C59] text-[#FFF0D0] shrink-0">
              <Activity size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">99.97% Stability SLA</p>
              <p className="text-xs text-[#8E9AB4] mt-0.5">Trillet native Australian voice platform</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A0F1D] border border-[#1E2942] flex items-start gap-3.5 hover:border-[#202C59] transition-colors">
            <div className="p-2.5 rounded-lg bg-[#202C59]/40 border border-[#202C59] text-[#F4442E] shrink-0">
              <UserCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Human-Led Onboarding</p>
              <p className="text-xs text-[#8E9AB4] mt-0.5">Every client onboarded by a real person</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
