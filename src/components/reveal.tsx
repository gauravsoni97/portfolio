"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealFrom = "up" | "left" | "right" | "scale";

const initials: Record<RevealFrom, { opacity: number; x?: number; y?: number; scale?: number }> =
  {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, y: 28 },
    right: { opacity: 0, y: 28 },
    scale: { opacity: 0, y: 20, scale: 0.97 },
  };

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  from?: RevealFrom;
};

export function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={initials[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
