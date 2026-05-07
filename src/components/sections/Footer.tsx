"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554V14.83c0-1.342-.027-3.07-1.872-3.07-1.873 0-2.16 1.46-2.16 2.97v5.72H9.31V9h3.41v1.561h.05c.476-.9 1.637-1.847 3.37-1.847 3.602 0 4.267 2.37 4.267 5.455v6.283zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.557V9h3.557v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import logoFooter from "../../../public/images/logo-footer.png";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Fire & Life Safety Audits" },
      { href: "/#services", label: "System Testing & Inspection" },
      { href: "/#services", label: "Compliance Verification" },
      { href: "/#services", label: "Advisory & Assurance" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/#industries", label: "Hotels & Hospitality" },
      { href: "/#industries", label: "Commercial Buildings" },
      { href: "/#industries", label: "Data Centers" },
      { href: "/#industries", label: "Industrial Facilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About FLS" },
      { href: "/#services", label: "Our Services" },
      { href: "/#standards", label: "Standards & Compliance" },
      { href: "/#contact", label: "Contact Us" },
    ],
  },
];

const legal = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer
      className="relative text-paper-soft/80"
      style={{
        background:
          "linear-gradient(rgba(0,75,128,0.20), rgba(0,75,128,0.20)), #0b1c2c",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 max-w-[280px]"
          >
            <div className="relative w-[116px] h-[44px] shrink-0">
              <Image
                src={logoFooter}
                alt="FLS Systems Integrity"
                fill
                sizes="116px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-[13px] leading-[1.46] text-paper-soft/80">
              Independent fire and life safety testing, inspection, auditing
              and assurance specialists.
            </p>
            <div className="flex items-center gap-2 mt-2">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: XIcon, label: "X / Twitter" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-brand-100 border border-[#2d2d2d] text-brand-500 hover:bg-white transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {columns.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + ci * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-[13px] font-semibold text-white leading-[15.6px]">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] leading-[15.6px] text-paper-soft/80 hover:text-white transition-colors duration-200"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-5 h-px bg-paper-soft/15" />

        {/* Bottom row */}
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-paper-soft/80 leading-[14.4px]">
            © 2024 FLS Systems Integrity Ltd. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-xs text-paper-soft/80 hover:text-white transition-colors leading-[14.4px]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
