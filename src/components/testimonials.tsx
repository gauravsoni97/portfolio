import { site, testimonials } from "@/data/content";
import { GlowCard } from "@/components/glow-card";
import { Reveal } from "@/components/reveal";
import { FaLinkedin } from "react-icons/fa";

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((item, index) => (
        <Reveal
          key={item.name}
          delay={index * 0.08}
          from={index % 2 === 0 ? "left" : "right"}
          className="h-full"
        >
          <GlowCard className="flex h-full flex-col rounded-[26px] p-6 md:p-7 transition-transform duration-500 hover:-translate-y-1">
            <p className="font-display text-4xl leading-none text-mint/70">“</p>
            <p className="mt-2 text-[15px] leading-7 text-white/82">{item.quote}</p>
            <a
              href={item.linkedin ?? site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-3 pt-6 text-white/90 transition-colors hover:text-mint"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2]/15">
                <FaLinkedin size={15} color="#0A66C2" />
              </span>
              <span>
                <span className="block text-sm">{item.name}</span>
                <span className="block text-sm text-muted">{item.role}</span>
              </span>
            </a>
          </GlowCard>
        </Reveal>
      ))}
    </div>
  );
}
