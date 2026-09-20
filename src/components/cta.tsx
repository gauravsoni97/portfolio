import { site } from "@/data/content";
import { GlowCard } from "@/components/glow-card";
import { Parallax, SectionMark } from "@/components/parallax";
import { ButtonLink, Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function WorkTogether() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <GlowCard className="relative overflow-hidden rounded-[32px] p-8 md:p-14">
          <SectionMark text="Together" className="-left-6 top-[-0.2em]" />
          <Parallax
            speed={0.24}
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56"
          >
            <div className="h-full w-full rounded-full bg-mint/12 blur-3xl" />
          </Parallax>
          <Reveal>
            <div className="relative z-10 mb-5 flex items-center gap-3">
              <span className="font-display text-sm tracking-[0.2em] text-mint">06</span>
              <span className="h-px flex-1 bg-gradient-to-r from-mint/50 via-white/10 to-transparent" />
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
                Let’s work together
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08} from="left">
            <h2 className="relative z-10 max-w-3xl font-display text-[40px] leading-[0.88] tracking-tight md:text-[68px]">
              Building the next frontend experience?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              {site.role} based in {site.location}. Open to conversations about
              high-performance web apps, EdTech, and AI-assisted product work.
            </p>
          </Reveal>
          <Reveal delay={0.24} from="scale">
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href={site.linkedin} variant="ghost">
                LinkedIn
              </ButtonLink>
            </div>
          </Reveal>
        </GlowCard>
      </Container>
    </section>
  );
}
