import { education, experience, projects } from "@/data/content";
import { WorkTogether } from "@/components/cta";
import { ExperienceTimeline } from "@/components/experience-card";
import { GlowCard } from "@/components/glow-card";
import { Hero } from "@/components/hero";
import { Parallax } from "@/components/parallax";
import { ProjectsGrid } from "@/components/projects-grid";
import { Reveal } from "@/components/reveal";
import { SkillsGrid } from "@/components/skills-grid";
import { Testimonials } from "@/components/testimonials";
import { Container, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="projects"
        className="relative scroll-mt-28 py-16 md:py-24 lg:py-32"
      >
        <Parallax
          speed={0.2}
          className="pointer-events-none absolute right-0 top-10 h-64 w-64"
        >
          <div className="h-full w-full rounded-full bg-mint/8 blur-3xl" />
        </Parallax>
        <Container className="relative">
          <Reveal from="left">
            <SectionHeading
              index="01"
              eyebrow="Selected work"
              title="Projects"
              watermark="Projects"
              description="Selected builds I shipped end to end — open a case to see the details."
            />
          </Reveal>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>

      <section
        id="skills"
        className="relative scroll-mt-28 overflow-hidden py-16 md:py-24"
      >
        <Parallax
          speed={0.22}
          className="pointer-events-none absolute left-0 top-24 h-64 w-64"
        >
          <div className="h-full w-full rounded-full bg-mint/8 blur-3xl" />
        </Parallax>
        <Container className="relative">
          <Reveal from="left">
            <SectionHeading
              index="02"
              eyebrow="Toolkit"
              title="Skills"
              watermark="Skills"
              description="The stack I use most — from markup and React to AI-assisted delivery."
            />
          </Reveal>
          <SkillsGrid />
        </Container>
      </section>

      <section
        id="experience"
        className="relative scroll-mt-28 overflow-hidden py-16 md:py-24"
      >
        <Parallax
          speed={0.18}
          className="pointer-events-none absolute right-0 top-32 h-72 w-72"
        >
          <div className="h-full w-full rounded-full bg-mint/10 blur-3xl" />
        </Parallax>
        <Container className="relative">
          <Reveal from="left">
            <SectionHeading
              index="03"
              eyebrow="Career"
              title="Experience"
              watermark="Career"
              description="From landing pages to live classrooms — roles, products, and the outcomes along the way."
            />
          </Reveal>
          <ExperienceTimeline roles={experience} />
        </Container>
      </section>

      <section
        id="testimonials"
        className="relative scroll-mt-28 overflow-hidden py-16 md:py-24"
      >
        <Container>
          <Reveal from="left">
            <SectionHeading
              index="04"
              eyebrow="LinkedIn"
              title="Voices"
              watermark="Voices"
              description="Notes from people I’ve worked with."
            />
          </Reveal>
          <Testimonials />
        </Container>
      </section>

      <section className="overflow-hidden py-16 md:py-24">
        <Container>
          <Reveal from="left">
            <SectionHeading
              index="05"
              eyebrow="Background"
              title="Education"
              watermark="Education"
            />
          </Reveal>
          <Reveal delay={0.1} from="scale">
            <GlowCard className="rounded-[28px] p-7 md:p-10">
              <Reveal delay={0.15}>
                <p className="text-sm text-mint">{education.period}</p>
              </Reveal>
              <Reveal delay={0.22}>
                <h3 className="mt-3 font-display text-[32px] leading-tight md:text-[42px]">
                  {education.degree}
                </h3>
              </Reveal>
              <Reveal delay={0.28}>
                <p className="mt-2 text-lg">{education.college}</p>
                <p className="mt-2 text-sm text-muted">{education.location}</p>
              </Reveal>
              <Reveal delay={0.34}>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                  {education.detail}
                </p>
              </Reveal>
            </GlowCard>
          </Reveal>
        </Container>
      </section>

      <WorkTogether />
    </>
  );
}
