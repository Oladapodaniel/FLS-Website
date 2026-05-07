"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "outline-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 focus-visible:ring-offset-white";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-[0_8px_28px_rgba(0,75,128,0.35)]",
  secondary:
    "bg-white text-brand-500 border border-brand-500 hover:bg-brand-50",
  "outline-light":
    "bg-transparent text-white border border-white hover:bg-white hover:text-brand-500",
  "outline-dark":
    "bg-transparent text-brand-500 border border-brand-500 hover:bg-brand-500 hover:text-white",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
  lg: "h-13 px-8 text-base",
} as const;

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <motion.span
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        <Link href={href} className={cls} {...(rest as object)}>
          {children}
        </Link>
      </motion.span>
    );
  }
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={cls}
      {...(rest as ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
