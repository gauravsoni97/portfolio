"use client";

import { useEffect } from "react";

export function ClientRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <p className="px-6 py-24 text-sm text-muted">Redirecting…</p>
  );
}
