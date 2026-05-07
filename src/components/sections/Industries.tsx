"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import imgHotels from "../../../public/images/industry-hotels.jpg";
import imgCommercial from "../../../public/images/industry-commercial.jpg";
import imgData from "../../../public/images/industry-data.jpg";
import imgIndustrial from "../../../public/images/industry-industrial.jpg";

type Industry = {
  title: string;
  body: string;
  tags: string[];
  image?: StaticImageData;
  alt: string;
};

const industries: Industry[] = [
  {
    title: "Hotels & Hospitality",
    body: "Fire safety is critical for guest protection and brand compliance. We ensure systems meet operational and regulatory expectations.",
    tags: ["Alarm Systems", "Evacuation"],
    image: imgHotels,
    alt: "Hotel lobby — life safety systems",
  },
  {
    title: "Commercial Buildings",
    body: "We support building owners and managers in maintaining compliant and reliable fire protection systems.",
    tags: ["Compliance Audits", "Inspection"],
    image: imgCommercial,
    alt: "Commercial building",
  },
  {
    title: "Data Centers",
    body: "We verify fire suppression and detection systems where system failure is not an option.",
    tags: ["Gas Suppression", "Tier Compliance"],
    image: imgData,
    alt: "Data center server room",
  },
  {
    title: "Industrial & High-Risk",
    body: "We assess fire risks and system performance in high-hazard environments.",
    tags: ["Hazardous Areas", "Risk Assessment"],
    image: imgIndustrial,
    alt: "Industrial high-risk facility",
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white border border-[#e5e7eb] rounded-lg overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(11,28,44,0.08)] hover:shadow-[0_18px_44px_rgba(11,28,44,0.18)] transition-shadow duration-300"
    >
      <div className="relative aspect-[316/180] overflow-hidden bg-deep-teal">
        {industry.image ? (
          <Image
            src={industry.image}
            alt={industry.alt}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-deep-teal via-brand-700 to-brand-500 flex items-center justify-center">
            <span className="text-white/70 text-xs uppercase tracking-widest">
              {industry.title}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-[20px] leading-6 font-semibold text-ink-900">
          {industry.title}
        </h3>
        <p className="text-sm text-ink-900/80 leading-[1.5]">{industry.body}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {industry.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2.5 py-1 rounded-full bg-brand-100/15 text-brand-500 text-[11px] font-medium leading-[13.2px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Industries() {
  return (
    <section id="industries" className="bg-deep-teal py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-14">
        <Reveal variants={fadeUp} className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-[1.3]">
            Industries We Serve
          </h2>
          <p className="max-w-[486px] text-white/80 text-base leading-[1.65]">
            We support high-risk and high-value environments where fire safety
            system performance is not optional — it is critical.
          </p>
        </Reveal>

        <StaggerGroup
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((i) => (
            <IndustryCard key={i.title} industry={i} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
