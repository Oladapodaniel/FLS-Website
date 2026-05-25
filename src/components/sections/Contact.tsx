"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { Mail, Phone, MapPin, ChevronDown, Send, Globe } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "info@flsintegrity.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 810 991 5990",
  },
  {
    icon: Globe,
    label: "Operations",
    value: "International engagements available",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "5B, Afolabi Aina street, off Allen Avenue, Ikeja, Lagos, Nigeria.",
  }
];

const fieldShell =
  "h-11 w-full rounded-lg bg-white border border-[#d1d5db] px-3.5 text-sm text-ink-900 placeholder:text-[#9ca3af] focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-colors";

const labelCls = "text-[13px] font-semibold text-[#374151] leading-[15.6px]";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      natureOfEnquiry: String(formData.get("natureOfEnquiry") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to send");
      }
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-12 lg:gap-[124px] items-start">
          {/* Left column */}
          <Reveal variants={fadeUp} className="flex flex-col gap-7">
            <span className="text-sm font-bold text-brand-500 uppercase tracking-[0.04em] leading-[13.2px]">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 leading-[1.3]">
              Begin Your Assurance Engagement
            </h2>
            <p className="text-ink-800 text-base leading-[1.6]">
              Whether you&apos;re planning a new project, seeking compliance
              verification, or establishing an ongoing assurance programme, our
              team is ready to assist.
            </p>

            <ul className="flex flex-col gap-6 mt-2">
              {contactItems.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-100/15">
                      <Icon
                        size={20}
                        strokeWidth={1.67}
                        className="text-brand-500"
                      />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-ink-900 leading-[16.8px]">
                        {c.label}
                      </span>
                      <span className="text-sm text-brand-500 leading-[16.8px]">
                        {c.value}
                      </span>
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal
            variants={fadeUp}
            className="bg-surface border border-[#e5e7eb] rounded-xl p-9"
          >
            <form className="flex flex-col gap-6" onSubmit={onSubmit} noValidate>
              <h3 className="text-[22px] font-semibold text-ink-900 leading-[1.2]">
                Send Us An Enquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="firstName" className={labelCls}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className={fieldShell}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lastName" className={labelCls}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className={fieldShell}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className={labelCls}>
                  Company / Organisation
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your organisation"
                  className={fieldShell}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className={labelCls}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className={fieldShell}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="natureOfEnquiry" className={labelCls}>
                  Nature of Enquiry
                </label>
                <div className="relative">
                  <select
                    id="natureOfEnquiry"
                    name="natureOfEnquiry"
                    defaultValue=""
                    className={`${fieldShell} appearance-none pr-10 cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select service type
                    </option>
                    <option value="audit">Fire & Life Safety Audit</option>
                    <option value="testing">Commissioning & Testing</option>
                    <option value="compliance">Compliance Verification</option>
                    <option value="risk">Fire Risk Assessment</option>
                    <option value="ongoing">Annual Integrity Program</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your fire and life safety assurance requirements..."
                  className={`${fieldShell} h-auto py-3 resize-none leading-[1.5]`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                disabled={submitting}
                className="h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 text-white text-[15px] font-semibold leading-[18px] hover:bg-brand-600 hover:shadow-[0_10px_28px_rgba(0,75,128,0.35)] transition-all duration-300 disabled:bg-brand-500/60 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  "Thanks — we'll be in touch."
                ) : submitting ? (
                  "Sending…"
                ) : (
                  <>
                    <Send size={16} /> Submit Enquiry
                  </>
                )}
              </motion.button>

              {error && (
                <p className="text-sm text-red-600 -mt-2">{error}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
