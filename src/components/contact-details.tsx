"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { Avatar } from "@/components/avatar";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/content";

const phoneDisplay = "+91 80533 40056";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    copy: site.email,
    hint: "Best for roles and project briefs",
    Icon: SiGmail,
  },
  {
    label: "WhatsApp",
    value: phoneDisplay,
    href: site.whatsapp,
    copy: site.phoneHref,
    hint: "Fastest way to start a conversation",
    Icon: SiWhatsapp,
  },
  {
    label: "Phone",
    value: phoneDisplay,
    href: `tel:${site.phoneHref}`,
    copy: site.phoneHref,
    hint: "Available on weekdays, IST",
    Icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gauravsoni97",
    href: site.linkedin,
    hint: "Work history and recommendations",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/gauravsoni97",
    href: site.github,
    hint: "Personal projects and code",
    Icon: SiGithub,
  },
  {
    label: "Location",
    value: site.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`,
    hint: "Open to remote and hybrid work",
    Icon: MapPin,
  },
] as const;

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async (event) => {
        event.preventDefault();
        event.stopPropagation();
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-white/25 hover:bg-white/8"
      aria-label={copied ? "Copied" : "Copy"}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function ContactDetails() {
  return (
    <div className="space-y-5">
      <Reveal>
        <article className="glass-card relative overflow-hidden rounded-[32px] p-6 md:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-mint/12 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 md:h-20 md:w-20" />
              <div>
                <p className="text-lg font-medium">{site.name}</p>
                <p className="mt-1 text-sm text-muted">{site.role}</p>
                <p className="mt-1 text-sm text-muted">{site.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-mint">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                Open to work
              </span>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-[#070708] transition-colors hover:bg-[#d7efc8]"
              >
                Write an email
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {channels.map((item, index) => {
          const { Icon } = item;
          const external = item.href.startsWith("http");

          return (
            <Reveal key={item.label} delay={index * 0.05}>
              <a
                href={item.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="glass-card group flex h-full items-start justify-between gap-4 rounded-[26px] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/18"
              >
                <div className="flex min-w-0 items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white">
                    <Icon size={18} color="white" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-mint">
                      {item.label}
                    </span>
                    <span className="mt-2 block truncate text-lg text-white">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {item.hint}
                    </span>
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {"copy" in item && item.copy ? (
                    <CopyButton value={item.copy} />
                  ) : null}
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors group-hover:border-white/25 group-hover:text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
