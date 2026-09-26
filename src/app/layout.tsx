import type { Metadata } from "next";
import { Geist, Halant } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/parallax";
import { Preloader } from "@/components/preloader";
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
      className={`${geistSans.variable} ${halant.variable} h-full overflow-x-hidden antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full w-full max-w-full flex-col overflow-x-hidden bg-background text-foreground"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <Preloader>
            <div className="w-full max-w-full overflow-x-clip">
              <ScrollProgress />
              <Header />
              <main className="flex-1 overflow-x-clip">{children}</main>
              <Footer />
            </div>
          </Preloader>
        </SmoothScroll>
      </body>
    </html>
  );
}
