"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  User,
  Building2,
  Mail,
  Phone,
  Globe,
  ChevronDown,
  BedDouble,
  Server,
  Factory,
  Landmark,
  LayoutGrid,
  ClipboardCheck,
  Search,
  ShieldCheck,
  FileCheck,
  Clock,
  Send,
  Shield,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const labelCls = "text-[13px] font-semibold text-ink-900 leading-[15.6px]";
const fieldShellBase =
  "h-[46px] w-full rounded-lg bg-white border border-[#d1d5db] pl-10 pr-3.5 text-sm text-ink-900 placeholder:text-[#9ca3af] focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors";
const iconWrap =
  "absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none";

type FacilityOption = { id: string; label: string; Icon: LucideIcon };
const facilityOptions: FacilityOption[] = [
  { id: "hotel", label: "Hotel & Hospitality", Icon: BedDouble },
  { id: "commercial", label: "Commercial Building", Icon: Building2 },
  { id: "data", label: "Data Center", Icon: Server },
  { id: "industrial", label: "Industrial Facility", Icon: Factory },
  { id: "government", label: "Government / Regulatory", Icon: Landmark },
  { id: "other", label: "Other", Icon: LayoutGrid },
];

type ServiceOption = { id: string; label: string; Icon: LucideIcon };
const serviceOptions: ServiceOption[] = [
  { id: "testing", label: "System Testing & Commissioning", Icon: ClipboardCheck },
  { id: "audit", label: "Independent Inspection & Audit", Icon: Search },
  { id: "compliance", label: "Compliance & Regulatory Assurance", Icon: ShieldCheck },
  { id: "risk", label: "Risk Assessment & Gap Analysis", Icon: FileCheck },
];

