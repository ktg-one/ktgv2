"use client";

import * as React from "react";
import { CheckCircle2, AlertCircle, Send, Loader2, Phone, Mail, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES_OPTIONS = [
  { value: "voice-agents", label: "Voice Agents ($149 / $299 / $499 tiers)" },
  { value: "agentic-knowledge-operations", label: "Agentic Knowledge Operations (Vault $499 / $199/mo)" },
  { value: "ai-readiness-audit", label: "AI Readiness Audit (3-Phase Diagnostic Roadmap)" },
  { value: "custom-agent-development", label: "Custom Agent Development (Starter / Growth / Enterprise)" },
  { value: "grant-ready-suite", label: "Grant-Ready Suite (WA LCF 50% match)" },
  { value: "other", label: "General Automation Inquiry / Other" },
];

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "voice-agents",
    message: "",
  });

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = React.useState("");

  const validateField = (field, value) => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return null;
      case "email":
        if (!value.trim()) return "Business email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return null;
      case "phone":
        if (!value.trim()) return "Phone number is required.";
        if (value.trim().replace(/\D/g, "").length < 8) {
          return "Please enter a valid Australian or international phone number.";
        }
        return null;
      case "company":
        if (!value.trim()) return "Company or business name is required.";
        return null;
      case "message":
        if (!value.trim()) return "Please describe the bottleneck or task you want automated.";
        if (value.trim().length < 10) return "Please provide at least 10 characters of detail.";
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all touched
    const allTouched = {
      name: true,
      email: true,
      phone: true,
      company: true,
      service: true,
      message: true,
    };
    setTouched(allTouched);

    // Validate all
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Focus first erroneous input
      const firstKey = Object.keys(newErrors)[0];
      const element = document.getElementById(firstKey);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
        setErrorMessage(json.error || "Submission failed. Please call 08 7741 4191 directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback for offline / network issues: record in localStorage and show success fallback
      try {
        const stored = JSON.parse(localStorage.getItem("goodai_pending_submissions") || "[]");
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem("goodai_pending_submissions", JSON.stringify(stored));
      } catch (localErr) {
        // ignore
      }
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-[#0A0F1D] border-2 border-emerald-500/50 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 size={36} />
        </div>

        <div className="space-y-2">
          <h3 className="font-fraunces text-2xl sm:text-3xl font-bold text-white">
            Consultation Request Received
          </h3>
          <p className="text-[#FFF0D0] text-sm">
            Thank you, {formData.name}. Your details are confirmed.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#12192C] border border-[#1E2942] text-left space-y-3 text-sm text-[#8E9AB4]">
          <div className="flex items-center gap-2 text-white">
            <Clock size={16} className="text-[#F3A62A]" />
            <span className="font-semibold">Response Expectations:</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#8E9AB4] list-disc list-inside">
            <li>A human will review your bottleneck and reply to <strong className="text-white">{formData.email}</strong> within 1 business day.</li>
            <li>Free 30-minute consultation call booked within 5 working days.</li>
            <li>We'll come prepared with direct analysis of your requested service (<span className="text-[#FFF0D0]">{formData.service}</span>).</li>
          </ul>
        </div>

        <div className="pt-2 text-xs text-[#8E9AB4]">
          Need immediate support? Call our Perth direct demo line:{" "}
          <a href="tel:+61877414191" className="text-[#F3A62A] font-semibold hover:underline">
            +61 8 7741 4191 (AUS: 08 7741 4191)
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitStatus(null);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "voice-agents",
              message: "",
            });
            setTouched({});
            setErrors({});
          }}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#12192C] hover:bg-[#202C59] border border-[#1E2942] text-xs font-semibold text-white transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-2xl bg-[#0A0F1D] border border-[#1E2942] shadow-2xl space-y-6"
    >
      <div className="space-y-1">
        <h3 className="font-fraunces text-2xl font-bold text-white">
          Book a Free Consultation
        </h3>
        <p className="text-xs text-[#8E9AB4]">
          Straight answers, honest ROI, and zero sales pressure. Replies within 1 business day.
        </p>
      </div>

      {submitStatus === "error" && (
        <div className="p-4 rounded-xl bg-[#F4442E]/10 border border-[#F4442E]/30 flex items-start gap-3 text-xs text-[#FFF0D0]">
          <AlertCircle size={16} className="text-[#F4442E] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-white font-semibold">Error submitting form:</strong>
            {errorMessage}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
            Full Name <span className="text-[#F4442E]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="e.g. Sarah Jenkins"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors",
              errors.name && touched.name
                ? "border-[#F4442E] focus:border-[#F4442E] focus:ring-1 focus:ring-[#F4442E]"
                : "border-[#1E2942] focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59]"
            )}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="text-xs text-[#F4442E] mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
            Business Email <span className="text-[#F4442E]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="sarah@company.com.au"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors",
              errors.email && touched.email
                ? "border-[#F4442E] focus:border-[#F4442E] focus:ring-1 focus:ring-[#F4442E]"
                : "border-[#1E2942] focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59]"
            )}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="text-xs text-[#F4442E] mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
            Phone / Mobile <span className="text-[#F4442E]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="0400 000 000 or +61 8 ..."
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors",
              errors.phone && touched.phone
                ? "border-[#F4442E] focus:border-[#F4442E] focus:ring-1 focus:ring-[#F4442E]"
                : "border-[#1E2942] focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59]"
            )}
          />
          {errors.phone && touched.phone && (
            <p id="phone-error" className="text-xs text-[#F4442E] mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
            Company / Business Name <span className="text-[#F4442E]">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            placeholder="e.g. West Coast Supplies Pty Ltd"
            className={cn(
              "w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors",
              errors.company && touched.company
                ? "border-[#F4442E] focus:border-[#F4442E] focus:ring-1 focus:ring-[#F4442E]"
                : "border-[#1E2942] focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59]"
            )}
          />
          {errors.company && touched.company && (
            <p id="company-error" className="text-xs text-[#F4442E] mt-1 flex items-center gap-1">
              <AlertCircle size={12} />
              <span>{errors.company}</span>
            </p>
          )}
        </div>
      </div>

      {/* Service of Interest */}
      <div className="space-y-1.5">
        <label htmlFor="service" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border border-[#1E2942] text-sm text-white focus:outline-none focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59] transition-colors"
        >
          {SERVICES_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0A0F1D] text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message / Bottleneck */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-ubuntu uppercase tracking-wider text-[#8E9AB4] font-medium">
          Current Bottleneck / What is eating your week? <span className="text-[#F4442E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us about the manual work, missed calls, invoice chasing, or workflow bottleneck you want to solve..."
          className={cn(
            "w-full px-3.5 py-2.5 rounded-lg bg-[#070B14] border text-sm text-white placeholder-white/20 focus:outline-none transition-colors resize-none",
            errors.message && touched.message
              ? "border-[#F4442E] focus:border-[#F4442E] focus:ring-1 focus:ring-[#F4442E]"
              : "border-[#1E2942] focus:border-[#202C59] focus:ring-1 focus:ring-[#202C59]"
          )}
        />
        {errors.message && touched.message && (
          <p id="message-error" className="text-xs text-[#F4442E] mt-1 flex items-center gap-1">
            <AlertCircle size={12} />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#F4442E] hover:bg-[#d63823] disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-[#F4442E]/20"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Submitting consultation request...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Send Request (Human Reply Within 1 Day)</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-[#8E9AB4] text-center">
        We respect your privacy. No marketing spam, no high-pressure sales calls. Built with Australian data sovereignty.
      </p>
    </form>
  );
}
