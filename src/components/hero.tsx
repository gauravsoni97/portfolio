"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "motion/react";
import { ArrowRight } from "lucide-react";
import { HeroSocials } from "@/components/hero-socials";
import { ScrollHint } from "@/components/parallax";
import { SkillIcon } from "@/components/skill-icon";
import { ButtonLink, Container } from "@/components/ui";
import { heroStats, site } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease },
  }),
};

const floatingSkills = [
  { name: "React.js", top: "10%", left: "6%", size: 30, duration: 16, x: 16, y: -14 },
  { name: "Next.js", top: "18%", right: "8%", size: 28, duration: 20, x: -14, y: 16 },
  { name: "TypeScript", top: "40%", left: "3%", size: 26, duration: 18, x: 12, y: 18 },
  { name: "JavaScript", bottom: "26%", left: "8%", size: 26, duration: 22, x: -12, y: -16 },
  { name: "Tailwind CSS", top: "26%", left: "16%", size: 22, duration: 19, x: 10, y: 12 },
  { name: "Redux Toolkit", bottom: "18%", right: "6%", size: 24, duration: 17, x: -10, y: 14 },
  { name: "HTML5", top: "52%", right: "4%", size: 22, duration: 21, x: 14, y: -10 },
  { name: "CSS3", bottom: "10%", left: "18%", size: 22, duration: 23, x: 14, y: -8 },
  { name: "Git", top: "8%", right: "24%", size: 20, duration: 15, x: -8, y: 12 },
  { name: "Figma", bottom: "34%", left: "2%", size: 22, duration: 19, x: 16, y: 10 },
  { name: "Firebase", top: "64%", left: "7%", size: 20, duration: 24, x: -8, y: 12 },
  { name: "GitHub", bottom: "12%", right: "16%", size: 22, duration: 18, x: 12, y: -16 },
  { name: "Cursor", top: "36%", right: "14%", size: 20, duration: 20, x: -14, y: 8 },
  { name: "SCSS/SASS", bottom: "8%", right: "38%", size: 18, duration: 26, x: 8, y: -12 },
];

function HeroSkillField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingSkills.map((item, index) => (
        <motion.div
          key={`${item.name}-${index}`}
          className="absolute opacity-[0.2]"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            x: [0, item.x, -item.x * 0.55, 0],
            y: [0, item.y, -item.y * 0.45, 0],
            rotate: [0, 10, -8, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <SkillIcon name={item.name} size={item.size} />
        </motion.div>
      ))}
    </div>
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
    const controls = animate(count, numeric, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [count, inView, numeric]);

  return (
    <div ref={ref}>
      <p className="font-display text-[28px] leading-none tracking-tight md:text-[32px]">
        {Number.isNaN(numeric) ? value : display}
      </p>
      <p className="mt-1.5 text-xs text-muted">{label}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-92px)] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb-mint absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2" />
        <div className="hero-orb hero-orb-blue absolute bottom-0 left-[12%] h-56 w-56" />
        <HeroSkillField />
      </div>

      <Container className="relative z-10 flex w-full flex-col items-center py-10 text-center">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-lg text-white/65 md:text-2xl"
        >
          Hey, I am
        </motion.p>

        <motion.h1
          custom={0.08}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-2 font-display text-[52px] leading-[0.9] tracking-tight text-mint md:text-[80px]"
        >
          {site.name}
        </motion.h1>

        <motion.p
          custom={0.16}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-4 text-xl text-white/85 md:text-2xl"
        >
          Senior Software Developer
        </motion.p>

        <motion.p
          custom={0.24}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 inline-flex items-center gap-2.5 text-sm uppercase tracking-[0.18em] text-muted"
        >
          Gurugram, Haryana, India
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
        </motion.p>

        <motion.p
          custom={0.28}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-[15px] leading-7 text-muted"
        >
          {site.heroCopy.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.p>

        <motion.div
          custom={0.36}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <ButtonLink
            href="/contact"
            className="gap-3 px-6 uppercase tracking-[0.16em] hover:gap-4"
          >
            Contact me
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/10">
              <ArrowRight size={14} />
            </span>
          </ButtonLink>
          <ButtonLink href="/#projects" variant="ghost">
            View work
          </ButtonLink>
        </motion.div>

        <motion.div
          custom={0.44}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          <HeroSocials className="mt-7 justify-center" />
        </motion.div>

        <motion.div
          custom={0.52}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-6 border-t border-white/8 pt-8 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </motion.div>

      </Container>
      <ScrollHint className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2" />
    </section>
  );
}
