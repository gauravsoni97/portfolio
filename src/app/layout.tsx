import type { Metadata } from "next";
import { Geist, Halant } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/parallax";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${halant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
