import * as React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  HelpCircle,
  FileText,
  DollarSign,
} from "lucide-react";
import { ContactForm } from "@/components/goodai/ContactForm";

export const metadata = {
  title: "Contact — Good'ai",
  description: "Talk to a real person about automation. info@goodai.au, +61 8 7741 4191, Perth WA — human reply within one business day.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Good'ai",
    description: "Talk to a real person about automation. info@goodai.au, +61 8 7741 4191, Perth WA — human reply within one business day.",
    url: "https://goodai.au/contact",
    siteName: "Good'ai Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12192C] border border-[#1E2942]">
            <span className="h-2 w-2 rounded-full bg-[#F3A62A]"></span>
            <span className="font-ubuntu text-xs font-bold uppercase tracking-[0.16em] text-[#FFF0D0]">
              Get In Touch
            </span>
          </div>

          <h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Talk to a real person about automation.
          </h1>

          <p className="text-lg sm:text-xl text-[#FFF0D0] leading-relaxed">
            Free consultation, straight answers, no obligation. We recommend what's right for your business, not what bills.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: The Contact Card & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Official Contact Card */}
            <div className="p-8 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] space-y-6">
              <h2 className="font-fraunces text-2xl font-bold text-white">
                Official Contact Card
              </h2>

              <ul className="space-y-4 text-sm text-[#8E9AB4]">
                <li className="flex items-start gap-3.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <Mail size={18} className="text-[#F3A62A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] block">Email</span>
                    <a href="mailto:info@goodai.au" className="text-white font-medium hover:text-[#F3A62A] transition-colors">
                      info@goodai.au
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <Phone size={18} className="text-[#F3A62A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] block">Phone & Demo Line</span>
                    <a href="tel:+61877414191" className="text-white font-medium hover:text-[#F3A62A] transition-colors">
                      +61 8 7741 4191
                    </a>
                    <span className="text-xs text-[#8E9AB4] block mt-0.5">AUS Direct: 08 7741 4191</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <MapPin size={18} className="text-[#F3A62A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] block">Location</span>
                    <span className="text-white font-medium">Perth, Western Australia</span>
                    <span className="text-xs text-[#8E9AB4] block mt-0.5">Delivered online, worldwide</span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                  <Clock size={18} className="text-[#F3A62A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] block">Response Expectations</span>
                    <span className="text-white font-medium">Human reply within 1 business day</span>
                    <span className="text-xs text-[#8E9AB4] block mt-0.5">Consultations booked within 5 working days</span>
                  </div>
                </li>
              </ul>

              {/* Demo Line Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#202C59]/60 to-[#12192C] border border-[#202C59] flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-ubuntu uppercase tracking-wider text-[#F3A62A] font-bold">Hear Darling Good Answer</p>
                  <p className="text-xs text-white font-medium mt-0.5">Call our automated receptionist demo</p>
                </div>
                <a
                  href="tel:+61877414191"
                  className="px-3 py-1.5 rounded-lg bg-[#F4442E] hover:bg-[#d63823] text-white text-xs font-semibold shrink-0 transition-colors"
                >
                  Dial Now
                </a>
              </div>
            </div>

            {/* Ready Before You Ask */}
            <div className="p-6 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] space-y-4 text-xs text-[#8E9AB4]">
              <h3 className="font-fraunces text-lg font-bold text-white">
                Ready Before You Ask
              </h3>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Fixed pricing:</strong> Published upfront on Services — no open-ended billing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Terms in plain English:</strong> 40-40-20 payment structure, no lock-in.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Privacy & compliance:</strong> Australian data residency, ISO/IEC 42001-aligned.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span><strong>Documented evidence:</strong> Real engagements on our Case Studies page.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Section 2: What Happens When You Write */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#F3A62A] font-bold">
                Workflow Transparency
              </span>
              <h2 className="font-fraunces text-3xl font-bold text-white mt-1">
                What Happens When You Write
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-ubuntu text-2xl font-bold text-[#F3A62A]">01</span>
                <h3 className="font-fraunces text-lg font-bold text-white">A human replies</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  Within one business day. Not an automated ticket acknowledgement, not a bot — a real person.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-ubuntu text-2xl font-bold text-[#FFF0D0]">02</span>
                <h3 className="font-fraunces text-lg font-bold text-white">Free consultation booked</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  Within five working days. A 30-minute call to understand your business and what's really eating your week. You'll hear the demo if a voice agent fits.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#070B14] border border-[#1E2942] space-y-3">
                <span className="font-ubuntu text-2xl font-bold text-emerald-400">03</span>
                <h3 className="font-fraunces text-lg font-bold text-white">A straight answer</h3>
                <p className="text-xs text-[#8E9AB4] leading-relaxed">
                  If automation isn't the right move, we'll say so — we'd rather earn trust than an invoice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What a Consultation Covers */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12192C] to-[#0A0F1D] border border-[#1E2942]">
          <div className="max-w-4xl space-y-6">
            <div>
              <span className="font-ubuntu text-xs uppercase tracking-[0.16em] text-[#FFF0D0] font-bold">
                Agenda
              </span>
              <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-white mt-1">
                What a Consultation Covers
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#8E9AB4]">
              <li className="flex items-start gap-2.5 p-4 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                <span>The bottleneck (missed calls, admin, after-hours, follow-ups) costing you the most right now</span>
              </li>
              <li className="flex items-start gap-2.5 p-4 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                <span>What a Starter, Growth or Enterprise deployment would look like for <em>your</em> business specifically</span>
              </li>
              <li className="flex items-start gap-2.5 p-4 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                <span>Honest ROI framing — what needs to be true for this to pay for itself</span>
              </li>
              <li className="flex items-start gap-2.5 p-4 rounded-xl bg-[#070B14] border border-[#1E2942]/60">
                <CheckCircle2 size={16} className="text-[#F3A62A] shrink-0 mt-0.5" />
                <span>The 40-40-20 payment terms, in writing, before anything starts</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
