"use client";

import { useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

export function GlowCard({
  children,
  className,
  active = false,
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
}) {
  const [spot, setSpot] = useState({ x: 80, y: 40, on: false });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpot({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      on: true,
    });
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => setSpot((value) => ({ ...value, on: false }))}
      className={cn(
        "glass-card group relative overflow-hidden transition-[border-color,box-shadow] duration-500",
        active && "border-mint/25 shadow-[0_0_40px_rgba(200,230,181,0.06)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          opacity: spot.on ? 1 : 0,
          background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(200,230,181,0.13), transparent 55%)`,
        }}
      />
      <div className="relative z-0 flex h-full flex-col">{children}</div>
    </div>
  );
}
