"use client";
import ScrollToTop from "./ScrollToTop";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}
