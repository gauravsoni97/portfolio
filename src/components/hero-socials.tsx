import { socials } from "@/data/content";
import { cn } from "@/lib/cn";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";

const icons = {
  Gmail: SiGmail,
  LinkedIn: FaLinkedin,
  WhatsApp: SiWhatsapp,
  GitHub: SiGithub,
};

export function HeroSocials({
  className,
  variant = "circle",
}: {
  className?: string;
  variant?: "circle" | "plain";
}) {
  return (
    <div className={cn("mt-8 flex flex-wrap items-center gap-3", className)}>
      {socials.map((item) => {
        const Icon = icons[item.label as keyof typeof icons];
        if (!Icon) return null;
        const external = item.href.startsWith("http");

        return (
          <a
            key={item.label}
            href={item.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={item.label}
            title={item.label}
            className={
              variant === "plain"
                ? "text-white/75 transition-colors hover:text-mint"
                : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/8"
            }
          >
            <Icon size={variant === "plain" ? 16 : 18} color="currentColor" />
          </a>
        );
      })}
    </div>
  );
}
