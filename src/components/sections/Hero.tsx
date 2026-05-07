"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import heroImg from "../../../public/images/hero.jpg";

const differentiators = [
  "We Do Not Install — We Verify",
  "Independent. Unbiased. Trusted.",
  "International Standards Applied Locally",
  "From Audit to Assurance — End-to-End",
];

export function Hero() {
  return (
    <section id="home" className="relative pt-[68px]">
      <div className="relative min-h-[640px] lg:min-h-[790px] overflow-hidden">
        <Image
          src={heroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        {/* Gradient + tint overlay — Figma: opaque dark on left half, holds dark longer, never fully clears on right */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000 0%, rgba(11,28,44,0.96) 45%, rgba(11,28,44,0.78) 75%, rgba(11,28,44,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "rgba(20,75,85,0.28)" }}
        />

        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
          <div className="max-w-[831px] py-24 lg:py-[130px] flex flex-col gap-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex self-start items-center px-4 py-2 rounded-[2px] bg-white/80 border border-brand-500 text-brand-500 text-[11px] font-medium uppercase tracking-[0.04em] leading-[13.2px]"
            >
              Independent Fire & Life Safety Specialists
            </motion.span>

            <div className="flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans font-semibold text-white text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.08] tracking-[-0.01em]"
              >
                Fire &amp; Life Safety
                <br />
                Systems Integrity
                <br />
                &amp; Compliance Assurance
              </motion.h1>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block w-16 h-1 bg-white rounded-sm origin-left"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-paper-soft/80 text-base sm:text-lg lg:text-[20px] leading-[1.62]"
            >
              We verify Fire &amp; Life safety systems work, not just that they&apos;re
              installed. Proving Fire &amp; Life safety systems perform in real
              emergencies, not just on Paper.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/consultation" size="md" className="h-12 px-7 text-base">
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Differentiator Strip */}
      <div className="bg-brand-500">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-3 py-5 md:h-20 md:py-0">
            {differentiators.map((label, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 text-paper-soft text-sm font-semibold leading-[16.8px]"
              >
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-brand-100"
                >
                  <Check size={12} strokeWidth={2} className="text-brand-100" />
                </span>
                <span>{label}</span>
                {i < differentiators.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:inline-block w-px h-9 ml-3 bg-paper-soft/60"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
