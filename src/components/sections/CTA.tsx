"use client";

import { Reveal } from "@/components/ui/Reveal";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="bg-brand-500 py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
        <Reveal
          variants={fadeUp}
          className="max-w-[849px] mx-auto flex flex-col items-center text-center gap-9"
        >
          <h2 className="text-3xl md:text-[40px] font-medium text-white leading-[1.2]">
            Are Your Life Safety Systems Truly Assured?
          </h2>
          <p className="max-w-[600px] text-paper-soft/80 text-base leading-[1.7] font-medium">
            Don&apos;t assume. Verify. Contact FLS Systems Integrity Ltd today
            to discuss your facility&apos;s fire and life safety assurance
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button
              href="/consultation"
              variant="secondary"
              size="lg"
              className="h-13 px-8 text-base"
            >
              Book a Consultation
            </Button>
            <Button
              href="/consultation"
              variant="outline-light"
              size="lg"
              className="h-13 px-6 text-base"
            >
              Request an Assessment
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
