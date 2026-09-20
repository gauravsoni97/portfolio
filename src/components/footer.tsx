import { socials, site } from "@/data/content";
import { Container } from "@/components/ui";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";

const icons = {
  Gmail: SiGmail,
  LinkedIn: FaLinkedin,
  WhatsApp: SiWhatsapp,
  GitHub: SiGithub,
};

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-8 md:py-10">
      <Container className="flex items-center justify-between gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex items-center gap-5">
          {socials.map((item) => {
            const Icon = icons[item.label as keyof typeof icons];
            if (!Icon) return null;
            const external = item.href.startsWith("http");

            return (
              <a
                key={item.label}
                href={item.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={item.label}
                title={item.label}
                className="text-white/80 transition-colors hover:text-white"
              >
                <Icon size={18} color="currentColor" />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
