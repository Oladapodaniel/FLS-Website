"use client";

import {
  ClipboardCheck,
  Settings2,
  ShieldCheck,
  TriangleAlert,
  CalendarCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  body: string;
  tag: string;
};

const primary: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Fire & Life Safety System Integrity Audit",
    body: "Comprehensive assessments of fire protection systems to evaluate performance, compliance, and reliability — with detailed findings and recommendations.",
    tag: "Audit",
  },
  {
    icon: Settings2,
    title: "Commissioning & Integrated Testing",
    body: "Verifying that all fire and life safety systems function together as intended — alarms, pumps, suppression, evacuation, and BMS interfaces.",
    tag: "Testing",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Verification",
    body: "We measure your systems against applicable international codes and local regulations — NFPA, BS, EN, IFC — and provide structured gap analysis reports.",
    tag: "Compliance",
  },
];

const secondary: Service[] = [
  {
    icon: TriangleAlert,
    title: "Fire Risk Assessment",
    body: "Evaluate fire risks within facilities and provide prioritized strategies to mitigate hazards and align with operational risk thresholds.",
    tag: "Risk",
  },
  {
    icon: CalendarCheck,
    title: "Annual System Integrity Program",
    body: "Ongoing verification and testing programs to ensure continued system performance, regulatory currency, and stakeholder confidence year-round.",
    tag: "Ongoing",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[14px] p-7 flex flex-col gap-5 border bg-surface border-[#e5e7eb] shadow-[0_2px_16px_rgba(128,0,0,0.06)] transition-all duration-300 hover:bg-brand-500 hover:border-brand-500 hover:shadow-[0_18px_44px_rgba(0,75,128,0.4)]"
    >
      <div
        className="inline-flex items-center justify-center rounded-xl bg-brand-100/15 border border-brand-500/50 group-hover:bg-white group-hover:border-white transition-colors duration-300"
        style={{ width: 52, height: 52 }}
      >
        <Icon
          size={26}
          strokeWidth={2.17}
          className="text-brand-500 transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold leading-[1.4] text-ink-900 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base leading-[1.45] text-ink-800 group-hover:text-white/85 transition-colors duration-300">
          {service.body}
        </p>
      </div>

      <span className="mt-auto self-start inline-flex items-center px-3 py-[5px] rounded-md text-[13px] font-semibold leading-[14.4px] bg-brand-100/15 text-brand-500 group-hover:bg-white group-hover:text-brand-500 transition-colors duration-300">
        {service.tag}
      </span>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white pt-20 pb-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-[70px]">
        <Reveal variants={fadeUp} className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 leading-[1.3]">
            Our Services
          </h2>
          <p className="max-w-[486px] text-ink-800 text-base leading-[1.7] text-center">
            We provide independent Fire &amp; Life Safety (FLS) system
            verification, ensuring that installed systems are fully functional,
            compliant, and integrated.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          {/* Primary row: 3 cards — left-aligned grid */}
          <StaggerGroup
            staggerChildren={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {primary.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </StaggerGroup>

          {/* Secondary row: 2 cards — left-aligned within section */}
          <StaggerGroup
            staggerChildren={0.12}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[872px]"
          >
            {secondary.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
