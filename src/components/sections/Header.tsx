"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import logo from "../../../public/images/logo.png";

const navLinks = [
  { id: "home", href: "/#home", label: "Home" },
  { id: "about", href: "/#about", label: "About Us" },
  { id: "services", href: "/#services", label: "Our Services" },
  { id: "industries", href: "/#industries", label: "Industries" },
  { id: "standards", href: "/#standards", label: "Standards" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

const SECTION_IDS = ["home", "about", "services", "industries", "standards", "contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section by intersection AND respond to hash clicks immediately
  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (SECTION_IDS.includes(hash)) setActiveId(hash);
      else if (window.scrollY < 200) setActiveId("home");
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return () => window.removeEventListener("hashchange", setFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", setFromHash);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          : "bg-white",
        "border-b border-[#e5e7eb]",
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
        <div className="h-[68px] flex items-center justify-between gap-6">
          <Link href="/" aria-label="FLS Systems Integrity Home" className="block">
            <Image
              src={logo}
              alt="FLS Systems Integrity"
              width={93}
              height={44}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <LayoutGroup id="nav-underline">
            <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
              {navLinks.map((l) => {
                const active = activeId === l.id;
                return (
                  <Link
                    key={l.id}
                    href={l.href}
                    onClick={() => setActiveId(l.id)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-1 text-sm leading-[16.8px] transition-colors duration-200",
                      active
                        ? "text-brand-500 font-semibold"
                        : "text-ink-700 font-medium hover:text-brand-500",
                    )}
                  >
                    {l.label}
                    {active && (
                      <motion.span
                        layoutId="active-nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </LayoutGroup>

          <div className="hidden md:block">
            <Button href="/consultation" size="sm" className="text-sm h-10 px-5">
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-ink-900"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#e5e7eb]"
          >
            <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile">
              {navLinks.map((l) => {
                const active = activeId === l.id;
                return (
                  <Link
                    key={l.id}
                    href={l.href}
                    onClick={() => {
                      setActiveId(l.id);
                      setOpen(false);
                    }}
                    className={cn(
                      "px-3 py-3 rounded-md text-sm transition-colors",
                      active
                        ? "text-brand-500 font-semibold bg-brand-50"
                        : "text-ink-700 font-medium hover:bg-surface",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/consultation"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-lg bg-brand-500 text-white text-sm font-semibold"
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
