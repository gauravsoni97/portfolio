"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { smoothScrollTo } from "@/lib/scroll";

function HashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const section = document.getElementById(hash);
      if (section) smoothScrollTo(lenis, section, -100);
    };

    const onReady = () => window.setTimeout(scrollToHash, 80);
    window.addEventListener("portfolio:ready", onReady, { once: true });
    const fallback = window.setTimeout(scrollToHash, 4500);

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      if (href === "/" || href === "/#") {
        if (window.location.pathname !== "/") return;
        event.preventDefault();
        window.history.replaceState(null, "", "/");
        smoothScrollTo(lenis, 0);
        return;
      }

      if (!href.startsWith("/#") && !href.startsWith("#")) return;
      const id = href.split("#")[1];
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      window.history.replaceState(null, "", `/#${id}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
      smoothScrollTo(lenis, section, -100);
    };

    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("portfolio:ready", onReady);
      document.removeEventListener("click", onClick);
    };
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.35,
        smoothWheel: true,
        anchors: true,
        wheelMultiplier: 0.9,
      }}
    >
      <HashScroll />
      {children}
    </ReactLenis>
  );
}
