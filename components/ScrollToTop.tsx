"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("ScrollToTop ejecutado en:", pathname);

    // Busca el contenedor que realmente tiene el scroll
    const scrollContainer =
      document.querySelector("[data-nextjs-scroll-focus-boundary]") ||
      document.scrollingElement ||
      document.documentElement;

    scrollContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
