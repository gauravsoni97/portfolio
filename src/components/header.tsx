"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { usePageReady } from "@/components/preloader";
import { nav, site } from "@/data/content";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

function sectionFromHref(href: string) {
  return href.includes("#") ? href.split("#")[1] : "";
}

export function Header() {
  const pathname = usePathname();
  const ready = usePageReady();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setHash(window.location.hash.replace("#", ""));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useLenis(({ scroll }) => {
    const next = scroll > 18;
    setScrolled((current) => (current === next ? current : next));

    if (pathname !== "/") return;
    const ids = ["experience", "skills", "projects"] as const;
    let current = "";
    for (const id of ids) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (section.getBoundingClientRect().top < window.innerHeight * 0.38) {
        current = id;
        break;
      }
    }
    setHash((value) => (value === current ? value : current));
  });

  const isActive = (href: string) => {
    if (href === "/contact") return pathname === "/contact";
    const section = sectionFromHref(href);
    return pathname === "/" && hash === section;
  };

  return (
    <>
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -28, opacity: 0 }}
        transition={{ duration: 0.55, ease }}
        className={cn(
          "mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between rounded-full border px-4 backdrop-blur-2xl transition-colors duration-500 md:px-6",
          scrolled
            ? "border-white/12 bg-black/70"
            : "border-white/8 bg-black/45",
        )}
      >
        <Link
          href="/"
          aria-label={`${site.name} — back to top`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 font-display text-[22px] leading-none text-mint"
          onClick={() => {
            setHash("");
            setOpen(false);
          }}
        >
          G
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setHash(sectionFromHref(item.href))}
                className="relative py-1"
              >
                <motion.span
                  className={cn(
                    "text-sm",
                    active ? "text-white" : "text-muted",
                  )}
                  whileHover={{ y: -1, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-1 h-px bg-mint"
                    transition={{ duration: 0.35, ease }}
                  />
                )}
              </Link>
            );
          })}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="rounded-full bg-mint px-4 py-2 text-sm font-medium text-[#070708] transition-colors hover:bg-[#d7efc8]"
            >
              Contact
            </Link>
          </motion.div>
        </nav>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.22, ease }}
              className="inline-flex"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="mx-auto mt-2 w-full max-w-[1180px] overflow-hidden rounded-[24px] border border-white/8 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-5">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setHash(sectionFromHref(item.href));
                      setOpen(false);
                    }}
                    className={cn(
                      "block rounded-xl px-2 py-2.5 text-lg",
                      isActive(item.href) ? "text-mint" : "text-white/85",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3, delay: nav.length * 0.05, ease }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-mint px-4 py-2 text-sm font-medium text-[#070708]"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="h-[88px] shrink-0 md:h-[92px]" aria-hidden />
    </>
  );
}
