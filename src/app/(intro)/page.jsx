import { Hero } from "@/components/goodai/Hero";
import { TrustBar } from "@/components/goodai/TrustBar";
import { Problem } from "@/components/goodai/Problem";
import { Benefits } from "@/components/goodai/Benefits";
import { HowItWorks } from "@/components/goodai/HowItWorks";
import { PricingSnapshot } from "@/components/goodai/PricingSnapshot";
import { ClientProof } from "@/components/goodai/ClientProof";
import { CTA } from "@/components/goodai/CTA";

export const metadata = {
  title: "Good'ai — Business automations, sorted.",
  description: "We build the boring stuff so your week gets shorter. Fixed-price automation, voice agents and clear terms, built in Perth and delivered online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Good'ai — Business automations, sorted.",
    description: "We build the boring stuff so your week gets shorter. Fixed-price automation, voice agents and clear terms, built in Perth and delivered online.",
    url: "https://goodai.au",
    siteName: "Good'ai Australia",
    locale: "en_AU",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070B14] text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar & Proof Badges */}
      <TrustBar />

      {/* 3. Problem: "You didn't start a business to do admin" */}
      <Problem />

      {/* 4. Three Pillars: Sales, Operations, Data */}
      <Benefits />

      {/* 5. How It Works: 4 Steps */}
      <HowItWorks />

      {/* 6. Pricing Snapshot */}
      <PricingSnapshot />

      {/* 7. Client Proof Overview */}
      <ClientProof />

      {/* 8. Final CTA */}
      <CTA />
    </div>
  );
}
