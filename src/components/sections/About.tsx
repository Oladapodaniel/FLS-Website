"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import aboutMission from "../../../public/images/about-mission.jpg";
import aboutProblem from "../../../public/images/about-problem.jpg";

const aboutBlurb = `FLS Systems Integrity Ltd is a specialized Fire & Life Safety (FLS) assurance firm focused on system performance, compliance, and reliability.
We operate as an independent technical authority, verifying that fire protection systems are properly installed, fully functional, and capable of performing during real emergency conditions.`;

const visionBullets = [
  "Technical system evaluation",
  "Functional performance testing",
  "Integrated system verification",
  "Compliance assessment",
];

const problemBullets = [
  "Systems are not fully tested",
  "Integration is incomplete",
  "Critical faults go unnoticed",
];

function AccentLine() {
  return (
    <span aria-hidden className="block w-16 h-1 bg-brand-500 rounded-sm" />
  );
}

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 flex flex-col gap-[110px]">
        {/* Section Header — centered per Figma (counterAxisAlignItems: CENTER) */}
        <Reveal variants={fadeUp} className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 leading-[1.3]">
            About Us
          </h2>
          <p className="max-w-[716px] text-base text-ink-800 leading-[1.75] whitespace-pre-line text-center">
            {aboutBlurb}
          </p>
        </Reveal>

        {/* Mission + Vision row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <Reveal variants={fadeUp} className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <AccentLine />
                <h3 className="text-2xl font-medium text-ink-900 leading-[1.3]">
                  Our Mission
                </h3>
              </div>
              <p className="text-ink-800 text-base leading-[1.65] max-w-[540px]">
                To ensure that every fire and life safety system we assess
                performs reliably — protecting lives, property, and business
                continuity.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <AccentLine />
                <h3 className="text-2xl font-medium text-ink-900 leading-[1.3]">
                  Our Vision
                </h3>
              </div>
              <p className="text-ink-800 text-base leading-[1.6] max-w-[540px]">
                We go beyond visual inspections.
                <br />
                Our approach includes:
              </p>
              <ul className="list-disc pl-7 marker:text-brand-500 flex flex-col gap-1.5">
                {visionBullets.map((b) => (
                  <li key={b} className="text-ink-800 text-base leading-[1.65] pl-1">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variants={fadeUp} className="relative">
            <div className="relative aspect-[708/472] rounded-[14px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(11,28,44,0.25)]">
              <Image
                src={aboutMission}
                alt="FLS technicians inspecting fire safety systems"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Problem We Solve row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          <Reveal variants={fadeUp} className="order-2 lg:order-1 relative">
            <div className="relative aspect-[640/427] rounded-[14px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(11,28,44,0.25)] bg-surface">
              <Image
                src={aboutProblem}
                alt="FLS technician inspecting an electrical switchboard"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal variants={fadeUp} className="order-1 lg:order-2 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <AccentLine />
              <h3 className="text-2xl font-medium text-ink-900 leading-[1.3]">
                The Problem We Solve
              </h3>
            </div>
            <p className="text-ink-800 text-base leading-[1.65] max-w-[540px]">
              Many buildings have fire protection systems installed, but:
            </p>
            <ul className="list-disc pl-7 marker:text-brand-500 flex flex-col gap-1.5">
              {problemBullets.map((b) => (
                <li key={b} className="text-ink-800 text-base leading-[1.65] pl-1">
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-ink-800 text-base font-medium leading-[1.55] max-w-[540px]">
              We ensure that systems are not just installed — but operational
              and reliable.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
