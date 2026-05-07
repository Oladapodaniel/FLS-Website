"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import standardsFeatured from "../../../public/images/standards-featured.jpg";

type Standard = {
  title: string;
  body: string;
};

const standards: Standard[] = [
  {
    title: "International fire safety guidelines (e.g., NFPA principles)",
    body: "Detection, alarm, suppression, means of egress, and life safety codes.",
  },
  {
    title: "Local regulatory requirements",
    body: "Fire detection, alarm systems, suppression, and fire safety in buildings.",
  },
  {
    title: "Industry-specific safety frameworks",
    body: "We ensure systems meet both design intent and operational performance requirements.",
  },
];

export function Standards() {
  return (
    <section id="standards" className="bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-[85px]">
        <Reveal
          variants={fadeUp}
          className="flex flex-col items-center text-center gap-3 max-w-[664px] mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 leading-[1.2]">
            Standards &amp; Compliance Framework
          </h2>
          <p className="text-lg text-ink-800 leading-[2.4em] mt-2">
            We Speak the Language of Standards
          </p>
          <p className="text-base text-ink-800 leading-[1.4]">
            Our approach aligns with recognized fire safety standards and best
            practices, including:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[559px_1fr] gap-x-[97px] gap-y-12 items-start max-w-[1312px] mx-auto w-full">
          <StaggerGroup staggerChildren={0.1} className="flex flex-col gap-6">
            {standards.map((s) => (
              <motion.article
                key={s.title}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface border border-[#f1e0e0] rounded-lg p-6 flex flex-col gap-3 hover:shadow-[0_8px_28px_rgba(11,28,44,0.08)] hover:border-brand-100 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-ink-900 leading-[1.2]">
                  {s.title}
                </h3>
                <p className="text-sm text-ink-800 leading-[1.5]">{s.body}</p>
              </motion.article>
            ))}
          </StaggerGroup>

          <Reveal variants={fadeUp} className="relative">
            <div className="relative aspect-[648/524] rounded-[14px] overflow-hidden bg-deep-navy shadow-[0_30px_80px_-30px_rgba(0,75,128,0.4)]">
              <Image
                src={standardsFeatured}
                alt="Steel pipelines and cables in plant — compliance frameworks"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