export function ConsultationForm() {
  const [facility, setFacility] = useState("hotel");
  const [service, setService] = useState("audit");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,75,128,0.12)] max-w-[720px] mx-auto p-6 md:p-11"
    >
      {/* Back button */}
      <div className="flex justify-end mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 h-10 px-5 rounded-lg bg-[#e2e8f0]/70 hover:bg-[#e2e8f0] text-ink-600 text-[13px] font-semibold leading-[15.6px] transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back
        </Link>
      </div>

      <header className="pb-5 border-b border-brand-100/15 flex flex-col gap-2">
        <h1 className="text-[22px] font-semibold text-ink-900 leading-[1.3]">
          Request a Fire &amp; Life Safety Consultation
        </h1>
        <p className="text-sm text-ink-400 leading-[1.55]">
          Fill in your details and a certified FLS specialist will respond
          within 4 business hours.
        </p>
      </header>

      <form className="flex flex-col gap-7 mt-7" onSubmit={onSubmit} noValidate>
        {/* Personal/Contact */}
        <section className="flex flex-col gap-6 pb-6 border-b border-brand-100/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className={labelCls}>
                First Name *
              </label>
              <div className="relative">
                <User size={15} strokeWidth={1.25} className={iconWrap} />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                  className={fieldShellBase}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className={labelCls}>
                Last Name *
              </label>
              <div className="relative">
                <User size={15} strokeWidth={1.25} className={iconWrap} />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                  className={fieldShellBase}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="organization" className={labelCls}>
              Organization *
            </label>
            <div className="relative">
              <Building2 size={15} strokeWidth={1.25} className={iconWrap} />
              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Company / Hotel / Authority"
                required
                className={fieldShellBase}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelCls}>
              Work Email Address *
            </label>
            <div className="relative">
              <Mail size={15} strokeWidth={1.25} className={iconWrap} />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john.smith@organization.com"
                required
                className={fieldShellBase}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className={labelCls}>
                Phone Number *
              </label>
              <div className="relative">
                <Phone size={15} strokeWidth={1.25} className={iconWrap} />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  className={fieldShellBase}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="country" className={labelCls}>
                Country / Region *
              </label>
              <div className="relative">
                <Globe size={15} strokeWidth={1.25} className={iconWrap} />
                <select
                  id="country"
                  name="country"
                  defaultValue=""
                  required
                  className={cn(fieldShellBase, "appearance-none pr-10 cursor-pointer")}
                >
                  <option value="" disabled>
                    Select country...
                  </option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Nigeria</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facility Type */}
        <section className="flex flex-col gap-3">
          <label className={labelCls}>Facility Type *</label>
          <div className="flex flex-wrap gap-2.5">
            {facilityOptions.map((opt) => {
              const Icon = opt.Icon;
              const active = facility === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFacility(opt.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-lg px-4 py-[9px] text-[13px] leading-[15.6px] transition-all duration-200 border",
                    active
                      ? "bg-brand-100/15 border-brand-500 text-brand-500 font-semibold"
                      : "bg-white border-[#e2e8f0] text-ink-500 font-medium hover:border-brand-500/50",
                  )}
                >
                  <Icon
                    size={14}
                    strokeWidth={1.17}
                    className={active ? "text-brand-500" : "text-ink-400"}
                  />
                  {opt.label}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Service Interest */}
        <section className="flex flex-col gap-3">
          <label className={labelCls}>Primary Service Interest *</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceOptions.map((opt) => {
              const Icon = opt.Icon;
              const active = service === opt.id;
              return (
                <motion.button
                  key={opt.id}
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setService(opt.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-[11px] text-sm transition-all duration-200 border text-left",
                    active
                      ? "bg-brand-100/15 border-brand-500 text-brand-500 font-semibold"
                      : "bg-white border-[#e2e8f0] text-ink-500 font-medium hover:border-brand-500/50",
                  )}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className={active ? "text-brand-500" : "text-ink-300"}
                  />
                  {opt.label}
                </motion.button>
              );
            })}
          </div>
        </section>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className={labelCls}>
            Describe Your Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Please describe the fire and life safety systems you need assessed, the facility size, any known issues, or relevant compliance deadlines..."
            className="w-full rounded-lg bg-white border border-[#d1d5db] p-3.5 text-sm text-ink-900 placeholder:text-[#9ca3af] focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors resize-none leading-[1.55]"
          />
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="timeline" className={labelCls}>
            Project Timeline
          </label>
          <div className="relative">
            <Clock size={15} strokeWidth={1.25} className={iconWrap} />
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={cn(fieldShellBase, "appearance-none pr-10 cursor-pointer")}
            >
              <option value="" disabled>
                Select your expected timeline...
              </option>
              <option>Immediate (within 2 weeks)</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>Exploratory / planning</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none"
            />
          </div>
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <span className="relative inline-flex flex-shrink-0 mt-[1px]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="peer sr-only"
            />
            <span
              className={cn(
                "w-[18px] h-[18px] inline-flex items-center justify-center rounded border transition-colors",
                consent
                  ? "bg-brand-500 border-brand-500"
                  : "bg-white border-[#d1d5db]",
              )}
            >
              {consent && (
                <Check size={12} strokeWidth={1.5} className="text-white" />
              )}
            </span>
          </span>
          <span className="text-[13px] leading-[1.5] text-ink-400">
            I agree to FLS&apos;s Privacy Policy and consent to being contacted
            regarding my consultation request.
          </span>
        </label>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          disabled={!consent || submitted}
          className={cn(
            "h-14 inline-flex items-center justify-center gap-2.5 rounded-[10px] text-base font-semibold leading-[19.2px] transition-all duration-300",
            !consent || submitted
              ? "bg-brand-500/40 text-white cursor-not-allowed"
              : "bg-brand-500 text-white shadow-[0_6px_24px_rgba(0,75,128,0.31)] hover:bg-brand-600 hover:shadow-[0_10px_36px_rgba(0,75,128,0.45)]",
          )}
        >
          {submitted ? (
            <>
              <Check size={18} strokeWidth={1.5} /> Request received — we&apos;ll
              be in touch shortly.
            </>
          ) : (
            <>
              <Send size={18} strokeWidth={1.5} /> Submit Consultation Request
            </>
          )}
        </motion.button>

        <p className="flex items-center justify-center gap-2 text-xs text-ink-500 leading-[14.4px]">
          <Shield size={13} strokeWidth={1.08} />
          Your information is secure and never shared with third parties.
        </p>
      </form>
    </motion.div>
  );
}
