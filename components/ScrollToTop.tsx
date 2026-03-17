"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("ScrollToTop ejecutado en:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
