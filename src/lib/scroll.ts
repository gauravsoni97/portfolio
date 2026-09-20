import type Lenis from "lenis";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function smoothScrollTo(
  lenis: Lenis | undefined,
  target: number | HTMLElement,
  offset = 0,
) {
  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.4,
      easing: easeOutExpo,
    });
    return;
  }

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
