"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { Download } from "lucide-react";
import { HeroSocials } from "@/components/hero-socials";
import { ScrollHint } from "@/components/parallax";
import { usePageReady } from "@/components/preloader";
import { ButtonLink, Container } from "@/components/ui";
import { heroStats, images, site } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

function IndiaFlag() {
  return (
    <svg
      viewBox="0 0 21 15"
      className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
      aria-hidden
    >
      <rect width="21" height="5" fill="#FF9933" />
      <rect y="5" width="21" height="5" fill="#FFFFFF" />
      <rect y="10" width="21" height="5" fill="#138808" />
      <circle cx="10.5" cy="7.5" r="1.55" fill="none" stroke="#000080" strokeWidth="0.45" />
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index * 30 * Math.PI) / 180;
        return (
          <line
            key={index}
            x1="10.5"
            y1="7.5"
            x2={10.5 + Math.cos(angle) * 1.35}
            y2={7.5 + Math.sin(angle) * 1.35}
            stroke="#000080"
            strokeWidth="0.22"
          />
        );
      })}
    </svg>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const numeric = Number.parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(Number.isNaN(numeric) ? value : `0${suffix}`);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(`${Math.round(latest)}${suffix}`);
  });

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const controls = animate(count, numeric, { duration: 1.4, ease });
    return () => controls.stop();
  }, [count, inView, numeric]);

  return (
    <div ref={ref} className="min-w-0">
      <p className="font-display text-[26px] leading-none tracking-tight text-white md:text-[30px]">
        {Number.isNaN(numeric) ? value : display}
      </p>
      <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em] text-muted">{label}</p>
    </div>
  );
}

export function Hero() {
  const ready = usePageReady();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const raw = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 90, damping: 22, mass: 0.35 });

  useLenis(() => {
    const el = sectionRef.current;
    if (!el) return;
    raw.set(Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(1, el.offsetHeight * 0.7))));
  });

  const textY = useTransform(progress, [0, 1], [0, reduce ? 0 : -22]);
  const photoY = useTransform(progress, [0, 1], [0, reduce ? 0 : 28]);
  const fade = useTransform(progress, [0, 0.75, 1], [1, 0.88, 0.36]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-[88px] flex min-h-svh items-center overflow-hidden bg-black pt-[88px] md:-mt-[92px] md:pt-[92px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />

      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
        transition={{ duration: 1.15, delay: 0.06, ease }}
        className="pointer-events-none absolute inset-y-[12%] left-[34%] right-0 z-[1] hidden items-center justify-center lg:flex"
      >
        <motion.div style={{ y: photoY, opacity: fade }} className="relative h-full w-full max-w-[820px]">
          <div className="hero-photo-soft relative h-full w-full">
            <Image
              src={images.hero}
              alt={site.name}
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 92vw"
              className="object-cover object-center mix-blend-lighten"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#000_0%,rgba(0,0,0,0.72)_22%,transparent_52%)]" />
          </div>
        </motion.div>
      </motion.div>

      <Container className="relative z-10 w-full max-w-[1280px] py-6 md:py-8">
        <motion.div
          style={{ y: textY, opacity: fade }}
          className="relative z-10 max-w-xl bg-black lg:max-w-[560px] lg:bg-transparent"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] uppercase tracking-[0.28em] text-white/40"
          >
            Hey, I am
          </motion.p>

          <h1 className="mt-5 font-display leading-[0.78] tracking-[-0.055em]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "118%" }}
                animate={ready ? { y: "0%" } : { y: "118%" }}
                transition={{ duration: 0.8, delay: 0.04, ease }}
                className="block text-[64px] text-white md:text-[96px] xl:text-[112px]"
              >
                Gaurav
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "118%" }}
                animate={ready ? { y: "0%" } : { y: "118%" }}
                transition={{ duration: 0.8, delay: 0.14, ease }}
                className="hero-name-stroke block text-[64px] md:text-[96px] xl:text-[112px]"
              >
                Soni
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.55, delay: 0.26, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <p className="text-base text-white/85 md:text-lg">Senior Software Developer</p>
            <span className="hidden h-3 w-px bg-white/18 sm:block" />
            <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
              Gurugram, Haryana, India
              <IndiaFlag />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.55, delay: 0.34, ease }}
            className="mt-5 max-w-md text-[15px] leading-7 text-white/75 lg:text-white/55"
          >
            {site.heroCopy.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.55, delay: 0.5, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <ButtonLink
              href={site.resume}
              download="Gaurav-Soni-Resume.pdf"
              className="gap-3 px-6 uppercase tracking-[0.16em] hover:gap-4"
            >
              Download resume
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
                <Download size={14} />
              </span>
            </ButtonLink>
            <ButtonLink href="/#projects" variant="ghost">
              View work
            </ButtonLink>
          </motion.div>

          <HeroSocials className="mt-5 mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative mt-2 h-[38vh] w-full bg-black lg:hidden"
        >
          <div className="hero-photo-mobile absolute inset-0">
            <Image
              src={images.hero}
              alt={site.name}
              fill
              sizes="100vw"
              className="object-cover object-[center_40%] mix-blend-lighten"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, delay: 0.58, ease }}
          className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/8 pt-6"
        >
          {heroStats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>
      </Container>

      <ScrollHint className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2" />
    </section>
  );
}
