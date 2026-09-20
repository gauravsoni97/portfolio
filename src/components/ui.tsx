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
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  download?: boolean | string;
}) {
  const classNames = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-mint text-[#070708] hover:bg-[#d7efc8] hover:shadow-[0_0_28px_rgba(200,230,181,0.28)]",
    variant === "ghost" &&
      "border border-mint/25 bg-mint/[0.04] text-mint hover:border-mint/50 hover:bg-mint/10",
    className,
  );

  if (download) {
    return (
      <a
        href={href}
        download={download === true ? true : download}
        className={classNames}
      >
        {children}
      </a>
    );
  }

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

