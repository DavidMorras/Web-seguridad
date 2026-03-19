import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ClientWrapper from "@/components/ClientWrapper";
import Link from "next/link"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Jorge Morrás | Consultor en Ciberseguridad',
  description: 'Consultor especializado en ciberseguridad, formación NIS2, auditorías, ISO 27001 y gestión de riesgos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
<Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
  <Shield className="h-6 w-6 text-primary" />
  <span className="font-semibold text-foreground">Jorge Morrás</span>
</Link>
