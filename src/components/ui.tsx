import Link from "next/link";
import { cn } from "@/lib/cn";

export { PageHero, SectionHeading } from "@/components/section-heading";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const classNames = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-foreground text-background hover:bg-mint hover:shadow-[0_0_28px_rgba(200,230,181,0.25)]",
    variant === "ghost" &&
      "border border-white/12 bg-white/[0.02] text-foreground hover:border-white/30 hover:bg-white/6",
    className,
  );

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}

