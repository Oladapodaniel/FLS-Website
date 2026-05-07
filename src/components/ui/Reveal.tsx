"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
  variants?: Variants;
  amount?: number;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  variants = fadeUp,
  amount = 0.2,
  delay,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div {...(rest as object)}>{children}</div>;
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={delay !== undefined ? { delay } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
  once?: boolean;
};

export function StaggerGroup({
  children,
  delayChildren = 0.05,
  staggerChildren = 0.1,
  amount = 0.15,
  once = true,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={stagger(delayChildren, staggerChildren)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
