"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate short interactive submit delay prior to mailto trigger for clear UX feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.submit();
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 z-[60]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-syne text-4xl md:text-5xl font-bold lowercase mb-4 text-white">
          get in touch
        </h2>
        <p className="text-white/40 mb-4 text-sm md:text-base">
          have a project, question, or just want to talk AI?
        </p>
        <p className="text-white/35 mb-12 text-sm md:text-base lowercase">
          want to try the tool surface first?{" "}
          <Link
            href="/hub/chat"
            className="text-[#00f0ff]/90 hover:text-[#00f0ff] underline-offset-4 hover:underline"
          >
            open hub chat
          </Link>
          .
        </p>

        <Separator className="mb-12 bg-white/10" />

        {isSubmitted && (
          <div
            role="status"
            aria-live="polite"
            className="mb-8 p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-lg flex items-center gap-3 text-emerald-300 text-sm font-syne"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <span>Thank you! Opening your email client to send message...</span>
          </div>
        )}

        <form
          action="mailto:kevin@ktg.one"
          method="POST"
          encType="text/plain"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/60 text-xs tracking-widest font-syne">
                Name <span className="text-red-400" aria-hidden="true">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="your name"
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:ring-white/10 rounded-lg h-11"
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-xs font-syne">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/60 text-xs tracking-widest font-syne">
                Email <span className="text-red-400" aria-hidden="true">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:ring-white/10 rounded-lg h-11"
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs font-syne">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white/60 text-xs tracking-widest font-syne">
              Message <span className="text-red-400" aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="what's on your mind?"
              rows={5}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:ring-white/10 rounded-lg resize-none"
            />
            {errors.message && (
              <p id="message-error" className="text-red-400 text-xs font-syne">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Sending message..." : "Send message"}
            className="bg-emerald-500/90 hover:bg-emerald-500 text-white font-syne tracking-widest text-sm h-11 px-8 rounded-full transition-all duration-300 gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>sending...</span>
              </>
            ) : (
              <span>send message</span>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
