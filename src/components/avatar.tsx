import Image from "next/image";
import { images, site } from "@/data/content";
import { cn } from "@/lib/cn";

export function Avatar({
  className,
  priority = false,
  rounded = "full",
  blend = false,
}: {
  className?: string;
  priority?: boolean;
  rounded?: "full" | "xl" | "arch" | "blob";
  blend?: boolean | "side";
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        blend === true && "bg-transparent hero-photo-blend",
        blend === "side" && "bg-transparent hero-photo-blend-side",
        !blend && "bg-[#111]",
        !blend && rounded === "full" && "rounded-full",
        !blend && rounded === "xl" && "rounded-[36px] md:rounded-[44px]",
        !blend && rounded === "arch" && "rounded-t-[999px] rounded-b-[28px]",
        !blend && rounded === "blob" && "hero-blob",
        className,
      )}
    >
      <Image
        src={images.avatar}
        alt={site.name}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 46vw, 70vw"
        className="object-cover object-top"
      />
    </div>
  );
}
