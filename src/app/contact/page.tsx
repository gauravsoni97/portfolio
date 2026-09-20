import { site } from "@/data/content";
import { ContactDetails } from "@/components/contact-details";
import { Container, PageHero } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${site.name} directly by email, WhatsApp, LinkedIn, or phone.`,
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb hero-orb-mint absolute left-0 top-10 h-72 w-72" />
        <div className="hero-orb hero-orb-blue absolute right-0 top-40 h-64 w-64" />
      </div>
      <Container className="relative">
        <PageHero eyebrow="Contact" title="Let’s talk." />
        <p className="mb-10 max-w-xl text-base leading-7 text-muted md:-mt-6">
          No forms — reach me directly. I usually reply within a day on email or
          WhatsApp.
        </p>
        <ContactDetails />
      </Container>
    </section>
  );
}
