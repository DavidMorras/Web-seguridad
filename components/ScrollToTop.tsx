"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("ScrollToTop ejecutado en:", pathname);

    // 1. Contenedor interno de Next.js (el que realmente tiene el scroll)
    const nextScrollContainer = document.querySelector("[data-nextjs-scroll-focus-boundary]");

    if (nextScrollContainer) {
      nextScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Fallback: documento
    const root = document.scrollingElement || document.documentElement;
    root.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
