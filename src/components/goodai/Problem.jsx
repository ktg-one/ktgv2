import * as React from "react";
import { XCircle, CheckCircle2, Clock, Zap } from "lucide-react";

export function Problem() {
  return (
    <section className="py-24 bg-[#0A0F1D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Problem Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12192C] border border-[#1E2942] text-xs font-ubuntu uppercase tracking-[0.16em] text-[#F4442E]">
              The Reality of Running a Business
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              You didn't start a business to do admin.
            </h2>

            <p className="text-lg text-[#FFF0D0]/90 leading-relaxed font-normal">
              Invoicing. Chasing. Quoting. Scheduling. Follow-ups. For most operators it's the parts of the week that never show up on the invoice — the nights and weekends the business steals back.
            </p>

            <p className="text-base text-[#8E9AB4] leading-relaxed">
              Here's what we don't do: build another dashboard for you to manage, or sell you more software to learn. We take the work off your plate with systems that quietly run in the background. Automation over hype. Outcomes over features.
            </p>

            <div className="pt-2 flex items-center gap-6 text-sm text-[#8E9AB4]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F3A62A]"></span>
                <span className="text-white font-medium">Silent background runs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-white font-medium">Zero apps to learn</span>
              </div>
            </div>
          </div>

          {/* Contrast Comparison Card */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* The Good'ai Way */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12192C] to-[#0D1424] border-2 border-[#202C59] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F3A62A]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A] font-bold mb-3">
                <Zap size={14} className="text-[#F3A62A]" />
                <span>The Good'ai Standard</span>
              </div>
              
              <h3 className="font-fraunces text-xl font-bold text-white mb-4">
                Systems that quietly take the work
              </h3>

              <ul className="space-y-3 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Runs inside tools you already use (Xero, MYOB, CRM, PBX)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Fixed-price deliverables with 40-40-20 payment terms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>Plain-English runbook + full ownership on completion</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-white font-medium">Knock off early. Evenings back.</span>
                </li>
              </ul>
            </div>

            {/* The Industry Trap */}
            <div className="p-5 rounded-xl bg-[#070B14] border border-[#1E2942]/60 text-xs text-[#8E9AB4]">
              <p className="font-ubuntu uppercase tracking-wider text-[#F4442E] font-semibold mb-2 flex items-center gap-1.5">
                <XCircle size={13} />
                <span>What we refuse to do</span>
              </p>
              <p>
                No proprietary dashboards, no "another login to remember", no hourly retainer creep, and zero vendor lock-in.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
